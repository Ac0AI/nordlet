#!/usr/bin/env node
// Submit nordlet.se-URL:er till IndexNow (Bing, Copilot, Yandex m.fl.).
// Kör efter en deploy med nytt eller ändrat innehåll:
//   node scripts/indexnow.mjs
// IndexNow ger snabbare indexering i Bing/Copilot, vilket i sin tur är
// en förutsättning för att bli citerad av Microsoft Copilot.

import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const HOST = "nordlet.se";
const KEY = "854e7099686c43cbd9b10a8287d7bdcd";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Körs auto i Vercel-builden (via "build"-scriptet). Med --vercel-prod-only
// ping:ar vi BARA på production-deploys – preview/PR-builds och lokala builds
// hoppas över. Manuell körning (node scripts/indexnow.mjs) ping:ar alltid.
if (process.argv.includes("--vercel-prod-only") && process.env.VERCEL_ENV !== "production") {
  console.log(`IndexNow: hoppar över (VERCEL_ENV=${process.env.VERCEL_ENV ?? "unset"}, inte production).`);
  process.exit(0);
}

// Håll i synk med src/app/sitemap.ts (samma indexerbara sidor).
const STATIC_PATHS = [
  "",
  "/guider",
  "/om-oss",
  "/sa-fungerar-det",
  "/kopvillkor",
  "/integritetspolicy",
];

// Läs guide-slugs från filsystemet så listan aldrig driver isär från innehållet.
const GUIDER_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "content", "guider");
const GUIDE_SLUGS = readdirSync(GUIDER_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""));

const urlList = [
  ...STATIC_PATHS.map((p) => `https://${HOST}${p}`),
  ...GUIDE_SLUGS.map((s) => `https://${HOST}/guider/${s}`),
];

const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow: HTTP ${res.status} ${res.statusText}`);
console.log(`Skickade ${urlList.length} URL:er.`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
