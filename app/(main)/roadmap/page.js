import Link from "next/link";
import { roadmaps } from "@/data/roadmaps";

export default function RoadmapPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 mb-10 text-lg font-medium text-muted-foreground hover:text-primary transition"
      >
        ← Back to Home
      </Link>

      {/* Header */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight">
          Interview Roadmaps
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Structured, interview-first learning paths crafted from real
          product-based company expectations.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {roadmaps.map((roadmap) => (
          <Link
            key={roadmap.slug}
            href={`/roadmap/${roadmap.slug}`}
            className="group relative overflow-hidden rounded-2xl border bg-background p-6
                       transition-all duration-300
                       hover:-translate-y-1 hover:shadow-xl"
          >
            {/* subtle gradient glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-xl" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col h-full">
              {/* badge */}
              <span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Interview Ready
              </span>

              <h2 className="text-2xl font-semibold tracking-tight transition group-hover:text-primary">
                {roadmap.title}
              </h2>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {roadmap.description}
              </p>

              {/* Footer */}
              <div className="mt-auto pt-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">
                  View Roadmap
                </span>
                <span className="text-primary text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
