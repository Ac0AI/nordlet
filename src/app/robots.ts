import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "anthropic-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://nordlet.se/sitemap.xml",
    host: "https://nordlet.se",
  };
}
