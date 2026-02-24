"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import FancyLoader from "./FancyLoader";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  FileText,
  PenBox,
  GraduationCap,
  StarsIcon,
  ChevronDown,
  StickyNote,
  ListChecks,
  Book,
  BookAudio
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function NavActions() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigate = (url) => {
    startTransition(() => {
      router.push(url);
      router.refresh();
    });
  };

  const iconOrLoader = (icon) => (isPending ? <FancyLoader /> : icon);

  return (
    <div className="flex items-center space-x-2 md:space-x-4">

      {/* Growth Tools */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center gap-2">
            {iconOrLoader(<StarsIcon className="h-4 w-4" />)}
            <span className="hidden md:block">Growth Tools</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">

           <DropdownMenuItem onClick={() => navigate("/roadmap")}>
            {iconOrLoader(<Book className="h-4 w-4" />)}
              Roadmaps
          </DropdownMenuItem>

           <DropdownMenuItem onClick={() => navigate("/coresubjects")}>
            {iconOrLoader(<FileText className="h-4 w-4" />)}
              core CS Subjects
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => navigate("/ats")}>
            {iconOrLoader(<BookAudio className="h-4 w-4" />)}
              Resume ATS Checker
            </DropdownMenuItem>

          <DropdownMenuItem onClick={() => navigate("/interview")}>
            {iconOrLoader(<GraduationCap className="h-4 w-4" />)}
            Interview Prep
          </DropdownMenuItem>

         <DropdownMenuItem onClick={() => navigate("/sheetprep/company")}>
  {iconOrLoader(<ListChecks className="h-4 w-4" />)}
  Company wise sheet
</DropdownMenuItem>

          <DropdownMenuItem onClick={() => navigate("/notes")}>
  {iconOrLoader(<StickyNote className="h-4 w-4" />)}
  Smart Notes AI
</DropdownMenuItem>

<DropdownMenuItem onClick={() => navigate("/ai-cover-letter")}>
            {iconOrLoader(<PenBox className="h-4 w-4" />)}
            Cover Letter generator
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
