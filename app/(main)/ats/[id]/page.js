import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import DeleteAtsButton from "../_components/DeleteAtsButton";

/* ------------------------------------------------------------------ */
/* ------------------------------ PAGE ------------------------------- */
/* ------------------------------------------------------------------ */

export default async function ATSReportPage({ params }) {
  const { id: reportId } = await params;
  if (!reportId) notFound();

  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) notFound();

  const user = await db.user.findUnique({
    where: { clerkUserId },
  });
  if (!user) notFound();

  const report = await db.atsReport.findUnique({
    where: { id: reportId },
  });
  if (!report || report.userId !== user.id) notFound();

  const r = report.sectionReport;

  return (
    <div className="container mx-auto p-6 max-w-6xl space-y-14">
      {/* Back */}
      <Link
        href="/ats"
        className="text-lg text-muted-foreground hover:underline"
      >
        ← Back to ATS Page
      </Link>

      {/* ================= HERO HEADER ================= */}
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 via-background to-background p-8">
        <div className="flex justify-between items-start gap-8">
          <div className="space-y-6">
            {/* SCORE */}
            <div className="flex items-end gap-4">
              <span className="text-6xl font-extrabold tracking-tight text-primary">
                {report.score}
              </span>
              <span className="text-2xl text-muted-foreground mb-1">
                /100 ATS Score
              </span>
            </div>

            {/* SUMMARY */}
            <p className="text-lg leading-relaxed text-foreground/90 max-w-3xl">
              {r.overall_summary}
            </p>

            {/* STRENGTH */}
            <div className="inline-flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                Overall Strength
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                {r.strength_level}
              </span>
            </div>
          </div>

          <DeleteAtsButton reportId={report.id} />
        </div>
      </div>

      {/* ================= SKILLS ================= */}
      <Section title="Skills Match Analysis">
        <SkillGroup
          title="Strong Matches"
          data={r.skills.strong}
          variant="good"
        />
        <SkillGroup
          title="Partial Matches"
          data={r.skills.partial}
          variant="warn"
        />
        <SkillGroup
          title="Missing / Recommended Skills"
          data={r.skills.missing}
          variant="bad"
        />
      </Section>

      {/* ================= PROJECTS ================= */}
      <Section title="Project Evaluation">
        <div className="space-y-8">
          {Array.isArray(r.projects) &&
            r.projects.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl border bg-background p-6 space-y-5"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    {p.name}
                  </h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-muted">
                    Relevance: {p.relevance}
                  </span>
                </div>

                <List title="What Works Well" items={p.good} />
                <List title="What’s Missing" items={p.missing} />
                <List
                  title="Suggestions to Improve"
                  items={p.suggestions}
                />
              </div>
            ))}
        </div>
      </Section>

      {/* ================= EXPERIENCE ================= */}
      <Section title="Experience Alignment">
        <div className="rounded-2xl border bg-background p-6 space-y-5">
          <p className="text-lg">
            <strong>Overall Rating:</strong>{" "}
            <span className="text-primary font-semibold">
              {r.experience.rating}
            </span>
          </p>

          <List
            title="Missing Signals"
            items={r.experience.missing_points}
          />

          <List
            title="Improvement Suggestions"
            items={r.experience.suggestions}
          />
        </div>
      </Section>

      {/* ================= CHECKLIST ================= */}
      <Section title="Resume Editing Checklist">
        <div className="rounded-2xl border bg-background p-6">
          <ul className="space-y-4 text-base">
            {Array.isArray(r.resume_checklist) &&
              r.resume_checklist.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1 text-muted-foreground text-lg">
                    ☐
                  </span>
                  <span className="leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ------------------------- UI COMPONENTS --------------------------- */
/* ------------------------------------------------------------------ */

function Section({ title, children }) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SkillGroup({ title, data, variant }) {
  const color =
    variant === "good"
      ? "text-green-600"
      : variant === "warn"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="rounded-2xl border bg-background p-6 space-y-4">
      <h3 className={`text-lg font-semibold ${color}`}>
        {title} ({data.length})
      </h3>

      <div className="flex flex-wrap gap-3">
        {Array.isArray(data) &&
          data.map((s) => (
            <span
              key={s}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-muted"
            >
              {s}
            </span>
          ))}
      </div>
    </div>
  );
}

function List({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="text-base font-semibold">
        {title}
      </p>
      <ul className="list-disc ml-6 text-base text-muted-foreground space-y-2">
        {items.map((i, idx) => (
          <li key={idx} className="leading-relaxed">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
