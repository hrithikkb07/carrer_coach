"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { analyzeATS } from "@/actions/ats";
import { Button } from "@/components/ui/button";

export default function NewATSPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setStatus("Extracting resume content...");

    try {
      const formData = new FormData(e.target);
      setStatus("Running AI-powered ATS analysis...");

      const res = await analyzeATS(formData);

      // ⛔ RATE LIMIT HANDLING (NEW)
      if (res?.error === "RATE_LIMIT") {
        setError("You can only run 3 ATS checks per hour ⏳");
        return;
      }

      // ⛔ GENERIC FAILURE
      if (!res?.reportId) {
        setError("Failed to analyze resume. Please try again.");
        return;
      }

      // ✅ SUCCESS
      router.push(`/ats/${res.reportId}`);
    } catch (err) {
      // ⛔ RATE LIMIT (if thrown instead of returned)
      if (err.message === "RATE_LIMIT") {
        setError("You can only run 3 ATS checks per hour ⏳");
      } else {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
      setStatus("");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="text-lg text-muted-foreground hover:underline mb-6"
      >
        ← Back to ATS
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-bold gradient-title text-4xl md:text-6xl">
          ATS Resume Checker
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Analyze how well your resume matches a job description using an
          AI-powered ATS engine.
        </p>
      </div>

      {/* Main Card */}
      <div
        className="
          relative rounded-2xl p-8 space-y-8
          border bg-background/60 backdrop-blur
          shadow-xl transition-all
        "
      >
        {/* Gradient Accent */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Resume Upload */}
          <div>
            <label className="text-sm font-semibold tracking-wide">
              Resume (PDF)
            </label>
            <input
              type="file"
              name="resume"
              accept="application/pdf"
              required
              className="
                mt-2 w-full rounded-lg border bg-background px-4 py-3
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:bg-primary file:text-primary-foreground
                hover:file:opacity-90 transition
              "
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="text-sm font-semibold tracking-wide">
              Job Description
            </label>
            <textarea
              name="jdText"
              rows={6}
              required
              placeholder="Paste the job description here..."
              className="
                mt-2 w-full rounded-lg border bg-background px-4 py-3
                focus:outline-none focus:ring-2 focus:ring-indigo-500/40
              "
            />
          </div>

          {/* Action */}
          <div className="flex items-center gap-4">
            <Button type="submit" disabled={loading}>
              {loading ? "Analyzing…" : "Analyze Resume"}
            </Button>

            {loading && (
              <span className="text-sm text-muted-foreground">
                ⏳ {status}
              </span>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="text-sm text-red-500 bg-red-50 border border-red-200 p-3 rounded-md">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
