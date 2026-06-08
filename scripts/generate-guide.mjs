#!/usr/bin/env node
/**
 * Auto-generate a seasonal SEO/GEO guide for NordLet Pro, written in the
 * personal voice of Ludvig Eriksson, via the Claude API (Sonnet).
 *
 * Run by .github/workflows/auto-guide.yml every two weeks.
 * Requires env ANTHROPIC_API_KEY. Writes content/guider/<slug>.md.
 */
import fs from "node:fs";
import path from "node:path";

const MODEL = "claude-sonnet-4-6";
const GUIDER_DIR = path.join(process.cwd(), "content", "guider");

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error("ERROR: ANTHROPIC_API_KEY is not set.");
  process.exit(1);
}

function season(month) {
  if (month >= 2 && month <= 4) return "vår";
  if (month >= 5 && month <= 7) return "sommar";
  if (month >= 8 && month <= 10) return "höst";
  return "vinter";
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[åä]/g, "a")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 70);
}

const now = new Date();
const dateISO = now.toISOString().slice(0, 10);
const sasong = season(now.getMonth());

const existing = fs.existsSync(GUIDER_DIR)
  ? fs
      .readdirSync(GUIDER_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""))
  : [];

const prompt = `Du är Ludvig Eriksson, husbilsentusiast och skribent för NordLet. Du skriver personliga, hjälpsamma how-to-guider om NordLet Pro – en vattenlös toalett för husbil och husvagn.

FAKTA OM PRODUKTEN (håll dig till dessa, hitta inte på):
- Vattenlös. Ingen kassettank, ingen vattenanslutning, ingen fast installation.
- Värmeförsegling: varje besök kapslas in i en egen lufttät påse på sekunder.
- Förseglade påsar slängs i vanliga hushållssoporna (restavfall). De är INTE biologiskt nedbrytbara – påstå aldrig det.
- Ingen flytande sanitetsvätska att hälla och dosera. Ett granulat binder vätska och lukt automatiskt. Säg ALDRIG "helt utan kemikalier" – skriv "utan flytande sanitetsvätska att dosera". Vanligt toalettpapper funkar.
- Batteridrift, laddas via USB eller 12V. ~30 användningar per folierulle.
- 30 dagars öppet köp, fri leverans i Sverige.

UPPGIFT: Skriv EN ny guide med en ${sasong}-vinkel (säsongsanpassad). Personlig, first person, varm ton. Svenska.
- 550–750 ord.
- Frågeledda H2-rubriker (bra för GEO/AI-sök).
- En naturlig intern länk till /#bestall någonstans.
- Ärlig, ingen påhittad statistik, inga emoji, inga em-dash (använd tankstreck – eller punkt).
- Får INTE överlappa dessa befintliga ämnen (slugs): ${existing.join(", ") || "(inga än)"}.

SVARA ENDAST med ett giltigt JSON-objekt, inget annat:
{"title": "...", "description": "max 155 tecken, SEO-meta", "excerpt": "1 mening", "keywords": ["3-5 svenska sökord"], "body": "markdown-innehållet med ## rubriker, UTAN H1 och UTAN frontmatter"}`;

const res = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "x-api-key": API_KEY,
    "anthropic-version": "2023-06-01",
    "content-type": "application/json",
  },
  body: JSON.stringify({
    model: MODEL,
    max_tokens: 2500,
    messages: [{ role: "user", content: prompt }],
  }),
});

if (!res.ok) {
  console.error(`ERROR: Anthropic API ${res.status}: ${await res.text()}`);
  process.exit(1);
}

const data = await res.json();
let text = data.content?.[0]?.text?.trim() ?? "";
text = text.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/i, "").trim();

let guide;
try {
  guide = JSON.parse(text);
} catch (e) {
  console.error("ERROR: could not parse model JSON:\n", text.slice(0, 800));
  process.exit(1);
}

const slug = slugify(guide.title);
if (existing.includes(slug)) {
  console.error(`SKIP: slug "${slug}" already exists. No file written.`);
  process.exit(0);
}

const fm = [
  "---",
  `title: ${JSON.stringify(guide.title)}`,
  `description: ${JSON.stringify(guide.description)}`,
  `excerpt: ${JSON.stringify(guide.excerpt)}`,
  `date: "${dateISO}"`,
  "keywords:",
  ...(guide.keywords || []).map((k) => `  - ${k}`),
  "---",
  "",
].join("\n");

fs.mkdirSync(GUIDER_DIR, { recursive: true });
fs.writeFileSync(path.join(GUIDER_DIR, `${slug}.md`), fm + guide.body.trim() + "\n");
console.log(`OK: wrote content/guider/${slug}.md`);
