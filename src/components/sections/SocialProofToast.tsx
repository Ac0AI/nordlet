"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const notifications = [
  { name: "Lars", location: "Göteborg", time: "2 timmar sedan" },
  { name: "Birgitta", location: "Stockholm", time: "5 timmar sedan" },
  { name: "Göran", location: "Linköping", time: "igår" },
  { name: "Eva", location: "Karlstad", time: "igår" },
  { name: "Stig-Arne", location: "Sundsvall", time: "2 dagar sedan" },
];

export function SocialProofToast() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Start after 8 seconds on page
    const startTimer = setTimeout(() => setStarted(true), 8000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!started) return;

    const show = () => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % notifications.length);
        }, 500);
      }, 5000);
    };

    show();
    const interval = setInterval(show, 18000);
    return () => clearInterval(interval);
  }, [started]);

  const n = notifications[current];

  return (
    <div
      className={cn(
        "fixed bottom-20 lg:bottom-6 left-4 z-40 transition-all duration-500 max-w-xs",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <div className="bg-surface rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3">
        <span className="text-2xl">🛒</span>
        <div>
          <p className="text-sm text-text font-medium">
            {n.name} i {n.location}
          </p>
          <p className="text-xs text-text-muted">
            beställde Frihetstoan, {n.time}
          </p>
        </div>
      </div>
    </div>
  );
}
