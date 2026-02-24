import Link from "next/link";
import { getNotes } from "@/actions/notes";
import DeleteNoteButton from "./_components/DeleteNoteButton";

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="container mx-auto p-4">
      {/* Top Nav */}
      <div className="mb-4">
        <Link
          href="/"
          className="text-lg text-muted-foreground hover:underline"
        >
          ← Home
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-bold gradient-title text-4xl md:text-6xl">My Notes</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Your saved doubts, ideas & AI tips
          </p>
        </div>
<Link
  href="/notes/new"
  className="
    inline-flex items-center gap-2
    px-4 py-2 rounded-md
    bg-red-600 text-white
  "
>
  <span className="text-lg font-bold">+</span>
  <span>Add Note</span>
</Link>


      </div>

      {/* Notes Grid */}
      {notes.length === 0 ? (
        <p className="text-muted-foreground">No notes saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((n) => (
            <div
  key={n.id}
  className="
    p-4 border rounded-lg
    flex flex-col
    transition-all duration-200
    hover:border-primary
    hover:bg-primary/5
    hover:shadow-lg
    hover:-translate-y-0.5
  "
>
              {/* Problem link */}
              <a
                href={n.link}
                target="_blank"
                className="text-sm text-primary underline break-all"
              >
                {n.link}
              </a>

              {/* Intuition */}
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Intuition:</strong> {n.intuition}
              </p>

              {/* Complexity */}
              <div className="mt-3 text-sm flex gap-4">
                {n.time && (
                  <p>
                    <strong>Time:</strong> {n.time}
                  </p>
                )}
                {n.space && (
                  <p>
                    <strong>Space:</strong> {n.space}
                  </p>
                )}
              </div>

              {/* Tips */}
              {n.tips && (
                <div className="mt-3 text-sm">
                  <strong>Tips & Tricks:</strong>
                  <ul className="list-disc ml-5 mt-1 text-muted-foreground">
                    {n.tips
                      .split(/\d\)/)
                      .filter(Boolean)
                      .map((tip, i) => (
                        <li key={i}>{tip.trim()}</li>
                      ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="mt-auto pt-4 flex justify-end">
  <DeleteNoteButton noteId={n.id} />
</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
