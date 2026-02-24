import Link from "next/link";
import { companies } from "@/data/companies";
import CopyButton from "../../_components/page";
import { notFound } from "next/navigation";

const TOPIC_KEY_MAP = {
  arrays: "Arrays",
  "dynamic-programming": "DynamicProgramming",
  stacks: "Stacks",
  recursion: "Recursion",
  strings: "Strings",
  graphs: "Graphs",
  "hash-map": "HashMap",
    trees: "Trees",
    queue: "Queue",
    "slidingwindow": "SlidingWindow",
    matrix: "Matrix",
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

export default async function TopicPage({ params }) {

    const param=await params;
    console.log(param);

  const { company: companySlug, topic: topicSlug } = param;

  // 1️⃣ Find company
  const company = companies.find(c => c.slug === companySlug);
  if (!company) {
     notFound();
  }

  const difficultyColor = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "text-green-600";
    case "Medium":
      return "text-orange-500";
    case "Hard":
      return "text-red-600";
    default:
      return "text-muted-foreground";
  }
};


  // 2️⃣ Resolve topic key safely
  const topicKey = TOPIC_KEY_MAP[topicSlug];
  if (!topicKey) {
  notFound();
}

  // 3️⃣ Get questions
  const questions = company.topics?.[topicKey];
  if (!questions || !Array.isArray(questions)) {
    return <div className="p-4 text-xl">Topic not found</div>;
  }

  // 4️⃣ Pretty topic name for heading
  const displayTopic = topicKey.replace(/([A-Z])/g, " $1").trim();

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="space-x-3">
          <Link
            href={`/prep/${company.slug}`}
            className="text-lg text-muted-foreground hover:underline"
          >
            ← Topics
          </Link>
          <Link href="/prep" className="text-lg text-muted-foreground hover:underline">
            ← back to companies
          </Link>
        </div>
      </div>

      <div>
        <h1 className="font-bold gradient-title text-3xl md:text-6xl mb-2">
          {company.name} • {displayTopic}
        </h1>
        <p className="text-lg text-muted-foreground">
          {questions.length} questions
        </p>
      </div>

      <ul className="space-y-4 mt-6 ">
        {questions.map((q, idx) => (
          <li
            key={idx}
             className="
    p-4 border rounded-lg flex items-start justify-between
    transition-all duration-200
    hover:border-primary
    hover:bg-primary/5
    hover:shadow-lg
    hover:-translate-y-0.5
  "
          >
            <div>
              <div className="font-medium text-lg">{q.title}</div>
           <div className="text-sm text-muted-foreground">
  {q.difficulty && (
    <span className={`font-medium ${difficultyColor(q.difficulty)}`}>
      {q.difficulty}
    </span>
  )}
  {q.difficulty && " • "}
  {q.notes}
</div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={q.link}
                target="_blank"
                className="text-sm px-3 py-1 border rounded"
              >
                Open on LeetCode
              </a>

              <CopyButton link={q.link} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
