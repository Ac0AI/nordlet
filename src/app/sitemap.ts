import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guider";

const BASE = "https://nordlet.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/guider",
    "/sa-fungerar-det",
    "/kopvillkor",
    "/integritetspolicy",
  ].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date("2026-06-05"),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const guidePages = getAllGuides().map((g) => ({
    url: `${BASE}/guider/${g.slug}`,
    lastModified: new Date(g.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...guidePages];
}
