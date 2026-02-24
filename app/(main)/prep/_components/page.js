"use client";
import { toast } from "sonner";

export default function CopyButton({ link }) {
  const copy = () => {
    navigator.clipboard.writeText(link);
    toast.success("Link copied to clipboard!");
  };

  return (
    <button
      onClick={copy}
      className="text-sm px-3 py-1 border rounded hover:bg-red-100 transition"
    >
      Copy Link
    </button>
  );
}
