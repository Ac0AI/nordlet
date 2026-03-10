"use client";

import { cn } from "@/lib/utils";

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer tracking-wide";

  const sizes = {
    default: "rounded-full px-8 py-4 text-base",
    large: "rounded-full px-10 py-5 text-lg",
  };

  const variants = {
    primary:
      "border border-white/10 bg-accent text-white hover:bg-accent-light shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] hover:-translate-y-0.5",
    secondary:
      "bg-primary text-white hover:bg-primary-light shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)]",
    outline:
      "border border-primary/20 bg-transparent text-primary hover:bg-primary hover:text-white",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
