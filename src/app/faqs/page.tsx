import Hero from "@/components/shared/Hero";
import MaxWidthContainer from "@/components/shared/MaxWidthContainer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import { faqs } from "@/constants";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function FAQSPage() {
  return (
    <div className="w-full">
      <Hero
        title="Frequently Asked Questions!"
        description="Find answers to common questions about the developer's work process and availability."
      />
      <MaxWidthContainer className="pt-10 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {faqs.map((faq, _key) => (
            <Accordion type="single" collapsible key={_key}>
              <AccordionItem value="item-1">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        <div className="border rounded-lg p-5 mt-14 flex items-center justify-between flex-wrap gap-5">
          <div className="flex items-center gap-4">
            <div className="bg-secondary rounded-lg h-12 w-12 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>

            <div>
              <h2 className="text-lg font-medium">Still Need Help?</h2>
              <p className="text-sm text-muted-foreground">
                Can&apos;t find the answer here? Message us for help!
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className={buttonVariants({
              className: "py-6 pointer w-full sm:w-max",
              variant: "secondary",
            })}
          >
            Send us a Message <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </MaxWidthContainer>
    </div>
  );
}
