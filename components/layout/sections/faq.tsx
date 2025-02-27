import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What information do you need to get started?",
    answer:
      "Please provide your project requirements, any design inspirations or preferences, and details about the functionalities you want. This helps me tailor the solution to your exact needs.",
    value: "item-1",
  },
  {
    question: "Can you work with my existing design or brand guidelines?",
    answer:
      "Absolutely! I can integrate your branding into the development process or offer design suggestions if needed.",
    value: "item-2",
  },
  {
    question: "Do you provide post-launch support or maintenance?",
    answer:
      "Yes, I offer maintenance and support services after your project goes live. We can discuss the details once the initial project is completed.",
    value: "item-3",
  },
  {
    question: "What if I need revisions?",
    answer:
      "Each package includes a set number of revisions. If further adjustments are required beyond the package limit, we can discuss additional options.",
    value: "item-4",
  },
  // {
  //   question:
  //     "Enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
  //   answer: "consectetur adipisicing elit. Sint labore.",
  //   value: "item-5",
  // },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
