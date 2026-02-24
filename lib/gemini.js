"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEYS = (process.env.GEMINI_API_KEYS || process.env.GEMINI_API_KEY)?.split(",").map(k => k.trim()) ?? [];

if (API_KEYS.length === 0) {
  console.error("❌ No Gemini keys found in GEMINI_API_KEYS or GEMINI_API_KEY");
}

function getClient(apiKey) {
  return new GoogleGenerativeAI(apiKey);
}

/* ------------------------------------------------------
   RETRY WRAPPER (handles overload, 429, etc.)
------------------------------------------------------ */
async function retryAI(fn, retries = 4, delay = 500) {
  try {
    return await fn();
  } catch (err) {
    const retryable =
      err?.status === 429 ||
      err?.status === 503 ||
      err?.status === 500 ||
      err?.statusText === "Service Unavailable";

    if (retryable && retries > 0) {
      console.warn(`🔄 Retry attempt left: ${retries}`);
      await new Promise(res => setTimeout(res, delay));
      return retryAI(fn, retries - 1, delay * 1.5);
    }

    throw err;
  }
}

/* ------------------------------------------------------
   MAIN FALLBACK ENGINE (RANDOMIZED KEY + MODEL ORDER)
------------------------------------------------------ */
export async function generateAI(prompt, { expectJson = false } = {}) {
  if (!API_KEYS.length) throw new Error("No Gemini API keys available");

  // 1️⃣ Shuffle API keys to randomize which key gets used
  const shuffledKeys = [...API_KEYS].sort(() => Math.random() - 0.5);

  // 2️⃣ Shuffle models too (for better load balancing)
  const models = ["gemini-2.5-flash", "gemini-2.5-pro", "gemini-flash-latest"]
    .sort(() => Math.random() - 0.5);

  // 3️⃣ Loop over shuffled keys and models
  for (const apiKey of shuffledKeys) {
    const client = getClient(apiKey);

    for (const modelName of models) {
      try {
        console.log(`🚀 Using model=${modelName}, key=${apiKey.slice(0, 6)}...`);

        const model = client.getGenerativeModel({ model: modelName });

        const result = await retryAI(() => model.generateContent(prompt));

        const text = result.response.text().trim();
        const cleaned = text
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

        return expectJson ? JSON.parse(cleaned) : cleaned;
      } catch (err) {
        console.error(
          `❌ Failed model=${modelName}, key=${apiKey.slice(0, 6)} →`,
          err?.message || err
        );
        continue;
      }
    }
  }

  throw new Error("All Gemini API keys + models failed.");
}
