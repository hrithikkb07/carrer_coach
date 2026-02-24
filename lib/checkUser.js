import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  try {
    const existingUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    // ---------------------------------------------
    // If user already exists → redirect ONLY IF
    // onboarding is not completed
    // ---------------------------------------------
    if (existingUser) {
      return existingUser;
    }

    // ---------------------------------------------
    // If user does NOT exist → create new user
    // ---------------------------------------------
    const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;

  } catch (err) {
    console.error("checkUser() error:", err.message);
    return null;
  }
};
