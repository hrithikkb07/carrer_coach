"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import NavActions from "./NavActions";

export default function HeaderClient() {
  return (
    <div className="flex items-center space-x-2 md:space-x-4">
      {/* this part will show when user is signed in */}
      <SignedIn>
        <NavActions />
      </SignedIn>

      {/* this part will show when user is signed out */}
      <SignedOut>
        <SignInButton>
          <Button variant="outline">Sign In</Button>
        </SignInButton>
      </SignedOut>

      {/* this is user button for profile and sign out */}
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
              userButtonPopoverCard: "shadow-xl",
              userPreviewMainIdentifier: "font-semibold",
            },
          }}
          afterSignOutUrl="/"
        />
      </SignedIn>
    </div>
  );
}
