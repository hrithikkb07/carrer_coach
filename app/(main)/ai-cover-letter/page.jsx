import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";
import CreateButtonClient from "./_components/CreateButtonClient";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">My Cover Letters</h1>

        {/* Only change made — replaced Link with loader button */}
        <CreateButtonClient />
      </div>

      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
