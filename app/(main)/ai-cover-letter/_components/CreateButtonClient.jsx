"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import FancyLoader from "@/components/FancyLoader";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CreateButtonClient() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      router.push("/ai-cover-letter/new");
    });
  };

  return (
    <Button onClick={handleClick} disabled={isPending}>
      {isPending ? (
        <div className="flex items-center gap-2">
          <FancyLoader />
          Creating...
        </div>
      ) : (
        <>
          <Plus className="h-4 w-4 mr-2" />
          Create New
        </>
      )}
    </Button>
  );
}
