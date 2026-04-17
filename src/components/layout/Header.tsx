"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between h-20">
        <Link
          href="/"
          aria-label="Till startsidan"
          className={cn(
            "text-2xl font-normal tracking-tight transition-colors",
            scrolled ? "text-primary" : "text-white"
          )}
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors py-3 -my-3",
                scrolled
                  ? "text-text-muted hover:text-primary"
                  : "text-white/75 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#bestall"
            className="ml-2 rounded-full border border-white/10 bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/15 transition-all hover:bg-accent-light"
          >
            Beställ nu
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={cn(
            "lg:hidden p-3 -mr-3 transition-colors",
            scrolled ? "text-text-muted" : "text-white"
          )}
          aria-label="Meny"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface/98 backdrop-blur-md border-t border-border">
          <Container className="py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-text-muted hover:text-primary transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#bestall"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-accent px-6 py-3 text-center text-base font-semibold tracking-wide text-white"
            >
              Beställ nu
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
