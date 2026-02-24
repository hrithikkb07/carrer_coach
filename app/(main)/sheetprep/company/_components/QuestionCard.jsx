"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toggleQuestionDone } from "@/actions/questionProgress";

function getFrequencyMeta(count) {
  if (count >= 10) return { label: "High", className: "bg-red-100 text-red-700" };
  if (count >= 5) return { label: "Medium", className: "bg-yellow-100 text-yellow-700" };
  return { label: "Low", className: "bg-green-100 text-green-700" };
}

export default function QuestionCard({ question, companySlug, isDone }) {
  const [pending, startTransition] = useTransition();
  const [done, setDone] = useState(isDone);

  const freq = getFrequencyMeta(question.occurrences);

  return (
    <div
      className="
        group relative rounded-2xl border border-muted
        bg-background p-5
        transition-all duration-200
        hover:-translate-y-[2px]
        hover:shadow-lg hover:shadow-primary/5
        hover:border-primary/40
      "
    >
      {/* TOP */}
      <div className="flex items-start justify-between gap-4">
        <h3
          className={`
            text-base font-semibold leading-snug
            transition-colors
            ${done ? "line-through text-muted-foreground" : "group-hover:text-primary"}
          `}
        >
          {question.title}
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${freq.className}`}
        >
          {freq.label}
        </span>
      </div>

      {/* BOTTOM */}
      <div className="mt-5 flex items-center justify-between">
        {/* LEETCODE */}
        <Button
          size="sm"
          variant="ghost"
          asChild
          className="
            text-primary
            opacity-80
            transition
            hover:opacity-100
            hover:bg-primary/10
          "
        >
          <Link href={question.link} target="_blank">
            LeetCode →
          </Link>
        </Button>

        {/* DONE / UNDO */}
        <Button
          size="sm"
          disabled={pending}
          variant={done ? "default" : "outline"}
          className={
            done
              ? "bg-green-600 hover:bg-green-700 text-white shadow-sm"
              : "border-red-500 text-red-600 hover:bg-red-50 hover:border-red-600"
          }
          onClick={() =>
            startTransition(() => {
              const next = !done;
              setDone(next);

              toggleQuestionDone({
                companySlug,
                questionKey: question.key,
                isDone: next,
              });
            })
          }
        >
          {done ? "✓ Done" : "Mark as Done"}
        </Button>
      </div>
    </div>
  );
}
