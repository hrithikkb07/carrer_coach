"use client";

import { useState } from "react";
import { deleteNote } from "@/actions/notes";
import { useRouter } from "next/navigation";

export default function DeleteNoteButton({ noteId }) {

    const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteNote(noteId);
      router.refresh();
    } 
    finally {
      setDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      className={`
        text-sm 
        ${deleting ? "text-muted-foreground cursor-not-allowed" : "text-red-500 hover:underline"}
      `}
    >
      {deleting ? "Deleting…" : "Delete"}
    </button>
  );
}
