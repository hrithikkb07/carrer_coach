"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAI } from "@/lib/gemini"; // 🔥 central AI engine

/* -------------------------------------------------------
   Generate Cover Letter
-------------------------------------------------------- */
export async function generateCoverLetter(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId }
  });

  if (!user) throw new Error("User not found");

  const prompt = `

    Write a professional cover letter for a **${data.jobTitle}** position at **${data.companyName}**.
    Job Description:
    ${data.jobDescription}

    Requirements:
    1. Professional, enthusiastic tone.
    2. Highlight relevant skills and achievements.
    3. Connect experience to company goals.
    4. Max 400 words.
    5. Use clean markdown.
    6. Include specific achievements.
    7. Avoid generic statements.

    Return ONLY the markdown cover letter. No extra notes.
  `;

  try {
    // Call AI with automatic fallback + rotating keys
    const content = await generateAI(prompt);

    const letter = await db.coverLetter.create({
      data: {
        content,
        jobDescription: data.jobDescription,
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        status: "completed",
        userId: user.id
      }
    });

    return letter;
  } 
  catch (err) {
    console.error("Error generating cover letter:", err);
    throw new Error("Failed to generate cover letter");
  }
}

/* -------------------------------------------------------
   Fetch All Cover Letters
-------------------------------------------------------- */
export async function getCoverLetters() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId }
  });

  if (!user) throw new Error("User not found");

  return await db.coverLetter.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" }
  });
}

/* -------------------------------------------------------
   Fetch Single Cover Letter
-------------------------------------------------------- */
export async function getCoverLetter(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId }
  });

  if (!user) throw new Error("User not found");

  return await db.coverLetter.findUnique({
    where: { id, userId: user.id }
  });
}

/* -------------------------------------------------------
   Delete Cover Letter
-------------------------------------------------------- */
export async function deleteCoverLetter(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId }
  });

  if (!user) throw new Error("User not found");

  return await db.coverLetter.delete({
    where: { id, userId: user.id }
  });
}
