"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAI } from "@/lib/gemini";

/* ================================
   1️⃣ AI ONLY — TIPS & COMPLEXITY
================================ */
export async function getAITips({ link, intuition }) {
  if (!link || !intuition) {
    throw new Error("Missing input for AI");
  }

  const prompt = `
You are a senior DSA interview expert.

Problem Link:
${link}

User's Intuition:
${intuition}

STRICT RULES:
- Give EXACTLY 3 short tips (1 line each).
- Tips must be practical problem-solving tricks.
- No explanation paragraphs.
- No examples.
- No markdown.
- No extra text.
- Be concise.

Return ONLY valid JSON in this exact format:

{
  "tips": "1) Tip one. 2) Tip two. 3) Tip three.",
  "time": "O(...)",
  "space": "O(...)"
}
`;

  return await generateAI(prompt, { expectJson: true });
}

/* ================================
   2️⃣ SAVE NOTE (NO AI HERE)
================================ */
export async function addNote({ link, intuition, tips, time, space }) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  if (!link || !intuition) {
    throw new Error("Missing required fields");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  return await db.note.create({
    data: {
      userId: user.id,
      link,
      intuition,
      tips: tips || "",
      time: time || null,
      space: space || null,
    },
  });
}

/* ================================
   3️⃣ FETCH NOTES
================================ */
export async function getNotes() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  return await db.note.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });
}


export async function deleteNote(noteId) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  await db.note.deleteMany({
    where: {
      id: noteId,
      userId: user.id,
    },
  });
}


