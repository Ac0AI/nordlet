import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { trackingConfigured } from "@/lib/consent";

export const metadata: Metadata = {
  title: "Integritetspolicy | NordLet",
  description:
    "Hur NordLet hanterar personuppgifter enligt GDPR. Vilka uppgifter som samlas in, varför, och dina rättigheter.",
};

export default function IntegritetspolicyPage() {
  const updated = "2026-06-12";
  return (
    <>
      <Header solid />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Container>
          <article className="max-w-3xl mx-auto">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Juridiskt
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text leading-tight mb-6 font-display"
            >
              Integritetspolicy
            </h1>
            <p className="text-sm text-text-light mb-12">
              Senast uppdaterad: {updated}
            </p>

            <Section title="1. Personuppgiftsansvarig">
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
              </p>
              <p>
                Vi är ansvariga för behandlingen av dina personuppgifter enligt
                EU:s dataskyddsförordning (GDPR) samt svensk
                dataskyddslagstiftning.
              </p>
            </Section>

            <Section title="2. Vilka uppgifter vi samlar in">
              <p>När du beställer en produkt behandlar vi:</p>
              <ul>
                <li>Namn</li>
                <li>Leveransadress och faktureringsadress</li>
                <li>E-postadress</li>
                <li>Telefonnummer (om du uppger det)</li>
                <li>Orderhistorik och betalningsreferens</li>
              </ul>
              <p>
                Kortuppgifter och detaljer om betalningen hanteras direkt av
                Kustom och den betalmetod du väljer i kassan (t.ex. Klarna
                eller Swish). De lagras aldrig hos NordLet.
              </p>
            </Section>

            <Section title="3. Varför vi behandlar uppgifterna">
              <p>
                <strong>Fullgörande av avtal.</strong> För att behandla din
                beställning, skicka varan, hantera returer och
                reklamationer. Rättslig grund: fullgörande av avtal.
              </p>
              <p>
                <strong>Rättsliga förpliktelser.</strong> Bokföring och skatt
                kräver att vi sparar orderuppgifter i enlighet med
                Bokföringslagen (7 år). Rättslig grund: rättslig förpliktelse.
              </p>
              <p>
                <strong>Kundservice och support.</strong> Besvara frågor och
                hantera kontakt. Rättslig grund: berättigat intresse.
              </p>
            </Section>

            <Section title="4. Hur länge vi sparar uppgifterna">
              <p>
                Orderuppgifter sparas i 7 år enligt Bokföringslagen. Uppgifter
                som används för kundservice sparas så länge det är nödvändigt
                för att ge dig support, därefter raderas de eller anonymiseras.
              </p>
            </Section>

            <Section title="5. Vilka vi delar uppgifter med">
              <p>Vi delar uppgifter med följande betrodda parter:</p>
              <ul>
                <li>
                  <strong>Kustom</strong> — betalningshantering via Kustom
                  Checkout (Kustom AB, Stockholm). Kustom är PCI
                  DSS-certifierat. Väljer du Klarna eller Swish i kassan
                  behandlar även de dina uppgifter enligt sina respektive
                  villkor.{" "}
                  <a
                    href="https://www.kustom.co/legal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kustoms villkor och integritetspolicy
                  </a>
                  .
                </li>
                <li>
                  <strong>Fraktpartners</strong> — för leverans (t.ex. PostNord,
                  DHL, Budbee eller liknande). Bara namn, adress och
                  telefonnummer delas, och endast för aktuell försändelse.
                </li>
                <li>
                  <strong>Vercel</strong> — webbhotell. Hostar den här
                  webbplatsen och kan temporärt behandla tekniska loggar
                  (IP-adresser).{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vercels integritetspolicy
                  </a>
                  .
                </li>
              </ul>
              <p>
                Vi säljer aldrig dina uppgifter till tredje part och använder
                dem inte för riktad reklam.
              </p>
            </Section>

            <Section title="6. Överföring utanför EU/EES">
              <p>
                Kustom är ett svenskt bolag och behandlar betalningar inom
                EU/EES. Vercel är ett amerikanskt företag - överföring dit sker
                enligt EU-kommissionens standardavtalsklausuler (SCC) för att
                säkerställa tillräcklig skyddsnivå.
              </p>
            </Section>

            <Section title="7. Cookies">
              <p>
                Webbplatsen använder tekniskt nödvändiga cookies för att
                funktionen ska fungera. De kräver inte samtycke.
              </p>
              {trackingConfigured ? (
                <>
                  <p>
                    Med ditt samtycke använder vi även marknadsföringscookies
                    från Meta (Meta-pixeln) för att mäta och förbättra våra
                    annonser på Facebook och Instagram. Pixeln laddas först när
                    du valt &quot;Acceptera alla&quot; i cookierutan. Väljer du
                    &quot;Endast nödvändiga&quot; sätts inga sådana cookies.
                  </p>
                  <p>
                    Meta Platforms behandlar uppgifterna även i USA. Överföringen
                    sker enligt EU-kommissionens standardavtalsklausuler (SCC).
                    Du kan när som helst ändra eller återkalla ditt samtycke
                    genom att rensa cookies för den här webbplatsen i din
                    webbläsare.
                  </p>
                </>
              ) : (
                <p>
                  Vi använder för närvarande inga analyscookies,
                  marknadsföringscookies eller cookies från tredje part. Om detta
                  ändras uppdaterar vi denna policy och ber om ditt samtycke.
                </p>
              )}
            </Section>

            <Section title="8. Dina rättigheter">
              <p>Enligt GDPR har du följande rättigheter:</p>
              <ul>
                <li>
                  <strong>Tillgång</strong> — begära ett utdrag av vilka
                  uppgifter vi har om dig.
                </li>
                <li>
                  <strong>Rättelse</strong> — få felaktiga uppgifter rättade.
                </li>
                <li>
                  <strong>Radering</strong> — få dina uppgifter raderade (med
                  undantag för uppgifter vi måste spara enligt lag).
                </li>
                <li>
                  <strong>Begränsning</strong> — begära att vi begränsar
                  behandlingen.
                </li>
                <li>
                  <strong>Dataportabilitet</strong> — få ut dina uppgifter i ett
                  maskinläsbart format.
                </li>
                <li>
                  <strong>Invändning</strong> — invända mot behandling som
                  baseras på berättigat intresse.
                </li>
              </ul>
              <p>
                För att utöva någon av dessa rättigheter, kontakta oss på{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            </Section>

            <Section title="9. Klagomål">
              <p>
                Om du är missnöjd med hur vi behandlar dina personuppgifter har
                du rätt att lämna in ett klagomål till Integritetsskyddsmyndigheten
                (IMY):{" "}
                <a
                  href="https://www.imy.se/"
                  target="_blank"
                  rel="noreferrer"
                >
                  imy.se
                </a>
                .
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
        className="text-xl sm:text-2xl tracking-tight text-text mb-4 font-display"
      >
        {title}
      </h2>
      <div className="text-text-muted leading-relaxed text-base space-y-3 [&_a]:text-accent [&_a]:underline hover:[&_a]:text-accent-light [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-text [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
