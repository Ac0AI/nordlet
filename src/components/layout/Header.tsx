"use client";

import { useState, useEffect } from "react";
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
        <a
          href="#"
          className={cn(
            "text-2xl font-normal tracking-tight transition-colors",
            scrolled ? "text-primary" : "text-white"
          )}
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          {SITE.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-text-muted hover:text-primary"
                  : "text-white/70 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#bestall"
            className="ml-2 bg-accent text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent-light transition-all shadow-sm"
          >
            Beställ nu
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors",
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
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-text-muted hover:text-primary transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#bestall"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-accent text-white px-6 py-3 rounded-lg text-base font-semibold text-center"
            >
              Beställ nu
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
