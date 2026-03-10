"use client";

import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  className,
  light,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("mb-16 max-w-2xl", className)}>
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-text"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/70" : "text-text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
