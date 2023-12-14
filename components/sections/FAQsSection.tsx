"use client";

import { useRouter } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/constants";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function FAQsSection() {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {faqs.map((faq, _key) => (
          <Accordion type="single" collapsible key={_key}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <div className="border rounded-sm p-5 mt-14 flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-4">
          <div className="bg-secondary rounded border h-12 w-12 flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>

          <div>
            <h2 className="text-lg font-medium">Still Need Help?</h2>
            <p className="text-sm text-muted-foreground">
              Can&apos;t find the answer here?
            </p>
          </div>
        </div>

        <Button
          onClick={() => router.push("/contact")}
          variant="secondary"
          className="rounded border w-full sm:w-max"
        >
          Send a Message <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
