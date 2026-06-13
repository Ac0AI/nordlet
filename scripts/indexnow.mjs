#!/usr/bin/env node
// Submit nordlet.se-URL:er till IndexNow (Bing, Copilot, Yandex m.fl.).
// Kör efter en deploy med nytt eller ändrat innehåll:
//   node scripts/indexnow.mjs
// IndexNow ger snabbare indexering i Bing/Copilot, vilket i sin tur är
// en förutsättning för att bli citerad av Microsoft Copilot.

const HOST = "nordlet.se";
const KEY = "854e7099686c43cbd9b10a8287d7bdcd";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const STATIC_PATHS = [
  "",
  "/sa-fungerar-det",
  "/guider",
  "/om-oss",
  "/kopvillkor",
  "/integritetspolicy",
];

const GUIDE_SLUGS = [
  "vattenlos-toalett-husbil-sa-fungerar-det",
  "kassettoalett-vs-vattenlos-toalett",
  "luktfri-toalett-sommar-varme",
  "slippa-tomningsstationen",
  "toalett-utan-kemikalier-husvagn",
  "sa-forbereder-du-husbilens-toalett-infor-sommarsasongen-steg-for-steg",
  "husbilssemestern-pa-sommaren-hur-hanterar-du-toalettfragan-utan-krange",
];

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
