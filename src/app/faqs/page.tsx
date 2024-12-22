import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen " >
        <div className="w-[70%] h-[70%]  ">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the gym?</AccordionTrigger>
              <AccordionContent>
                The gym is a place designed for physical exercise, fitness, and
                strength training.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do I join the gym?</AccordionTrigger>
              <AccordionContent>
                You can join the gym by signing up at our front desk or through
                our website.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                What are the gym working hours?
              </AccordionTrigger>
              <AccordionContent>
                Our gym is open from 6 AM to 10 PM, Monday through Saturday.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-4'>
              <AccordionTrigger>
                How can I contact you?
              </AccordionTrigger>
              <AccordionContent>
                You can Contact Us through Mail and Our contact Number.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
    </div>
  );
};

export default Page;
