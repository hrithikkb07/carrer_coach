import { clerkMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// Routes that require authentication
const protectedRoutes = [
  "/dashboard",
  "/resume",
  "/interview",
  "/ai-cover-letter",
  "/onboarding",
  "/sheetprep/company",
  "/notes",
  "/core",
  "/roadmap",
  "/ats",
];

function isProtectedRoute(pathname) {
  return protectedRoutes.some(route => pathname.startsWith(route));
}

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const pathname = req.nextUrl.pathname;

  if (!userId && isProtectedRoute(pathname)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};

// 🔥 IMPORTANT: Fix for Vercel Edge error
export const runtime = "nodejs";