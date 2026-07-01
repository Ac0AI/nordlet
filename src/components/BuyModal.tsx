"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, Check, ShieldCheck, Tag, BellRing } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  EARLY_ACCESS,
  PRELAUNCH_OFFER,
  RESTOCK_ESTIMATE,
  STOCK_LABEL,
  SITE,
} from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import { trackLead } from "@/lib/analytics";
import { OPEN_BUY_MODAL } from "@/lib/buyModal";

const discountKr = PRELAUNCH_OFFER.discountKr.toLocaleString("sv-SE");

type Status = "idle" | "sending" | "done";

// Popup som öppnas när någon klickar "Köp" under förlansering. Ser normal ut på
// sidan, men här får besökaren veta att den är slut i lager och erbjuds
// bevakning + 900 kr rabatt. Mountas globalt i layouten; no-op utanför EA.
export function BuyModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!EARLY_ACCESS) return;
    const onOpen = () => setOpen(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener(OPEN_BUY_MODAL, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_BUY_MODAL, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (open && status === "idle") {
      // Fokusera e-postfältet när popupen öppnas.
      const id = requestAnimationFrame(() => emailRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [open, status]);

  if (!EARLY_ACCESS || !open) return null;

  function mailtoFallback() {
    const subject = `Bevaka + ${discountKr} kr rabatt: NordLet Pro`;
    const body = `Namn: ${name || "-"}\nE-post: ${email}\n\nMeddela mig när NordLet Pro är åter i lager – jag vill ha ${discountKr} kr rabatt på min första beställning.`;
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
        body: JSON.stringify({ name, email, product: PRELAUNCH_OFFER.product }),
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
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Bevaka NordLet Pro"
    >
      <div
        className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-7 shadow-2xl shadow-primary/20 sm:p-9">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Stäng"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-text-light transition-colors hover:bg-bg-alt hover:text-text"
        >
          <X size={20} />
        </button>

        {status === "done" ? (
          <div className="text-center">
            <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-light text-green">
              <Check size={28} />
            </span>
            <h3 className="font-display text-2xl text-text">
              Tack{name ? `, ${name.split(" ")[0]}` : ""}!
            </h3>
            <p className="mt-3 text-text-muted leading-relaxed">
              Vi hör av oss så fort NordLet Pro är åter i lager – med din{" "}
              {discountKr} kr-rabatt. Kolla inkorgen (och skräpposten) så missar
              du inget.
            </p>
            <Button
              onClick={() => setOpen(false)}
              className="mt-6 w-full justify-center"
            >
              Stäng
            </Button>
          </div>
        ) : (
          <>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {STOCK_LABEL}
            </span>
            <h3 className="mt-4 font-display text-2xl text-text sm:text-3xl">
              Tack för intresset!
            </h3>
            <p className="mt-3 text-text-muted leading-relaxed">
              Efterfrågan inför sommaren är hög och NordLet Pro är just nu slut i
              lager. Nästa leverans är begränsad och beräknas åter{" "}
              {RESTOCK_ESTIMATE}. Lämna din e-post så hör vi av oss först när den
              är i lager – och du får{" "}
              <strong className="text-text">{discountKr} kr rabatt</strong> på
              din första beställning.
            </p>

            <ul className="mt-5 space-y-2.5">
              {[
                { icon: Tag, text: `${discountKr} kr rabatt på din första order` },
                { icon: BellRing, text: "Först i kön när den släpps" },
                {
                  icon: ShieldCheck,
                  text: "30 dagars öppet köp och 2 års garanti",
                },
              ].map((perk) => {
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

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Namn (valfritt)"
                autoComplete="name"
                className="w-full rounded-xl border border-border bg-bg-warm px-4 py-3 text-base text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
              <input
                ref={emailRef}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Din e-postadress"
                autoComplete="email"
                className="w-full rounded-xl border border-border bg-bg-warm px-4 py-3 text-base text-text outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full justify-center"
              >
                {status === "sending"
                  ? "Skickar…"
                  : `Bevaka & få ${discountKr} kr rabatt`}
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
          </>
        )}
      </div>
    </div>
  );
}
