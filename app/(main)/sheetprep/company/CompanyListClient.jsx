"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function CompanyListClient({
  companies,
  companiesMap,
  progressMap,
}) {
  const [query, setQuery] = useState("");

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) =>
      company.toLowerCase().includes(query.toLowerCase())
    );
  }, [companies, query]);

  return (
    <div className="container mx-auto p-4">
      {/* HEADER */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-lg text-muted-foreground hover:underline"
        >
          ← Home
        </Link>

        <div className="mt-4 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            Company-wise DSA Sheets
          </h1>

          {/* SEARCH */}
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search company…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
                w-full rounded-xl border border-muted
                bg-background py-2.5 pl-10 pr-4 text-sm
                shadow-sm transition-all duration-200
                placeholder:text-muted-foreground
                focus:border-primary focus:ring-2 focus:ring-primary/20
                focus:shadow-md
              "
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              🔍
            </span>
          </div>
        </div>
      </div>

      {/* COMPANY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => {
          const total = companiesMap[company].length;
          const done = progressMap[company] ?? 0;
          const percent = Math.round((done / total) * 100);

          return (
            <Link
              key={company}
              href={`/sheetprep/company/${company}`}
              className="
                group rounded-2xl border border-muted
                bg-background p-5
                transition-all duration-200
                hover:-translate-y-[2px]
                hover:shadow-lg hover:shadow-primary/5
                hover:border-primary/40
              "
            >
              {/* TOP */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold capitalize transition-colors group-hover:text-primary">
                  {company}
                </h2>

                <span className="text-sm text-muted-foreground">
                  {done}/{total}
                </span>
              </div>

              {/* PROGRESS */}
              <div className="mt-4 h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-2 rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <p className="mt-2 text-xs text-muted-foreground">
                {percent}% completed
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
