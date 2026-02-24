import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // all dashboard routes wtver after /dashboard
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
  "/onboarding(.*)",
  "/sheetprep/company(.*)",
  "/notes(.*)",
  "/core(.*)",
  "/roadmap(.*)",
  "/ats(.*)",
]);

// middleware to protect routes
export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // get user id from auth of clerk

  // if no user id and trying to access protected route, redirect to sign in

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
