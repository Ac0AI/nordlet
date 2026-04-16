import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Tack för din beställning | NordLet",
  robots: { index: false, follow: false },
};

export default function TackPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28 min-h-[70vh]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-light text-green mb-6">
              <CheckCircle2 size={32} />
            </div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Betalning bekräftad
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Tack för din beställning.
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Du får en orderbekräftelse via e-post inom några minuter. Vi hör av
              oss personligen inom 24 timmar med leveransinformation och
              förväntad leveranstid.
            </p>
            <p className="mt-4 text-base text-text-muted leading-relaxed">
              Har du frågor? Mejla oss på{" "}
              <a
                href="mailto:info@nordlet.se"
                className="text-accent hover:text-accent-light transition-colors underline"
              >
                info@nordlet.se
              </a>
              .
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:bg-accent/5"
              >
                Tillbaka till startsidan
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
