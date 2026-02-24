"use client";

import { useState, useEffect } from "react";
import { addNote, getAITips } from "@/actions/notes";
import { Button } from "@/components/ui/button";
import { BarLoader } from "react-spinners";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddNotePage() {
  const router = useRouter();

  const [problemLink, setProblemLink] = useState("");
  const [intuition, setIntuition] = useState("");

  const [time, setTime] = useState("");
  const [space, setSpace] = useState("");
  const [tips, setTips] = useState("");

  const [loadingAI, setLoadingAI] = useState(false);
  const [saving, setSaving] = useState(false);

  /* ---------------------------
     RESET AI OUTPUT ON CHANGE
  ---------------------------- */
  useEffect(() => {
    setTime("");
    setSpace("");
    setTips("");
  }, [intuition]);

  /* ---------------------------
     ASK AI (NO DB WRITE)
  ---------------------------- */
  const askAI = async () => {
    if (!problemLink || !intuition) {
      toast.error("Add problem link and intuition first");
      return;
    }

    setLoadingAI(true);
    try {
      const res = await getAITips({ link: problemLink, intuition });
      setTime(res.time);
      setSpace(res.space);
      setTips(res.tips);
    } catch {
      toast.error("AI failed to generate tips");
    } finally {
      setLoadingAI(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await addNote({ link: problemLink, intuition, tips, time, space });
      toast.success("Note saved successfully");
      router.push("/notes");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      {/* Back */}
      <button
        onClick={() => router.back()}
        className="text-lg text-muted-foreground hover:underline mb-6"
      >
        ← Back to Notes
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-bold gradient-title text-4xl md:text-6xl">
          Create Smart Note
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Capture your doubt, intuition, and let AI compress the best insights
          for quick revision.
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

        {/* Problem Link */}
        <div>
          <label className="text-sm font-semibold tracking-wide">
            Problem Link
          </label>
          <input
            type="text"
            placeholder="https://leetcode.com/problems/..."
            value={problemLink}
            onChange={(e) => setProblemLink(e.target.value)}
            className="
              mt-2 w-full rounded-lg border bg-background px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-indigo-500/40
            "
          />
        </div>

        {/* Intuition */}
        <div>
          <label className="text-sm font-semibold tracking-wide">
            Your Intuition
          </label>
          <textarea
            rows={4}
            placeholder="What confused you? What idea clicked?"
            value={intuition}
            onChange={(e) => setIntuition(e.target.value)}
            className="
              mt-2 w-full rounded-lg border bg-background px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-indigo-500/40
            "
          />
        </div>
        
        {/* AI Section */}
        <div className="rounded-xl border bg-muted/40 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">AI Assistance</h3>
              <p className="text-sm text-muted-foreground">
                3 tips + time & space complexity
              </p>
            </div>

            <Button
              onClick={askAI}
              disabled={loadingAI || !problemLink || !intuition}
            >
              {loadingAI ? "Thinking…" : "Ask AI"}
            </Button>
          </div>

          {loadingAI && <BarLoader width="100%" color="#6366f1" />}

          {(time || space || tips) && (
            <div
              className="
                mt-4 rounded-lg bg-background p-4 space-y-3
                animate-in fade-in slide-in-from-bottom-2 duration-300
              "
            >
              <div className="flex gap-6 text-sm">
                <span><strong>Time:</strong> {time}</span>
                <span><strong>Space:</strong> {space}</span>
              </div>

              <ul className="list-disc ml-5 text-sm text-muted-foreground">
                {tips
                  .split(/\d\)/)
                  .filter(Boolean)
                  .map((t, i) => (
                    <li key={i}>{t.trim()}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            disabled={saving || loadingAI}
            className="px-8"
          >
            {saving ? "Saving…" : "Save Note"}
          </Button>
        </div>
      </div>
    </div>
  );
}
