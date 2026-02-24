"use server";

import { generateAI } from "@/lib/gemini";

export async function askChatBot(question) {
  if (!question) throw new Error("Empty question");

  const prompt = `

You are an AI Interview Assistant for a career-prep platform.
Rules:
- Answer strictly based on DSA, system design, roadmaps, core CS subjects.
- Use simple, plain text.
- Do NOT use markdown.
- Do NOT use **, bullets, or headings.
- Keep answers concise but clear.

Question:
${question}
`;
  return await generateAI(prompt);
}
