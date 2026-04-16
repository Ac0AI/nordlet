"use client";

import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white/60 py-12">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-4">
            <span
              className="text-lg text-white font-normal"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              {SITE.name}
            </span>
            <span className="text-white/30">|</span>
            <span>&copy; {new Date().getFullYear()} Alla rättigheter förbehållna</span>
          </div>
          <div className="flex gap-2 -my-3 flex-wrap">
            <a href="#" className="px-2 py-3 hover:text-white transition-colors">
              Integritetspolicy
            </a>
            <a href="#" className="px-2 py-3 hover:text-white transition-colors">
              Villkor
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="px-2 py-3 hover:text-white transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
