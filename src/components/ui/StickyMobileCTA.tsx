"use client";

import { useState, useEffect } from "react";
import { SITE } from "@/lib/constants";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [inOrderSection, setInOrderSection] = useState(false);

  useEffect(() => {
    const updateState = () => {
      setVisible(window.scrollY > 600);

      const orderSection = document.getElementById("bestall");
      if (!orderSection) {
        return;
      }

      const rect = orderSection.getBoundingClientRect();
      setInOrderSection(rect.top < window.innerHeight - 120 && rect.bottom > 120);
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-300",
        visible && !inOrderSection
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      )}
    >
      <div className="bg-surface/95 backdrop-blur-md border-t border-border px-4 py-3 flex items-center gap-3">
        <a
          href="#bestall"
          className="flex-1 bg-accent text-white font-semibold py-3.5 rounded-xl text-center text-base hover:bg-accent-light transition-all shadow-lg shadow-accent/20"
        >
          Beställ NordLet Pro
        </a>
        {SITE.phone && (
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="flex-shrink-0 w-13 h-13 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary-light transition-all"
            aria-label="Ring oss"
          >
            <Phone size={20} />
          </a>
        )}
      </div>
      <p className="bg-surface/95 text-center text-xs text-text-light pb-2 px-4">
        30 dagars öppet köp. Fri retur.
      </p>
    </div>
  );
}
