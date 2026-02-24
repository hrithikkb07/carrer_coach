import { redis } from "./redis"; // make sure this path is correct

const MAX_REQUESTS = 3;
const WINDOW_SECONDS = 60 * 60; // 1 hour

/* ---------------------------
   QUIZ RATE LIMIT
---------------------------- */
export async function checkQuizRateLimit(userId) {
  const key = `quiz:${userId}`;

  const count = await redis.incr(key);

  // first request → set expiry
  if (count === 1) {
    await redis.expire(key, WINDOW_SECONDS);
  }

  if (count > MAX_REQUESTS) {
    const err = new Error("RATE_LIMIT");
    err.code = "RATE_LIMIT";
    throw err;
  }
}

/* ---------------------------
   ATS RATE LIMIT
---------------------------- */
export async function checkATSRateLimit(userId) {
  const key = `ats:${userId}`;

  const count = await redis.incr(key);

  // first request → set expiry
  if (count === 1) {
    await redis.expire(key, WINDOW_SECONDS);
  }

  if (count > MAX_REQUESTS) {
    const err = new Error("RATE_LIMIT");
    err.code = "RATE_LIMIT";
    throw err;
  }
}
