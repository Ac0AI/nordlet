import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Köpvillkor | NordLet",
  description:
    "Köpvillkor för NordLet Frihetstoa. Ångerrätt, leverans, betalning, reklamation och kontakt.",
};

export default function KopvillkorPage() {
  const updated = "2026-04-16";
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Container>
          <article className="max-w-3xl mx-auto prose-custom">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Juridiskt
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text leading-tight mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Köpvillkor
            </h1>
            <p className="text-sm text-text-light mb-12">
              Senast uppdaterad: {updated}
            </p>

            <Section title="1. Säljare">
              <p>
                {SITE.company.name}
                {SITE.company.orgNr && (
                  <>
                    <br />
                    Organisationsnummer: {SITE.company.orgNr}
                  </>
                )}
                {SITE.company.address && (
                  <>
                    <br />
                    {SITE.company.address}
                  </>
                )}
                <br />
                E-post: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                {SITE.phone && (
                  <>
                    <br />
                    Telefon: {SITE.phone}
                  </>
                )}
              </p>
            </Section>

            <Section title="2. Priser och betalning">
              <p>
                Priserna som anges på nordlet.se är i svenska kronor (SEK) och
                inkluderar moms (25%). Fraktkostnader inom Sverige är inkluderade
                om inget annat anges.
              </p>
              <p>
                Betalning sker via Stripe, som hanterar kortbetalning och andra
                betalningsmetoder säkert enligt PCI DSS-standard. NordLet
                lagrar inte kortuppgifter.
              </p>
            </Section>

            <Section title="3. Leverans">
              <p>
                Produkten skickas normalt inom 3 arbetsdagar från mottagen
                betalning. Leveranstiden är vanligtvis 1-5 arbetsdagar inom
                Sverige beroende på ort. Vid längre leveranstid meddelar vi dig
                per e-post.
              </p>
              <p>
                Om produkten skulle vara skadad vid leverans ska du kontakta oss
                inom 7 dagar från mottagandet för att vi ska kunna hjälpa dig
                med ersättning eller retur.
              </p>
            </Section>

            <Section title="4. Ångerrätt">
              <p>
                Som konsument har du enligt Distansavtalslagen (SFS 2005:59) 14
                dagars full ångerrätt från det att du mottagit varan. Utöver
                lagkravet erbjuder NordLet 30 dagars öppet köp.
              </p>
              <p>
                För att utnyttja ångerrätten meddelar du oss per e-post till{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> innan
                ångerfristen löpt ut. Du kan använda{" "}
                <a
                  href="https://publikationer.konsumentverket.se/kontrakt-och-mallar/angerblankett"
                  target="_blank"
                  rel="noreferrer"
                >
                  Konsumentverkets ångerblankett
                </a>{" "}
                men det är inget krav.
              </p>
              <p>
                Vid retur står du för returfrakten. Varan ska vara i väsentligen
                oförändrat skick. Eventuell värdeminskning på grund av
                hanterande utöver vad som krävs för att fastställa varans
                funktion kan dras av vid återbetalning, i enlighet med lagens
                regler.
              </p>
              <p>
                Återbetalning sker senast 14 dagar efter att vi mottagit den
                återsända varan, via samma betalmetod som användes vid köp.
              </p>
            </Section>

            <Section title="5. Garanti och reklamation">
              <p>
                Enligt Konsumentköplagen (SFS 2022:260) har du som konsument
                reklamationsrätt i tre år från köpet. Utöver det erbjuder
                NordLet två års produktgaranti som täcker fabrikationsfel.
              </p>
              <p>
                Om en vara är felaktig har du i första hand rätt till
                kostnadsfri reparation eller utbyte. Om det inte är möjligt kan
                du få prisavdrag eller häva köpet.
              </p>
              <p>
                Reklamationer görs per e-post till{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Beskriv felet
                och bifoga gärna bilder.
              </p>
            </Section>

            <Section title="6. Tvist">
              <p>
                Vid tvist som vi inte kan lösa tillsammans följer vi
                rekommendationer från Allmänna reklamationsnämnden (ARN).
              </p>
              <p>
                Du som konsument kan också använda EU-kommissionens
                onlineplattform för tvistlösning:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noreferrer"
                >
                  ec.europa.eu/consumers/odr
                </a>
                .
              </p>
            </Section>

            <Section title="7. Kontakt">
              <p>
                Frågor om dessa villkor eller om en beställning besvaras av{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            </Section>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl sm:text-2xl tracking-tight text-text mb-4"
        style={{ fontFamily: "var(--font-dm-serif)" }}
      >
        {title}
      </h2>
      <div className="text-text-muted leading-relaxed text-base space-y-3 [&_a]:text-accent [&_a]:underline hover:[&_a]:text-accent-light">
        {children}
      </div>
    </section>
  );
}
