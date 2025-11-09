import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Question {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: Question[];
  categoryIndex: number;
}

export function FAQAccordion({ questions, categoryIndex }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map((faq, faqIndex) => (
        <AccordionItem
          key={faqIndex}
          value={`item-${categoryIndex}-${faqIndex}`}
        >
          <AccordionTrigger className="text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
