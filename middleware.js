import { auth } from "@clerk/nextjs/server";
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

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;

  if (isProtectedRoute(pathname)) {
    try {
      const { userId } = await auth();
      if (!userId) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};