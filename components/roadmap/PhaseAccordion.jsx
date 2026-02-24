import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TopicAccordion from "./TopicAccordion";

export default function PhaseAccordion({ phases }) {
  return (
    <Accordion type="single" collapsible className="space-y-6">
      {phases.map((phase, index) => (
        <AccordionItem
          key={index}
          value={`phase-${index}`}
          className="rounded-xl border bg-background shadow-sm transition-all hover:shadow-lg"
        >
          <AccordionTrigger className="px-6 py-4 text-left text-2xl font-semibold hover:no-underline">
            {phase.phase}
          </AccordionTrigger>

          <AccordionContent className="px-6 pb-6 space-y-6">
            {/* Goal */}
            <div className="rounded-lg border bg-muted/40 p-4">
              <p className="text-base leading-relaxed">
                <span className="font-semibold text-primary">Goal:</span>{" "}
                {phase.goal}
              </p>
            </div>

            {/* Topics */}
            <TopicAccordion
              phaseIndex={index}
              topics={phase.topics}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
