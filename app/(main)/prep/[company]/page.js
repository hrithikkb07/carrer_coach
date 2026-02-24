import Link from "next/link";
import { companies } from "@/data/companies";
import { notFound } from "next/navigation";

const TOPIC_SLUG_MAP = {
  Arrays: "arrays",
  DynamicProgramming: "dynamic-programming",
  Stacks: "stacks",
  Recursion: "recursion",
  Strings: "strings",
  Graphs: "graphs",
  HashMap: "hash-map",
  Trees: "trees",
  Queue: "queue",
  SlidingWindow: "slidingwindow",
  Matrix: "matrix",
  LinkedList: "LinkedList",
  Greedy: "Greedy",
  Design: "Design",
  BinarySearch: "BinarySearch",
  Trie: "Trie",
  Backtracking: "Backtracking",
   Heap: "Heap",
   Interval: "Interval",
   Math: "Math",



};

export default async function CompanyPage({ params }) {
  const param=await params;
  const company = companies.find(c => c.slug === param.company);

  if (!company) {
     notFound();
}

  const topics = Object.keys(company.topics);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Link href="/prep" className="text-lg text-muted-foreground hover:underline">
          ← All Companies
        </Link>
      </div>

      <h1 className="font-bold gradient-title text-4xl md:text-6xl mb-6">
        {company.name} • Topics
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map(topicKey => (
          <Link
            key={topicKey}
            href={`/prep/${company.slug}/${TOPIC_SLUG_MAP[topicKey]}`}
            className="
  block p-4 border rounded-lg
  transition-all duration-200
  hover:border-primary
  hover:bg-primary/5
  hover:shadow-lg
  hover:-translate-y-1
"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {topicKey.replace(/([A-Z])/g, " $1").trim()}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {company.topics[topicKey].length} questions
                </p>
              </div>
              <div className="text-sm text-primary font-medium">
                View →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
