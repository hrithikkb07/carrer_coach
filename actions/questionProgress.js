"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

/* -------------------------------
   MARK / UNMARK QUESTION
-------------------------------- */
export async function toggleQuestionDone({
  companySlug,
  questionKey,
  isDone,
}) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  if (isDone) {
    return db.userQuestionProgress.upsert({
      where: {
        userId_companySlug_questionKey: {
          userId: user.id,
          companySlug,
          questionKey,
        },
      },
      update: { isDone: true },
      create: {
        userId: user.id,
        companySlug,
        questionKey,
        isDone: true,
      },
    });
  }

  return db.userQuestionProgress.delete({
    where: {
      userId_companySlug_questionKey: {
        userId: user.id,
        companySlug,
        questionKey,
      },
    },
  });
}

/* -------------------------------
   FETCH DONE QUESTIONS
-------------------------------- */
export async function getDoneQuestions(companySlug) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  const rows = await db.userQuestionProgress.findMany({
    where: {
      userId: user.id,
      companySlug,
      isDone: true,
    },
    select: { questionKey: true },
  });

  return rows.map((r) => r.questionKey);
}


/* -------------------------------
   FETCH COMPANY-WISE PROGRESS
-------------------------------- */
export async function getCompanyProgress() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  const rows = await db.userQuestionProgress.groupBy({
    by: ["companySlug"],
    where: {
      userId: user.id,
      isDone: true,
    },
    _count: {
      _all: true,
    },
  });

  /**
   * Returns:
   * {
   *   infosys: 12,
   *   amazon: 8,
   *   google: 0
   * }
   */
  return Object.fromEntries(
    rows.map((r) => [r.companySlug, r._count._all])
  );
}
