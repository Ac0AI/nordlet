"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, BellRing, Tag, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRELAUNCH_OFFER, SITE } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import { trackLead } from "@/lib/analytics";

const discountKr = PRELAUNCH_OFFER.discountKr.toLocaleString("sv-SE");

const perks = [
  { icon: Tag, text: `${discountKr} kr rabatt på din första beställning` },
  { icon: BellRing, text: "Först i kön när nästa leverans släpps" },
  { icon: ShieldCheck, text: "30 dagars öppet köp och 2 års garanti" },
];

type Status = "idle" | "sending" | "done";

export function NotifyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function mailtoFallback() {
    const subject = `Notis + ${discountKr} kr rabatt: NordLet Pro`;
    const body = `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone || "-"}\n\nMeddela mig när NordLet Pro är åter i lager – jag vill ha ${discountKr} kr rabatt på min första beställning.`;
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
          product: PRELAUNCH_OFFER.product,
        }),
      });
      if (res.ok) {
        trackLead({
          value: PRODUCTS.frihetstoa.priceKr,
          currency: "SEK",
          product: PRELAUNCH_OFFER.product,
        });
        setStatus("done");
        return;
      }
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
            Tack{name ? `, ${name.split(" ")[0]}` : ""} – du står på listan.
          </h3>
          <p className="mt-4 text-text-muted leading-relaxed">
            Vi mejlar dig – med din {discountKr} kr-rabatt – så fort NordLet Pro
            är åter i lager. Kolla din inkorg (och skräpposten för säkerhets
            skull) – bekräftelsen är på väg.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          {/* Värdet */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Slut i lager
            </span>
            <h3 className="mt-4 font-display text-2xl text-text sm:text-3xl">
              Få {discountKr} kr rabatt när den är åter i lager
            </h3>
            <p className="mt-4 max-w-md text-text-muted leading-relaxed">
              NordLet Pro är slut i lager just nu och nästa leverans är
              begränsad. Lämna din e-post så hör du av oss först när den släpps –
              och får {discountKr} kr rabatt på din första beställning.
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
              {status === "sending" ? "Skickar…" : `Få ${discountKr} kr rabatt`}
            </Button>
            <p className="text-center text-xs leading-relaxed text-text-light">
              Vi hör bara av oss om NordLet Pro och din rabatt.{" "}
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
