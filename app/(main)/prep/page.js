
import Link from "next/link";
import { companies } from "@/data/companies";


export default function PrepIndex() {
  return (
    <div className="container mx-auto p-4">

      <div className="mb-4">
        <Link href="/" className="text-lg text-muted-foreground hover:underline color via-red-900">
          ← Home
        </Link>
      </div>

      <h1 className="font-bold gradient-title text-4xl md:text-6xl mb-4">Company Sheets</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {companies.map((c) => (
          <Link
            key={c.slug}
            href={`/prep/${c.slug}`}
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
                <h2 className="text-xl font-semibold">{c.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {Object.keys(c.topics).length} topics
                </p>
              </div>
              <div className="text-sm text-primary font-medium">View →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
