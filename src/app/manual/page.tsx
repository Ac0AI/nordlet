import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE, SPECS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Manual och skötsel | NordLet Pro",
  description:
    "Svensk snabbmanual för NordLet Pro: placering, laddning, påsrulle, användning, tömning, rengöring och support.",
  alternates: { canonical: "/manual" },
};

const startSteps = [
  "Placera toaletten stabilt på ett plant och torrt underlag.",
  "Kontrollera att påsrullen sitter korrekt och att påsen löper fritt ned i skålen.",
  "Ladda batteriet via USB eller 12V innan första längre turen.",
  "Gör en första försegling innan toaletten används, så att botten är stängd.",
];

const useSteps = [
  "Använd toaletten som vanligt. Vanligt toalettpapper kan läggas i påsen.",
  "Stäng locket och starta förseglingen enligt knappen på panelen.",
  "Vänta tills förseglingen är klar innan nästa användning.",
  "Dra ut uppsamlingslådan när indikatorn visar att det är dags att tömma.",
  "Lägg förseglade påsar i restavfall enligt lokala avfallsregler.",
];

const careItems = [
  "Använd originalpåsar. Icke passande påsar kan fastna eller ge sämre tätning.",
  "Lägg inte vassa föremål, glas, metall eller frätande vätskor i toaletten.",
  "Spola inte huvudenheten med vatten. Torka ytor med torr eller lätt fuktad trasa.",
  "Förvara extra påsrullar torrt och skyddat från stark värme.",
  "Kontakta support om försegling, matning eller laddning beter sig onormalt.",
];

export default function ManualPage() {
  return (
    <>
      <Header solid />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                Manual
              </p>
              <h1 className="font-display text-4xl leading-tight tracking-tight text-text sm:text-5xl">
                Manual och skötsel för NordLet Pro
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
                En kort svensk webbmanual för första användning, påsrulle,
                försegling, tömning och säker skötsel. Vid osäkerhet: kontakta
                oss innan du använder produkten.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={`mailto:${SITE.email}`}>Kontakta support</Button>
                <Button href="/#specifikationer" variant="outline">
                  Se teknisk data
                </Button>
              </div>
            </div>

            <figure className="overflow-hidden rounded-3xl border border-border bg-bg-alt lg:col-span-5">
              <div className="relative aspect-[4/3]">
                <Image
                  src={IMAGES.productDetail}
                  alt="NordLet Pro med öppet lock och påsrulle"
                  fill
                  className="object-contain p-5"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <figcaption className="border-t border-border px-5 py-3 text-sm text-text-muted">
                Påsrullen monteras i öppningen under sitsen.
              </figcaption>
            </figure>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            <ManualSection title="Före första användning" items={startSteps} />
            <ManualSection title="Användning och tömning" items={useSteps} />
            <ManualSection title="Skötsel och säkerhet" items={careItems} />
          </div>

          <section className="mt-16 grid gap-10 rounded-3xl border border-border bg-surface p-7 sm:p-9 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl tracking-tight text-text sm:text-3xl">
                Byte av påsrulle
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-text-muted">
                <p>
                  När indikatorn visar att rullen är slut öppnar du ramen, tar
                  ut den tomma rullen och sätter i en ny originalrulle.
                </p>
                <p>
                  Dra ned tillräckligt med påse så att insidan täcks jämnt.
                  Kontrollera att påsen inte sitter snett, vikt eller fast i
                  matningen innan du gör nästa försegling.
                </p>
                <p>
                  Om påsen inte matas som den ska: avbryt, öppna och kontrollera
                  monteringen. Tvinga inte mekaniken.
                </p>
              </div>
            </div>
            <figure className="overflow-hidden rounded-2xl border border-border bg-bg-alt">
              <div className="relative aspect-[4/3]">
                <Image
                  src={IMAGES.productDimensions}
                  alt="NordLet Pro med utdragen uppsamlingslåda"
                  fill
                  className="object-contain p-5"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <figcaption className="border-t border-border px-5 py-3 text-sm text-text-muted">
                Uppsamlingslådan dras ut när förseglade påsar ska tas bort.
              </figcaption>
            </figure>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-2xl tracking-tight text-text sm:text-3xl">
              Teknisk översikt
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full">
                <tbody>
                  {SPECS.map((spec, index) => (
                    <tr
                      key={spec.label}
                      className={index % 2 === 0 ? "bg-surface" : "bg-bg-alt/50"}
                    >
                      <td className="px-5 py-4 font-medium text-text sm:px-7">
                        {spec.label}
                      </td>
                      <td className="px-5 py-4 text-right text-text-muted sm:px-7">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-16 rounded-3xl bg-bg-warm p-7 text-center sm:p-9">
            <h2 className="font-display text-2xl tracking-tight text-text sm:text-3xl">
              Behöver du hjälp?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-text-muted">
              Skicka ett mejl till{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-semibold text-accent underline underline-offset-2"
              >
                {SITE.email}
              </a>
              . Bifoga gärna bild på utrymmet, produktens panel eller påsrullen
              om frågan gäller montering eller passform.
            </p>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function ManualSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="border-t border-border pt-6">
      <h2 className="font-display text-2xl tracking-tight text-text">
        {title}
      </h2>
      <ol className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-text-muted">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-bg-warm text-sm font-semibold text-primary">
              {index + 1}
            </span>
            <span className="pt-0.5 leading-relaxed">{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
