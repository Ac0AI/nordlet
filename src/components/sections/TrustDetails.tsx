"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  FileText,
  Mail,
  Ruler,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const trustItems = [
  {
    icon: Ruler,
    title: "Mått före köp",
    text: "NordLet Pro mäter 355 x 488 x 515 mm. Kontrollera både golvyta, dörr och åtkomst till lådan.",
    href: "/#specifikationer",
    link: "Se teknisk data",
  },
  {
    icon: FileText,
    title: "Manual och skötsel",
    text: "Kort svensk webbmanual för montering, påsrulle, laddning, tömning och säker användning.",
    href: "/manual",
    link: "Läs manualen",
  },
  {
    icon: RotateCcw,
    title: "Villkor och retur",
    text: "14 dagars lagstadgad ångerrätt och 30 dagars öppet köp. Returfrakt framgår i villkoren.",
    href: "/kopvillkor#retur",
    link: "Läs köpvillkor",
  },
  {
    icon: Mail,
    title: "Svensk support",
    text: `Frågor före eller efter köp går direkt till ${SITE.email}. Skicka gärna bild på utrymmet om du är osäker på passform.`,
    href: `mailto:${SITE.email}`,
    link: "Kontakta support",
  },
];

export function TrustDetails() {
  const hasCompanyDetails = Boolean(SITE.company.orgNr || SITE.company.address);

  return (
    <section
      id="trygghet"
      className="scroll-mt-24 bg-surface py-20 sm:scroll-mt-28 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <AnimateOnScroll className="lg:col-span-5">
            <div className="grid gap-4">
              <figure className="overflow-hidden rounded-3xl border border-border bg-bg-alt">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={IMAGES.productDetail}
                    alt="NordLet Pro med öppet lock och monterad påsrulle"
                    fill
                    className="object-contain p-5"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                <figcaption className="border-t border-border px-5 py-3 text-sm text-text-muted">
                  Riktig produktbild: öppet lock och påsrulle.
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-2xl border border-border bg-bg-alt">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={IMAGES.productDimensions}
                    alt="NordLet Pro med utdragen uppsamlingslåda"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                <figcaption className="border-t border-border px-5 py-3 text-sm text-text-muted">
                  Utdragen låda, så att du ser hur tömningen fungerar.
                </figcaption>
              </figure>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.12} className="lg:col-span-7">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Förtroende före köp
            </p>
            <h2 className="max-w-2xl font-display text-3xl leading-snug tracking-tight text-text sm:text-4xl">
              Produktbilder, mått, manual och villkor ska vara lätta att hitta.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
              NordLet Pro är en fysisk produkt som ska passa i ett verkligt
              utrymme. Därför samlar vi de viktigaste kontrollerna här: riktiga
              bilder, teknisk data, support, returvillkor och företagsuppgifter.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {trustItems.map((item) => {
                const Icon = item.icon;
                const isEmailLink = item.href.startsWith("mailto:");
                return (
                  <div key={item.title} className="border-t border-border pt-5">
                    <Icon
                      className="mb-3 text-primary"
                      size={22}
                      strokeWidth={1.75}
                    />
                    <h3 className="font-semibold text-text">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {item.text}
                    </p>
                    {isEmailLink ? (
                      <a
                        href={item.href}
                        className="mt-3 inline-flex text-sm font-semibold text-accent hover:text-accent-warm"
                      >
                        {item.link}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="mt-3 inline-flex text-sm font-semibold text-accent hover:text-accent-warm"
                      >
                        {item.link}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-bg-warm p-6 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-text">
                    <Building2 size={20} className="text-primary" />
                    <p className="font-semibold">Företagsuppgifter</p>
                  </div>
                  <p className="mt-3 text-text">{SITE.company.name}</p>
                  {SITE.company.orgNr && (
                    <p className="mt-1 text-sm text-text-muted">
                      Org.nr: {SITE.company.orgNr}
                    </p>
                  )}
                  {SITE.company.address && (
                    <p className="mt-1 text-sm text-text-muted">
                      {SITE.company.address}
                    </p>
                  )}
                  {!hasCompanyDetails && (
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-text-muted">
                      Organisationsnummer och adress publiceras här när
                      bolagsregistreringen är slutförd. Vi anger inte F-skatt
                      förrän den är godkänd.
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 rounded-full bg-green-light px-4 py-2 text-sm font-semibold text-green">
                  <ShieldCheck size={16} />
                  2 års garanti
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/manual" variant="outline">
                Läs manualen
              </Button>
              <Button href="/#bestall">Se paket och pris</Button>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
