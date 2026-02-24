"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAI } from "@/lib/gemini"; // <-- your new shared engine
import { checkQuizRateLimit } from "@/lib/rateLimit";



/* -------------------------------------------------------
   1) Generate Quiz (Uses generateAI)
-------------------------------------------------------- */
export async function generateQuiz(topic) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId }
  });
  if (!user) throw new Error("User not found");

  try {
    // ⛔ may throw RATE_LIMIT
    await checkQuizRateLimit(user.id);

    if (!topic || topic.trim().length < 3) {
      throw new Error("Invalid topic");
    }

    const prompt = `
      Generate 10 technical MCQ interview questions on the topic:
      "${topic}"
      Difficulty: Medium (interview level)
      Format STRICT JSON:
      {
        "questions": [
          {
            "question": "",
            "options": ["", "", "", ""],
            "correctAnswer": "",
            "explanation": ""
          }
        ]
      }
      Rules:
      - Options must be realistic
      - correctAnswer must exactly match one option
      - Explanation should be 1–2 lines only
      Return ONLY valid JSON.
    `;

    const raw = await generateAI(prompt);
    const cleaned = raw.replace(/```json|```/g, "").trim();
    const quiz = JSON.parse(cleaned);

    return quiz.questions;

  } 
 catch (err) {
    if (err.code === "RATE_LIMIT") {
      return { error: "RATE_LIMIT" };
    }

    console.error("Quiz generation failed:", err);
    return { error: "FAILED" };
  }
}


/* -------------------------------------------------------
   2) Save Quiz Result + Improvement Tip (Uses generateAI)
-------------------------------------------------------- */
export async function saveQuizResult(questions, answers, score) {

  // abnswers is array of user answers indexed similarly to questions array
  // questions is array of question objects with question, correctAnswer, explanation
  // score is number

  const { userId } = await auth();
  
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId }
  });

  if (!user) throw new Error("User not found");

  // Prepare question results with correctness and explanations of each user answer + correct answer
  const questionResults = questions.map((q, idx) => ({
    question: q.question,
    answer: q.correctAnswer,
    userAnswer: answers[idx],
    isCorrect: q.correctAnswer === answers[idx],
    explanation: q.explanation
  }));

  const wrong = questionResults.filter((q) => !q.isCorrect);

  let improvementTip = null;

  if (wrong.length > 0) {
    const wrongText = wrong
      .map(
        (q) =>
          `Question: "${q.question}"\nCorrect: "${q.answer}"\nUser: "${q.userAnswer}"`
      )
      .join("\n\n");

    const improvementPrompt = `
      Provide a 2-sentence improvement tip based on these mistakes.
      Do NOT mention the mistakes directly — only what the learner should improve.

      ${wrongText}
    `;

    try {
      improvementTip = (await generateAI(improvementPrompt)).trim(); // 🔥 unified engine
    } 
    catch (err) {
      console.error("AI improvement tip failed:", err);
      improvementTip = "Keep practicing to improve your skills."; // fallback tip
    }
  }

  // THIS IS THE EXPECTED SCHEMA FOR SAVING QUIZ RESULT
//   {
//   "quizScore": 70,
//   "questions": [
//     {
//       "question": "What is closure?",
//       "answer": "C",
//       "userAnswer": "B",
//       "isCorrect": false,
//       "explanation": "..."
//     }
//   ],
//   "improvementTip": "..."
// }

  try {
    return await db.assessment.create({
      data: {
        userId: user.id,
        quizScore: score,
        questions: questionResults,
        category: "Technical",
        improvementTip
      }
    });
  } 
  catch (error) {
    console.error("Error saving quiz result:", error);
    throw new Error("Failed to save quiz result");
  }
}

/* -------------------------------------------------------
   3) Get Assessments
-------------------------------------------------------- */
export async function getAssessments() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId }
  });

  if (!user) throw new Error("User not found");

  try {
    return await db.assessment.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "asc" }
    });
  } 
  catch (error) {
    console.error("Error fetching assessments:", error);
    throw new Error("Failed to fetch assessments");
  }
}
