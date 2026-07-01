import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { getAllGuides } from "@/lib/guider";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Guider | NordLet Pro – vattenlös toalett för husbil & husvagn",
  description:
    "Praktiska guider om vattenlösa toaletter, livet på vägen och hur du reser friare med husbil och husvagn. Skrivet av Erik Martling.",
  alternates: { canonical: "/guider" },
};

export default function GuiderPage() {
  const guides = getAllGuides();
  return (
    <>
      <Header solid />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Guider
            </p>
            <h1
              className="text-4xl sm:text-5xl tracking-tight text-text leading-tight font-display"
            >
              Livet på vägen, utan kassettank
            </h1>
            <p className="mt-5 text-lg text-text-muted leading-relaxed">
              Praktiska guider om vattenlösa toaletter och friare husbilsliv –
              skrivna av Erik Martling.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guider/${g.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-text-light">
                  {new Date(g.date).toLocaleDateString("sv-SE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {g.readingMinutes} min
                </p>
                <h2
                  className="mt-3 text-2xl text-text leading-snug font-display"
                >
                  {g.title}
                </h2>
                <p className="mt-3 flex-grow text-text-muted leading-relaxed">
                  {g.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Läs guiden
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
