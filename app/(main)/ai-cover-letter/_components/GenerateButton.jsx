"use client";

import { useTransition } from "react";
import FancyLoader from "@/components/FancyLoader";
import { Button } from "@/components/ui/button";

export default function GenerateButton({ onGenerate }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      onGenerate(); // call your original function
    });
  };

  return (
    <Button onClick={handleClick} disabled={isPending} className="w-full">
      {isPending ? (
        <div className="flex items-center gap-2">
          <FancyLoader />
          Generating...
        </div>
      ) : (
        "Generate Cover Letter"
      )}
    </Button>
  );
}
