import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TopicAccordion({ phaseIndex, topics }) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {topics.map((topic, topicIndex) => (
        <AccordionItem
          key={topicIndex}
          value={`topic-${phaseIndex}-${topicIndex}`}
          className="rounded-xl border bg-muted/30 transition-all hover:shadow-md hover:-translate-y-[1px]"
        >
          <AccordionTrigger className="px-5 py-3 text-left text-lg font-semibold hover:no-underline">
            {topic.name}
          </AccordionTrigger>

          <AccordionContent className="px-5 pb-5 space-y-5">
            {/* Explanation */}
            <p className="text-base leading-relaxed">
              <span className="font-semibold text-primary">
                Explanation:
              </span>{" "}
              {topic.explanation}
            </p>

            {/* Interview Testing */}
            <div className="rounded-lg border bg-background/70 p-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Interview Testing:
                </span>{" "}
                {topic.interview}
              </p>
            </div>

            {/* Difficulty */}
            <p className="text-sm">
              <span className="font-semibold">Difficulty:</span>{" "}
              <span className="text-muted-foreground">
                {topic.difficulty}
              </span>
            </p>

            {/* References */}
            {topic.references?.length > 0 && (
              <div>
                <p className="font-semibold mb-2">References:</p>
                <ul className="list-disc ml-5 space-y-1">
                  {topic.references.map((ref, i) => (
                    <li key={i}>
                      <a
                        href={ref}
                        target="_blank"
                        className="text-sm text-primary hover:underline underline-offset-4"
                      >
                        {ref}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
