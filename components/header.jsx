import React from "react";
import Link from "next/link";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import HeaderClient from "./HeaderClient";


export default async function Header() {

   await checkUser();// ensure user exists in the database then move on to render the header
   // this function checks if the user exists in the database, if not it creates a new user

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/prepprooo.png"}
            alt="Sensai Logo"
            width={190}
            height={190}
            className="w-32 md:w-40 ojbect-contain"
          />
        </Link>

        {/* Action Buttons */}
        <HeaderClient />
      </nav>
    </header>
  );
}
