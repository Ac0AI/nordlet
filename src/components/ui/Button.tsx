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
    default: "rounded-lg px-8 py-4 text-base",
    large: "rounded-xl px-10 py-5 text-lg",
  };

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-light shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5",
    secondary:
      "bg-primary text-white hover:bg-primary-light shadow-lg",
    outline:
      "border-2 border-primary/20 text-primary hover:bg-primary hover:text-white",
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
