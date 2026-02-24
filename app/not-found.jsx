import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">
        Oops! Page not found
      </h2>

      <p className="text-muted-foreground max-w-md mb-6">
        The page you’re looking for doesn’t exist or the URL is incorrect.
        Let’s get you back on track.
      </p>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-4 py-2 border rounded-lg hover:bg-primary hover:text-primary-foreground transition"
        >
          Go Home
        </Link>

        <Link
          href="/prep"
          className="px-4 py-2 border rounded-lg hover:bg-primary hover:text-primary-foreground transition"
        >
          Prep Library
        </Link>
      </div>
    </div>
  );
}
