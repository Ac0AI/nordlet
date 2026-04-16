"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white/60 py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          {/* Brand + Org info */}
          <div className="lg:col-span-2">
            <span
              className="text-xl text-white font-normal block mb-3"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              {SITE.name}
            </span>
            <p className="text-white/55 leading-relaxed max-w-sm">
              Frihetstoa. Vattenlös toalett för husbilar och husvagnar.
              Utvecklad för skandinaviska förhållanden, levererad från
              svenskt lager.
            </p>
            {(SITE.company.orgNr || SITE.company.address) && (
              <p className="mt-5 text-xs text-white/40 leading-relaxed">
                {SITE.company.name}
                {SITE.company.orgNr && (
                  <>
                    <br />
                    Org.nr: {SITE.company.orgNr}
                  </>
                )}
                {SITE.company.address && (
                  <>
                    <br />
                    {SITE.company.address}
                  </>
                )}
              </p>
            )}
          </div>

          {/* Nav */}
          <div>
            <p className="text-white font-semibold uppercase tracking-widest text-xs mb-4">
              Utforska
            </p>
            <ul className="space-y-2 [&_a]:py-1 [&_a]:block">
              <li>
                <Link href="/#sa-fungerar-det" className="hover:text-white transition-colors">
                  Så fungerar det
                </Link>
              </li>
              <li>
                <Link href="/sa-fungerar-det" className="hover:text-white transition-colors">
                  Operativprincipen
                </Link>
              </li>
              <li>
                <Link href="/#bestall" className="hover:text-white transition-colors">
                  Beställ
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Vanliga frågor
                </Link>
              </li>
            </ul>
          </div>

          {/* Juridiskt + kontakt */}
          <div>
            <p className="text-white font-semibold uppercase tracking-widest text-xs mb-4">
              Juridiskt och kontakt
            </p>
            <ul className="space-y-2 [&_a]:py-1 [&_a]:block">
              <li>
                <Link href="/kopvillkor" className="hover:text-white transition-colors">
                  Köpvillkor
                </Link>
              </li>
              <li>
                <Link href="/integritetspolicy" className="hover:text-white transition-colors">
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              {SITE.phone && (
                <li>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/35 flex flex-col sm:flex-row justify-between gap-3">
          <span>
            &copy; {new Date().getFullYear()} {SITE.name}. Alla rättigheter förbehållna.
          </span>
          <span>Webbplatsen drivs från svenskt lager. Skandinavisk design.</span>
        </div>
      </Container>
    </footer>
  );
}
