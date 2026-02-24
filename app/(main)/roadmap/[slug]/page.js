import { getRoadmapBySlug } from "@/data/roadmaps";
import Link from "next/link";
import PhaseAccordion from "@/components/roadmap/PhaseAccordion";

export default async function RoadmapSlugPage({ params }) {
  const p = await params;
  const roadmap = getRoadmapBySlug(p.slug);

  if (!roadmap) {
    return (
      <div className="container mx-auto max-w-4xl p-6">
        <h1 className="text-2xl font-bold">Roadmap not found</h1>
        <Link href="/roadmap" className="text-primary mt-4 inline-block">
          ← Back to Roadmaps
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl p-6">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/roadmap"
          className="text-lg font-medium text-muted-foreground hover:text-primary transition"
        >
          ← All Roadmaps
        </Link>

        <h1 className="text-4xl font-bold tracking-tight mt-3">
          {roadmap.title}
        </h1>

        <p className="text-lg text-muted-foreground mt-3 max-w-4xl leading-relaxed">
          {roadmap.description}
        </p>
      </div>

      {/* Phases */}
      <PhaseAccordion phases={roadmap.phases} />
    </div>
  );
}
