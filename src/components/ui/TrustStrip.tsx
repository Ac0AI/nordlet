import { BadgeCheck, ShieldCheck, RotateCcw, Truck, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

// Kompakt förtroende-rad att lägga nära köp-knappen. Gör de fakta vi redan har
// (CE, garanti, öppet köp, frakt, support) till tydliga badges i stället för
// brödtext – sänker tröskeln precis i köpögonblicket.
const items = [
  { icon: BadgeCheck, label: "CE-märkt" },
  { icon: ShieldCheck, label: "2 års garanti" },
  { icon: RotateCcw, label: "30 dagars öppet köp" },
  { icon: Truck, label: "Fraktfritt i Sverige" },
  { icon: Flag, label: "Svensk support" },
];

export function TrustStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-6 gap-y-3",
        className
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm text-text-muted"
          >
            <Icon size={16} strokeWidth={1.75} className="text-accent" />
            <span className="font-medium">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
