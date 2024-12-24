import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  const questions = [
    "What is the gym?",
    "How do I join the gym?",
    "What are the gym working hours?",
    "How can I contact you?",
    "What equipment does the gym have?",
    "Is there a membership fee?",
    "Are there personal trainers available?",
    "Do you offer group classes?",
  ];

  const answers = [
    "The gym is a place designed for physical exercise, fitness, and strength training.",
    "You can join the gym by signing up at our front desk or through our website.",
    "Our gym is open from 6 AM to 10 PM, Monday through Saturday.",
    "You can contact us through Mail and our contact number.",
    "We have a wide range of equipment including weights, cardio machines, and strength training gear.",
    "Yes, there is a membership fee. Please check our pricing page for details.",
    "Yes, we have certified personal trainers available to assist you with your fitness goals.",
    "Yes, we offer various group classes such as yoga, HIIT, and strength training.",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 mt-0">
      <div className="w-full md:w-3/4 lg:w-1/2 px-4 py-4 sm:py-6">
        <Accordion type="single" collapsible>
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg sm:text-xl font-light text-gray-800">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base font-light text-gray-600">
                {answers[index]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Page;
