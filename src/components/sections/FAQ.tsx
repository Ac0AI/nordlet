"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FAQS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function AccordionItem({
  question,
  answer,
  open,
  onClick,
}: {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 sm:py-6 text-left cursor-pointer"
      >
        <span className="text-base sm:text-lg font-medium text-text pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "flex-shrink-0 text-text-light transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-text-muted leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-bg-alt">
      <Container>
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Frågor & Svar
              </p>
              <h2
                className="text-3xl sm:text-4xl tracking-tight text-text"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Vanliga frågor
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="rounded-2xl bg-surface border border-border p-6 sm:p-10">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  open={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
