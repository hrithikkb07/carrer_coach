import { coreSubjects } from "@/data/core";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default async function CoreSubjectPage({ params }) {
  const subject = await params;
  const data = coreSubjects.find((s) => s.slug === subject.slug);

  if (!data) {
    return (
      <div className="container mx-auto max-w-4xl p-6">
        <h1 className="text-2xl font-bold">Subject not found</h1>
        <Link href="/coresubjects" className="text-primary mt-4 inline-block">
          ← Back to Subjects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl p-6">
      {/* Back */}
      <Link
        href="/coresubjects"
        className="inline-flex items-center gap-1 mb-8 text-lg font-medium text-muted-foreground hover:text-primary transition"
      >
        ← Back to All Subjects
      </Link>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          {data.title}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="space-y-6">
        {data.phases.map((phase, idx) => (
          <AccordionItem
            key={idx}
            value={`phase-${idx}`}
            className="border rounded-xl bg-background shadow-sm"
          >
            <AccordionTrigger className="px-6 py-4 text-xl font-semibold hover:no-underline">
              {phase.level}
            </AccordionTrigger>

            <AccordionContent className="px-6 pb-6 space-y-6">
              {phase.questions.map((q, i) => (
                <div
                  key={i}
                  className="rounded-xl border bg-muted/30 p-6 hover:shadow-md hover:-translate-y-[1px] transition-all"
                >
                  {/* Question */}
                  <h3 className="text-xl font-semibold leading-snug mb-3">
                    {q.question}
                  </h3>

                  {/* Answer */}
                  <p className="text-base leading-relaxed text-foreground">
                    <span className="font-semibold text-primary">
                      Answer:
                    </span>{" "}
                    {q.answer}
                  </p>

                  {/* Interviewer Angle */}
                  <div className="mt-4 rounded-lg bg-background/60 border px-4 py-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Interviewer Angle:
                      </span>{" "}
                      {q.interviewer}
                    </p>
                  </div>

                  {/* References */}
                  {q.references?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {q.references.map((ref, r) => (
                        <a
                          key={r}
                          href={ref}
                          target="_blank"
                          className="text-sm font-medium text-primary hover:underline underline-offset-4"
                        >
                          Explore More →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
