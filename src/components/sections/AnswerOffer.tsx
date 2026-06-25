"use client";

import { BatteryCharging, PackageCheck, RotateCcw, Truck } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const facts = [
  {
    icon: BatteryCharging,
    label: "Från ca 420 kr/mån",
    detail: "Dela upp eller betala om 30 dagar med Klarna.",
  },
  {
    icon: Truck,
    label: "Leverans 1-5 arbetsdagar",
    detail: "Fri leverans i hela Sverige från svenskt lager.",
  },
  {
    icon: RotateCcw,
    label: "30 dagars öppet köp",
    detail: "Fri retur om NordLet Pro inte passar din vardag.",
  },
  {
    icon: PackageCheck,
    label: "30 användningar per rulle",
    detail: "En resevecka för två vid normal användning.",
  },
];

export function AnswerOffer() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                Kort svar
              </p>
              <h2 className="font-display text-3xl tracking-tight text-text sm:text-4xl">
                Vad är NordLet Pro?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-text-muted">
                NordLet Pro är en fristående, vattenlös toalett för husbil,
                husvagn, båt, stuga och platser utan avlopp. Den ersätter
                kassettoaletten genom att varje besök förseglas i en lufttät
                påse med värmeförsegling. Du behöver ingen vattenanslutning,
                ingen svartvattentank och ingen flytande sanitetsvätska att
                dosera. Toaletten drivs med uppladdningsbart batteri, laddas via
                USB eller 12V och varje rulle räcker till 30 användningar.
                Påsarna läggs i restavfallet, på samma sätt som blöjor. För dig
                som vill vara friare betyder det mindre lukt, färre
                tömningsmoment och enklare vardag där du är.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#bestall">Se paket och pris</Button>
                <Button href="#sa-fungerar-det" variant="outline">
                  Så fungerar det
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="rounded-2xl border border-border bg-bg-warm p-6 sm:p-7">
              <p className="font-display text-2xl text-text">
                Köptrygghet direkt
              </p>
              <div className="mt-6 grid gap-5">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex gap-3">
                      <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="font-semibold text-text">{fact.label}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-text-muted">
                          {fact.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
