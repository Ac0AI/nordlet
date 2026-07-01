"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, RotateCcw, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FOUNDING, SITE } from "@/lib/constants";
import { trackLead } from "@/lib/analytics";

const foundingKr = FOUNDING.priceKr.toLocaleString("sv-SE");
const ordinaryKr = FOUNDING.ordinaryKr.toLocaleString("sv-SE");

const perks = [
  { icon: CreditCard, text: "Ingen betalning nu – du reserverar bara priset" },
  { icon: RotateCcw, text: "30 dagars öppet köp när du köper" },
  { icon: ShieldCheck, text: "2 års garanti och svensk support" },
];

type Status = "idle" | "sending" | "done";

export function EarlyAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function mailtoFallback() {
    const subject = "Intresseanmälan: NordLet Pro (grundarpris)";
    const body = `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone || "-"}\n\nJag vill säkra grundarpriset som en av de första.`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          product: FOUNDING.product,
        }),
      });
      if (res.ok) {
        trackLead({
          value: FOUNDING.priceKr,
          currency: "SEK",
          product: FOUNDING.product,
        });
        setStatus("done");
        return;
      }
      // Inte konfigurerat (503) eller fel – tappa ingen anmälan, öppna mailto.
      mailtoFallback();
      setStatus("idle");
    } catch {
      mailtoFallback();
      setStatus("idle");
    }
  }

  return (
    <div
      id="reservera"
      className="mx-auto max-w-4xl scroll-mt-28 rounded-2xl border-2 border-accent bg-surface p-7 shadow-xl shadow-accent/10 sm:p-10"
    >
      {status === "done" ? (
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-light text-green">
            <Check size={28} />
          </span>
          <h3 className="font-display text-2xl text-text sm:text-3xl">
            Tack{name ? `, ${name.split(" ")[0]}` : ""} – din plats är reserverad.
          </h3>
          <p className="mt-4 text-text-muted leading-relaxed">
            Vi öppnar kassan inom kort och mejlar dig en personlig länk till
            grundarpriset {foundingKr} kr. Kolla din inkorg (och skräpposten för
            säkerhets skull) – bekräftelsen är på väg.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          {/* Värdet */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              Grundarerbjudande
            </span>
            <h3 className="mt-4 font-display text-2xl text-text sm:text-3xl">
              Bli en av de {FOUNDING.limit} första
            </h3>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-text sm:text-5xl">
                {foundingKr} kr
              </span>
              <span className="text-lg text-text-light line-through">
                {ordinaryKr} kr
              </span>
            </div>
            <p className="mt-3 max-w-md text-text-muted leading-relaxed">
              Kassan öppnar inom kort. Reservera grundarpriset nu, så mejlar vi
              din personliga köplänk så fort den är igång. Ingen betalning i dag.
            </p>
            <ul className="mt-6 space-y-2.5">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <li
                    key={perk.text}
                    className="flex items-center gap-3 text-sm text-text"
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-light text-green">
                      <Icon size={13} />
                    </span>
                    {perk.text}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Formuläret */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="text-sm font-medium text-text">
              Namn
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="mt-1.5 w-full rounded-xl border border-border bg-bg-warm px-4 py-3 text-base text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </label>
            <label className="text-sm font-medium text-text">
              E-post
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="mt-1.5 w-full rounded-xl border border-border bg-bg-warm px-4 py-3 text-base text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </label>
            <label className="text-sm font-medium text-text">
              Telefon <span className="text-text-light">(valfritt)</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                className="mt-1.5 w-full rounded-xl border border-border bg-bg-warm px-4 py-3 text-base text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </label>
            <Button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 w-full justify-center"
            >
              {status === "sending" ? "Skickar…" : "Säkra grundarpriset"}
            </Button>
            <p className="text-center text-xs leading-relaxed text-text-light">
              Genom att anmäla dig godkänner du att vi kontaktar dig om NordLet
              Pro.{" "}
              <Link
                href="/integritetspolicy"
                className="underline underline-offset-2 hover:text-accent"
              >
                Så hanterar vi dina uppgifter
              </Link>
              .
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
