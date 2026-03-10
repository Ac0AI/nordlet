"use client";

import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SPECS } from "@/lib/constants";

export function Specifications() {
  return (
    <section id="specifikationer" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Teknisk data
              </p>
              <h2
                className="text-3xl sm:text-4xl tracking-tight text-text"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Specifikationer
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full">
                <tbody>
                  {SPECS.map((spec, i) => (
                    <tr
                      key={spec.label}
                      className={i % 2 === 0 ? "bg-surface" : "bg-bg-alt/50"}
                    >
                      <td className="px-6 sm:px-8 py-4 text-base font-medium text-text">
                        {spec.label}
                      </td>
                      <td className="px-6 sm:px-8 py-4 text-base text-text-muted text-right">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
