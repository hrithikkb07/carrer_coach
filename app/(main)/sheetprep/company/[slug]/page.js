import { COMPANY_REPO_MAP } from "@/data/generated/companyRepoMap";
import { getDoneQuestions } from "@/actions/questionProgress";
import QuestionCard from "../_components/QuestionCard";
import Link from "next/link";

export default async function CompanyQuestionsPage({ params }) {
  const { slug } = await params;

  const questions = COMPANY_REPO_MAP[slug] || [];
  const doneKeys = new Set(await getDoneQuestions(slug));

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-bold capitalize mb-5">
          {slug} -  Company Sheet
        </h1>

        <div className="mt-2 flex gap-4 text-lg text-muted-foreground">
          <Link href="/sheetprep/company" className="hover:underline">
            ← Companies Sheets
          </Link>

          <Link href="/" className="hover:underline">
            ← Home
          </Link>
        </div>
      </div>

      {/* QUESTION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((q) => (
          <QuestionCard
            key={q.key}
            question={q}
            companySlug={slug}
            isDone={doneKeys.has(q.key)}  
          />
        ))}
      </div>
    </div>
  );
}
