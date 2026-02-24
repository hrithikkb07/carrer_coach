import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import Link from "next/link";
import DeleteAtsButton from "./_components/DeleteAtsButton";

export default async function ATSHistoryPage() {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) return null;

  const user = await db.user.findUnique({
    where: { clerkUserId },
  });

  const reports = await db.atsReport.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="container mx-auto p-6">
      {/* Back */}
      <Link
        href="/"
        className="text-lg text-muted-foreground hover:underline"
      >
        ← Home
      </Link>

      {/* Header */}
      <div className="flex items-center justify-between mb-8 mt-4">
        <div>
          <h1 className="font-bold gradient-title text-4xl md:text-6xl">
            ATS Reports
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Your AI-evaluated resume reports
          </p>
        </div>

        <Link
          href="/ats/new"
          className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-md
            bg-primary text-primary-foreground
            hover:opacity-90 transition
          "
        >
          <span className="text-lg font-bold">+</span>
          <span>New ATS</span>
        </Link>
      </div>

      {/* Grid */}
      {reports.length === 0 ? (
        <p className="text-muted-foreground">No ATS reports yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((r) => (
            <div
              key={r.id}
              className="
                p-5 border rounded-xl
                flex flex-col
                transition-all duration-200
                hover:border-primary
                hover:bg-primary/5
                hover:shadow-xl
                hover:-translate-y-0.5
              "
            >
              {/* Score */}
              <p className="text-sm text-muted-foreground">ATS Score</p>
              <p className="text-2xl font-bold">
                {r.score}
                <span className="text-sm font-medium text-muted-foreground">
                  /100
                </span>
              </p>

              {/* Date */}
              <p className="mt-1 text-xs text-muted-foreground">
                {new Date(r.createdAt).toLocaleString()}
              </p>

              {/* Actions */}
              <div className="mt-auto pt-6 flex justify-between items-center">
                <Link
                  href={`/ats/${r.id}`}
                  className="text-lg text-primary hover:underline"
                >
                  View Full Report →
                </Link>

                <DeleteAtsButton reportId={r.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
