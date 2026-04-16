# Frihetstoa Operativprincip - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bygg en ny undersida `/sa-fungerar-det` med 4-kapitel-story om Frihetstoa (8 nanobanana-bilder), och ersätt nuvarande `HowItWorks`-sektion på startsidan med en kompakt 4-korts-teaser som länkar dit. Rolla in tre HIGH-findings från baseline design-audit (touch targets, felaktig brand-rubrik, AI-slop 3-kol-grid) under vägen.

**Architecture:** Ny route under `/sa-fungerar-det`. Delad `CHAPTERS`-dataset i `constants.ts` matar både teaser och långsida. Bildgenerering via fristående nanobanana-script som läser `GEMINI_API_KEY` från env. Komponenter placerade i `src/components/sections/operating-principle/`. Inga befintliga sektioner rörs förutom `HowItWorks` (refaktoreras) och `Header`/`Footer` (touch target-fix).

**Tech Stack:** Next.js 16 App Router · React 19 · Tailwind CSS 4 · framer-motion · lucide-react · `@giorgioliapakis/nanobanana` (Gemini-baserad CLI för bildgenerering).

**Spec:** `docs/superpowers/specs/2026-04-16-frihetstoa-operativprincip-design.md`
**Baseline audit:** `~/.gstack/projects/Ac0AI-nordlet/designs/design-audit-20260416/design-audit-nordlet.vercel.app.md`

---

## File Structure

**Skapar:**
- `scripts/generate-operativprincip.mjs` - nanobanana-generator för 8 bilder
- `.env.example` - deklarerar `GEMINI_API_KEY` för `pnpm sync-env`
- `public/images/how-it-works/` - katalog för genererade bilder (8 st PNG)
- `src/components/sections/operating-principle/OperatingHero.tsx`
- `src/components/sections/operating-principle/Chapter.tsx`
- `src/components/sections/operating-principle/OperatingCTA.tsx`
- `src/app/sa-fungerar-det/layout.tsx` - egen metadata
- `src/app/sa-fungerar-det/page.tsx`

**Modifierar:**
- `src/lib/constants.ts` - lägger till `CHAPTERS`-konstant, tar bort `STEPS`
- `src/lib/images.ts` - lägger till `IMAGES.howItWorks`-objekt
- `src/components/sections/HowItWorks.tsx` - refaktorerad till 4-korts-teaser
- `src/components/layout/Header.tsx` - touch target-fix på nav-länkar
- `src/components/layout/Footer.tsx` - touch target-fix på footer-länkar

**Oberört:** resten av landing-sidans sektioner (`Hero`, `AsSeenIn`, `Problem`, `Product`, `Authority`, `LifestyleBanner`, `Comparison`, `Features`, etc.).

---

## Task 0: Touch-Target A11y-Fix (prep)

**Rolls in design-audit finding #4.** Kan göras som första commit innan något annat eftersom den är helt isolerad.

**Files:**
- Modify: `src/components/layout/Header.tsx:42-55` (desktop-nav-länkar) och `:56-61` (CTA)
- Modify: `src/components/layout/Footer.tsx:22-33` (footer-länkar)

- [ ] **Step 0.1: Uppdatera Header desktop-nav-länkar**

I `src/components/layout/Header.tsx`, lägg till `py-3` på nav-länkarna och `-my-3` för att kompensera så layouten inte hoppar. Ersätt block på rad 42-55:

```tsx
{NAV_LINKS.map((link) => (
  <a
    key={link.href}
    href={link.href}
    className={cn(
      "text-sm font-medium transition-colors py-3 -my-3",
      scrolled
        ? "text-text-muted hover:text-primary"
        : "text-white/75 hover:text-white"
    )}
  >
    {link.label}
  </a>
))}
```

- [ ] **Step 0.2: Uppdatera Header CTA-knapp och mobile toggle**

Samma fil, rad 56-61 - byt `py-2.5` till `py-3` på CTA-knappen så den blir 44px. Samma fil, rad 65-74 - byt `p-2` till `p-3` på mobile toggle.

CTA-knapp:
```tsx
<a
  href="#bestall"
  className="ml-2 rounded-full border border-white/10 bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-black/15 transition-all hover:bg-accent-light"
>
  Beställ nu
</a>
```

Mobile toggle:
```tsx
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className={cn(
    "lg:hidden p-3 -mr-3 transition-colors",
    scrolled ? "text-text-muted" : "text-white"
  )}
  aria-label="Meny"
>
  {menuOpen ? <X size={24} /> : <Menu size={24} />}
</button>
```

- [ ] **Step 0.3: Uppdatera Footer-länkar**

I `src/components/layout/Footer.tsx`, ersätt hela `<div className="flex gap-6">`-blocket (rad 21-34) med:

```tsx
<div className="flex gap-2 -my-3 flex-wrap">
  <a href="#" className="px-2 py-3 hover:text-white transition-colors">
    Integritetspolicy
  </a>
  <a href="#" className="px-2 py-3 hover:text-white transition-colors">
    Villkor
  </a>
  <a
    href={`mailto:${SITE.email}`}
    className="px-2 py-3 hover:text-white transition-colors"
  >
    Kontakt
  </a>
</div>
```

- [ ] **Step 0.4: Starta dev-server och verifiera visuellt**

Kör i terminal:
```bash
pnpm dev
```

Öppna `http://localhost:3000`. Inspektera header-länkar med DevTools → Elements → beräknade dimensioner. Alla nav-länkar ska vara minst 44px höga inkl. klickyta (`py-3` ger 12px top + 12px bottom + text ~20px = 44px). CTA-knappen likadant. Footer-länkar likadant.

Stoppa dev-servern (Ctrl+C) innan commit.

- [ ] **Step 0.5: Commit**

```bash
git add src/components/layout/Header.tsx src/components/layout/Footer.tsx
git commit -m "a11y: bump nav and footer touch targets to 44px

Adresses design-audit FINDING-005. All nav-links, header CTA, mobile
toggle and footer-links now meet the 44x44 minimum click/tap area."
```

---

## Task 1: Nanobanana Generator Script

**Files:**
- Create: `scripts/generate-operativprincip.mjs`
- Create: `.env.example`

- [ ] **Step 1.1: Skapa `.env.example`**

Skapa ny fil `/Users/dpr/Code/Projekt/nordlet/.env.example` med innehåll:

```
# Google Gemini API (used by scripts/generate-operativprincip.mjs).
# Synced from the shared Projekt/.env.shared via `pnpm sync-env` from the hub.
GEMINI_API_KEY=
```

- [ ] **Step 1.2: Skapa scripts-katalog och generator**

Skapa ny fil `/Users/dpr/Code/Projekt/nordlet/scripts/generate-operativprincip.mjs`:

```js
#!/usr/bin/env node
// Generates the 8 images for /sa-fungerar-det via nanobanana CLI.
// Reads GEMINI_API_KEY from process.env - never hardcoded.
// Run: pnpm tsx scripts/generate-operativprincip.mjs  OR  node scripts/generate-operativprincip.mjs
//
// Args:
//   --only=05,06   regenerate only listed image numbers (useful when iterating on a single prompt)
//   --all          force regeneration of images that already exist (default: skip existing)

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const ROOT = resolve(dirname(__filename), "..");
const OUT_DIR = resolve(ROOT, "public/images/how-it-works");

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("GEMINI_API_KEY missing. Run `pnpm sync-env` from /Users/dpr/Code/Projekt.");
  process.exit(1);
}

// Produkt-anchor: samma beskrivning i alla prompter så unit:en läser som SAMMA
// Frihetstoa i varje bild. Kritiskt för en konsekvent bildserie.
const PRODUCT =
  "Frihetstoa: a compact portable dry toilet, approximately 45 cm tall, with a matte bone-white polymer body and gently chamfered top edges. A minimal recessed control panel sits on the upper front face with two flush-mount buttons (small droplet icon on the left, larger filled-circle icon on the right) and a subtle pill-shaped LED status indicator. A thin brushed-stainless accent ring runs where the lid meets the body. The lower third is a full-width pull-out collection drawer with a single recessed grip. Scandinavian industrial design in the spirit of Vipp and Bang & Olufsen: quiet geometry, no visible screws, no logos, no labels, no text anywhere.";

// Studio-anchor: samma ljus, samma bakgrund, samma kameralook i alla foto-bilder
const STUDIO =
  "Shot on a medium-format camera with an 80 mm prime at f/4, editorial product photography. Soft diffused north-facing window light falling 45° from upper-left, gentle long shadows with warm undertone. Seamless bone-white studio background (#f8f5ef) with a subtle warm-sand gradient at the base. Muted nordic palette: bone white, warm greige, faint terracotta warmth, brushed steel. Photorealistic, 4K, micro-dust-free, zero post-processing banding. Absolutely no brand logos, no printed text, no icons with letters, no labels, no measurement marks.";

// Cutaway-anchor: tydligt skilt visuellt språk för de 2 tekniska bilderna
const CUTAWAY =
  "Axonometric technical cutaway illustration in the visual language of premium OEM product manuals (Dieter-Rams-era Braun, contemporary Leica documentation). 30° isometric projection. Clean vector linework, semi-realistic volumetric shading with soft radial gradients. Primary surfaces in bone white (#f5efe4), cut-open edges in warm greige (#c8b89a), heating element in soft terracotta glow (#b48a4a), film material in pale sand (#e8dcc3), accent lines in warm charcoal (#3a342c). Off-white seamless background (#f8f5ef). No labels, no arrows, no callouts, no numbers, no text, no dashed hidden lines.";

const IMAGES = [
  {
    id: "01",
    file: "01-installation-rulle.png",
    aspect: "4:5",
    prompt:
      "Hero product shot, camera at toilet top height, subject framed centered with 15% margin on sides and 25% negative space at bottom. The lid of the toilet has been lifted off and rests out-of-frame to the left, a thin slice visible. A hand wearing a cream-linen shirt cuff is lowering a clean circular white film cassette (about 15 cm diameter, donut-shaped) into the open cassette bay visible on the top of the body. Focus is sharp on the hand and cassette, body softly falling into depth. The rest of the unit fully visible in frame. " +
      PRODUCT + " " + STUDIO,
  },
  {
    id: "02",
    file: "02-installation-reset.png",
    aspect: "1:1",
    prompt:
      "Extreme macro crop, tilted 15° three-quarter angle, filling the frame with just the top-left corner of the control panel. A single index finger with a cream-linen shirt cuff hovers 1 cm above a tiny recessed Reset button marked only by a minimal circular-arrow glyph etched flush into the polymer. The button glows softly with a cool-white LED. The polymer surface around the button shows a fine micro-brushed texture catching the side light. Dramatic shallow depth of field, finger and button tack-sharp, everything else softly blurred. " +
      PRODUCT + " " + STUDIO,
  },
  {
    id: "03",
    file: "03-anvandning-miljo.png",
    aspect: "4:5",
    prompt:
      "Wide lifestyle shot at eye level, camera positioned as if seated. The Frihetstoa stands on a pale oak wood plank floor inside the interior of a premium Scandinavian motorhome. To the right, warm birch-ply cabinetry with a thin brass handle. To the left, a half-drawn cream linen café-curtain covers part of a small rectangular window. Through the window, a softly out-of-focus view of a calm Norwegian fjord with dark pine forest edges in morning mist. A small ceramic coffee mug sits on a built-in shelf in the far background. No people, no clothing, no pets. Warm morning sunlight slants in from the left, casting long gentle shadows on the floor. The product occupies the central 40% of the frame. Muted nordic palette, photorealistic, 4K. " +
      PRODUCT,
  },
  {
    id: "04",
    file: "04-anvandning-panel.png",
    aspect: "1:1",
    prompt:
      "Close-up three-quarter angle of the control panel, camera level with the panel face. Two buttons visible side by side: left button smaller with a minimal water-droplet icon (no letters, no words), right button larger with a simple filled-circle icon. Both buttons glow softly with warm amber LED from within the flush-mount polymer surface. The surrounding polymer is matte bone white with faint micro-brushed texture catching side light. Shallow depth of field, the right (larger) button perfectly in focus, the left slightly softer, background of the panel falling into gentle bokeh. " +
      PRODUCT + " " + STUDIO,
  },
  {
    id: "05",
    file: "05-forsegling-svets.png",
    aspect: "4:5",
    prompt:
      "Axonometric technical cutaway of the Frihetstoa, 30° isometric projection, cut away on the front-right quarter so the viewer sees directly into the interior. The cross-section clearly shows three elements: (1) a circular film cassette mounted on the right interior wall, feeding a continuous ribbon of pale-sand film upward and around the seat ring, (2) just below the seat, the film is being gathered inward and pinched closed by a warm-terracotta glowing horizontal heat-sealing bar, shown mid-action, (3) immediately below the seal, a freshly formed pillow-shaped sealed film bag hangs suspended, the still-warm seal visible as a fine horizontal line across its top. Subtle soft volumetric light from upper-left suggests quiet interior illumination. " +
      CUTAWAY,
  },
  {
    id: "06",
    file: "06-forsegling-matning.png",
    aspect: "1:1",
    prompt:
      "Axonometric technical cutaway of the same Frihetstoa, 30° isometric projection, front-right quarter cut away. This is the AFTER moment: the sealing bar has retracted (rendered faintly in the background), a freshly sealed pillow-shaped film bag has just landed at the bottom of a partially visible pull-out collection drawer, and fresh new unused film from the side-mounted cassette roll is mid-motion feeding upward into the seat opening, its movement indicated by a soft terracotta motion-trail that fades out. Three previously-sealed bags are already stacked neatly in the drawer below. " +
      CUTAWAY,
  },
  {
    id: "07",
    file: "07-tomning-lada.png",
    aspect: "4:5",
    prompt:
      "Front-facing three-quarter angle of the Frihetstoa, camera at seat-height. The lower collection drawer is pulled fully out, extending about 15 cm forward from the body with a thin shadow cast on the floor. Inside the drawer, five to seven neatly stacked pillow-shaped sealed film bags, uniform bone-white color, faintly translucent. The main body of the unit is softly behind, drawer is the sharpest element. No hands in frame. Generous negative space around the product. " +
      PRODUCT + " " + STUDIO,
  },
  {
    id: "08",
    file: "08-tomning-sopor.png",
    aspect: "1:1",
    prompt:
      "Medium close-up lifestyle still-life, camera at waist height. A hand with a cream-linen shirt cuff (same wardrobe as in images 01 and 02, for continuity) is mid-drop, releasing a single sealed pillow-shaped bone-white film bag. The bag is frozen mid-fall, just left of the hand, above an ordinary Scandinavian kitchen pedal bin with a plain dark charcoal-grey liner. The bin stands on a pale oak wood kitchen floor; a blonde-oak counter edge is partially visible in the upper background. Soft natural window light from the right, short shadow cast to the left. No brand markings, no pattern, no printing on the bin or liner. Photorealistic editorial still-life style, 4K, muted nordic palette.",
  },
];

const args = process.argv.slice(2);
const only = args.find((a) => a.startsWith("--only="))?.split("=")[1]?.split(",") ?? null;
const forceAll = args.includes("--all");

mkdirSync(OUT_DIR, { recursive: true });

const queue = IMAGES.filter((img) => {
  if (only) return only.includes(img.id);
  if (!forceAll && existsSync(resolve(OUT_DIR, img.file))) return false;
  return true;
});

if (queue.length === 0) {
  console.log("All images already exist. Pass --all to regenerate or --only=XX,YY for specific ones.");
  process.exit(0);
}

console.log(`Generating ${queue.length} image(s)...`);

for (const img of queue) {
  const outPath = resolve(OUT_DIR, img.file);
  console.log(`\n[${img.id}] ${img.file} (${img.aspect})`);
  const res = spawnSync(
    "npx",
    [
      "--yes",
      "@giorgioliapakis/nanobanana",
      "generate",
      img.prompt,
      "-o",
      OUT_DIR,
      "--aspect",
      img.aspect,
    ],
    {
      stdio: "inherit",
      env: { ...process.env, GEMINI_API_KEY: API_KEY },
    },
  );
  if (res.status !== 0) {
    console.error(`Failed to generate ${img.file} (exit ${res.status})`);
    process.exit(1);
  }
  // Nanobanana may save with its own filename; rename if needed.
  // We don't auto-rename here — caller inspects OUT_DIR after run and renames manually.
}

console.log("\nDone. Inspect output in public/images/how-it-works/.");
console.log("If filenames differ from the spec, rename them manually to match:");
for (const img of IMAGES) console.log(`  ${img.file}`);
```

- [ ] **Step 1.3: Commit generator + env-mall**

```bash
git add scripts/generate-operativprincip.mjs .env.example
git commit -m "feat: add nanobanana generator for operativprincip images

Reads GEMINI_API_KEY from env (never CLI args). Generates 8 images
to public/images/how-it-works/ via @giorgioliapakis/nanobanana.
Supports --only=XX to iterate on individual prompts."
```

---

## Task 2: Generate + Verify 8 Images

**Files:**
- Create: `public/images/how-it-works/01-installation-rulle.png` through `08-tomning-sopor.png`

- [ ] **Step 2.1: Synka env från hub så GEMINI_API_KEY finns lokalt**

Från projekt-hub, kör:
```bash
cd /Users/dpr/Code/Projekt && pnpm sync-env
```

Förväntat: scriptet rapporterar att `GEMINI_API_KEY` lagts till i `/Users/dpr/Code/Projekt/nordlet/.env.local` (eller motsvarande). Verifiera med:
```bash
grep -c GEMINI_API_KEY /Users/dpr/Code/Projekt/nordlet/.env.local
```
Förväntat: `1`.

- [ ] **Step 2.2: Kör generatorn**

```bash
cd /Users/dpr/Code/Projekt/nordlet
export GEMINI_API_KEY=$(grep GEMINI_API_KEY .env.local | cut -d= -f2)
node scripts/generate-operativprincip.mjs
```

Förväntat: 8 bilder genereras till `public/images/how-it-works/`. Kör tar 1-3 minuter totalt.

- [ ] **Step 2.3: Döp om bilderna om nanobanana skapar andra namn**

```bash
ls public/images/how-it-works/
```

Om filnamnen avviker från spec-listan (01-installation-rulle.png osv.), byt till rätt namn med `mv`. Exempel:
```bash
cd public/images/how-it-works/
mv gemini-image-abc123.png 01-installation-rulle.png
# upprepa för alla 8
```

Slutresultat ska vara exakt:
```
01-installation-rulle.png
02-installation-reset.png
03-anvandning-miljo.png
04-anvandning-panel.png
05-forsegling-svets.png
06-forsegling-matning.png
07-tomning-lada.png
08-tomning-sopor.png
```

- [ ] **Step 2.4: Visuell QA - öppna alla 8 i Finder och granska**

Kör:
```bash
open public/images/how-it-works/
```

Checklista (gå igenom bild för bild):
- [ ] Bild 1-4 + 7-8: konsekvent studio-foto-stil, ljus bakgrund, samma matta vita produktyta
- [ ] Bild 5-6: tydligt annan stil (isometrisk cutaway-illustration), inte foto
- [ ] Ingen bild innehåller synlig text, logotyp eller etiketter
- [ ] Inga händer/kroppar i bild 1, 2, 3, 4, 7 förutom där spec kräver hand (1, 2, 8)
- [ ] Bild 8 visar hand + påse + soptunna utan varumärken
- [ ] Inga lysande extrema färger som bryter paletten (varm terracotta som accent, bone white, sand, warm grey - inga neon/purple)

Om enstaka bild missar: generera om bara den via:
```bash
node scripts/generate-operativprincip.mjs --only=05
```
(och döp om igen om behövs)

- [ ] **Step 2.5: Commit alla 8 bilder**

```bash
git add public/images/how-it-works/
git commit -m "feat: add 8 generated images for operativprincip page

6 studio renders + 2 isometric cutaway diagrams, generated via
nanobanana/Gemini. Filenames match spec."
```

---

## Task 3: Data - Add CHAPTERS to constants + paths to images

**Files:**
- Modify: `src/lib/constants.ts` - lägg till `CHAPTERS`, ta bort `STEPS` (nuvarande rad 105-124)
- Modify: `src/lib/images.ts` - lägg till `howItWorks`-paths

- [ ] **Step 3.1: Lägg till `CHAPTERS` och ta bort `STEPS` i constants.ts**

I `src/lib/constants.ts`, hitta `STEPS`-exporten (börjar på rad 105). Ersätt hela `STEPS`-blocket (från `export const STEPS` till och med den avslutande `];`) med:

```ts
export const CHAPTERS = [
  {
    number: "01",
    slug: "installation",
    title: "Klar att använda på fem minuter",
    lead: "Ingen fast installation. Ingen slang. Ingen tömningsstation att ansluta till.",
    body: "Lyft av överdelen, sätt folierullen på plats i toalettens bas och sätt tillbaka locket. Tryck på Reset. Frihetstoa kalibrerar sig själv och är redo. Första gången tar det runt fem minuter. Efter det byter du rullen ungefär en gång i veckan när LED-lampan visar att det är dags.",
    stat: "30 användningar per rulle - ungefär en resevecka för två personer.",
    images: {
      primary: "/images/how-it-works/01-installation-rulle.png",
      secondary: "/images/how-it-works/02-installation-reset.png",
      primaryAlt: "Folierulle sätts på plats i Frihetstoa",
      secondaryAlt: "Hand trycker Reset-knappen på kontrollpanelen",
    },
  },
  {
    number: "02",
    slug: "anvandning",
    title: "Precis som hemma. Bara utan vatten.",
    lead: "Sätt dig, gör ditt, stäng locket, tryck på knappen.",
    body: "Sitsen är i standardhöjd och känns som en vanlig toalett. När du är klar stänger du locket och väljer litet eller stort program på kontrollpanelen. Du behöver inte hälla i något toamedel, inte mäta ut någon vätska och inte spola. Frihetstoa sköter resten själv.",
    stat: "Dubbelt läge för flytande och fast. Noll kemikalier.",
    images: {
      primary: "/images/how-it-works/03-anvandning-miljo.png",
      secondary: "/images/how-it-works/04-anvandning-panel.png",
      primaryAlt: "Frihetstoa installerad i husbilsinteriör med varmt morgonljus",
      secondaryAlt: "Närbild av kontrollpanelens lägesknappar",
    },
  },
  {
    number: "03",
    slug: "forseglingen",
    title: "Det tysta jobbet under locket",
    lead: "Det här är den del som gör att du aldrig behöver tömma en kassettank igen.",
    body: "När du tryckt på knappen drar Frihetstoa ihop folien runt innehållet och värmeförseglar den till en lufttät påse. Varje besök får sin egen förslutning. När påsen är förseglad matas ny, ren folie automatiskt fram och skålen är klar för nästa gång. Ingen kemikalie, ingen doft som väntar på dig i skåpet, ingen mekanik som du själv behöver hantera.",
    stat: "Lufttät försegling - även sommartid när värmen står still ovanför husbilen.",
    images: {
      primary: "/images/how-it-works/05-forsegling-svets.png",
      secondary: "/images/how-it-works/06-forsegling-matning.png",
      primaryAlt: "Genomskärning av värmeförseglingen inuti Frihetstoa",
      secondaryAlt: "Genomskärning som visar ny folie som matas fram",
    },
  },
  {
    number: "04",
    slug: "tomning",
    title: "Från husbilen till hushållssoporna",
    lead: "Inga tömningsstationer. Inga söndagsköer. Inga sanitetsvätskor.",
    body: "När uppsamlingslådan är full tänds LED-indikatorn på kontrollpanelen. Dra ut lådan i nederdelen. Eftersom varje påse är förseglad för sig finns ingen lukt och ingen risk för spill. Du lägger dem i vanliga hushållssoporna - vid nästa rastplats, på campingen eller hemma i köket när resan är slut.",
    stat: "Påsarna är biologiskt nedbrytbara och går i det vanliga restavfallet.",
    images: {
      primary: "/images/how-it-works/07-tomning-lada.png",
      secondary: "/images/how-it-works/08-tomning-sopor.png",
      primaryAlt: "Uppsamlingslådan utdragen med synliga förseglade påsar",
      secondaryAlt: "Hand släpper en förseglad påse i en vanlig soptunna",
    },
  },
] as const;

export type Chapter = (typeof CHAPTERS)[number];
```

- [ ] **Step 3.2: Lägg till `howItWorks` i images.ts**

I `src/lib/images.ts`, lägg till följande keys inne i `IMAGES`-objektet, precis efter `productDimensions`-raden:

```ts
  // Operativprincip / how it works page
  howItWorks: {
    ch01primary: "/images/how-it-works/01-installation-rulle.png",
    ch01secondary: "/images/how-it-works/02-installation-reset.png",
    ch02primary: "/images/how-it-works/03-anvandning-miljo.png",
    ch02secondary: "/images/how-it-works/04-anvandning-panel.png",
    ch03primary: "/images/how-it-works/05-forsegling-svets.png",
    ch03secondary: "/images/how-it-works/06-forsegling-matning.png",
    ch04primary: "/images/how-it-works/07-tomning-lada.png",
    ch04secondary: "/images/how-it-works/08-tomning-sopor.png",
  },
```

Obs: `CHAPTERS`-objektet är sanningskällan för komponenterna. `IMAGES.howItWorks` finns för konsistens med befintlig import-mönster (`IMAGES.productFront` osv.) och för framtida återanvändning (t.ex. hero-bild-fallback).

- [ ] **Step 3.3: Verifiera TypeScript-kompilering**

```bash
pnpm tsc --noEmit
```

Förväntat: inga fel. Om `STEPS` refereras någonstans utöver `HowItWorks.tsx` (som vi refaktoriserar senare) så kommer TS flagga det - i så fall hitta andra ställen och tänk på dem i nästa task.

Förväntade "fel" just nu: `src/components/sections/HowItWorks.tsx` använder `STEPS` som vi tagit bort. Det är väntat - vi fixar den filen i Task 8. Ignorera just den varningen.

- [ ] **Step 3.4: Commit data**

```bash
git add src/lib/constants.ts src/lib/images.ts
git commit -m "feat: add CHAPTERS dataset for operativprincip page

Full Swedish copy for all 4 chapters plus image paths. Removes
STEPS constant (only used by HowItWorks which is refactored
in a later commit to use CHAPTERS)."
```

---

## Task 4: Chapter Component

**Files:**
- Create: `src/components/sections/operating-principle/Chapter.tsx`

- [ ] **Step 4.1: Skapa Chapter-komponenten**

Skapa fil `/Users/dpr/Code/Projekt/nordlet/src/components/sections/operating-principle/Chapter.tsx`:

```tsx
"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Chapter as ChapterData } from "@/lib/constants";

type Props = {
  chapter: ChapterData;
  index: number;
};

export function Chapter({ chapter, index }: Props) {
  const reverse = index % 2 === 1; // växlar sida varje kapitel
  return (
    <section
      id={chapter.slug}
      className={index % 2 === 0 ? "py-20 sm:py-28" : "py-20 sm:py-28 bg-bg-alt"}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Text-kolumn */}
          <AnimateOnScroll
            className={`lg:col-span-5 ${reverse ? "lg:col-start-8" : ""}`}
          >
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Kapitel {chapter.number}
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              {chapter.title}
            </h2>
            <p className="mt-5 text-xl text-text leading-snug font-medium">
              {chapter.lead}
            </p>
            <p className="mt-5 text-text-muted leading-relaxed text-base sm:text-lg">
              {chapter.body}
            </p>
            <p className="mt-8 pt-6 border-t border-border text-sm text-text-muted">
              <span className="block text-xs uppercase tracking-widest text-accent font-semibold mb-2">
                I siffror
              </span>
              {chapter.stat}
            </p>
          </AnimateOnScroll>

          {/* Bild-kolumn */}
          <AnimateOnScroll
            delay={0.12}
            className={`lg:col-span-7 ${reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div className="grid gap-4 sm:grid-cols-5">
              {/* Primär bild 4:5 */}
              <div className="relative sm:col-span-3 aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface">
                <Image
                  src={chapter.images.primary}
                  alt={chapter.images.primaryAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 35vw"
                />
              </div>
              {/* Sekundär bild 1:1 */}
              <div className="relative sm:col-span-2 aspect-square overflow-hidden rounded-3xl border border-border bg-surface sm:mt-16">
                <Image
                  src={chapter.images.secondary}
                  alt={chapter.images.secondaryAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 25vw"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 4.2: Verifiera TS-kompilering**

```bash
pnpm tsc --noEmit 2>&1 | grep -v "STEPS" | grep -v HowItWorks
```

Förväntat: inga fel från nya filen. (STEPS/HowItWorks-felen ignoreras - de fixas i Task 8.)

- [ ] **Step 4.3: Commit**

```bash
git add src/components/sections/operating-principle/Chapter.tsx
git commit -m "feat: add Chapter component for operativprincip page"
```

---

## Task 5: OperatingHero Component

**Files:**
- Create: `src/components/sections/operating-principle/OperatingHero.tsx`

- [ ] **Step 5.1: Skapa OperatingHero-komponenten**

Skapa fil `/Users/dpr/Code/Projekt/nordlet/src/components/sections/operating-principle/OperatingHero.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function OperatingHero() {
  return (
    <section className="relative bg-primary-dark overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Subtil ljuseffekt uppe till vänster */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />
      </div>
      <Container className="relative">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-md sm:text-xs"
          >
            Så fungerar det
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Från rullen i kartongen till påsen i hushållssoporna.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 sm:text-xl"
          >
            Frihetstoa ersätter kassettanken med en vattenlös lösning som sköter
            sig själv. Här är fyra kapitel som förklarar exakt vad som händer
            från det att du packar upp kartongen till det att du slänger den
            sista påsen hemma i köket.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 5.2: Commit**

```bash
git add src/components/sections/operating-principle/OperatingHero.tsx
git commit -m "feat: add OperatingHero component"
```

---

## Task 6: OperatingCTA Component

**Files:**
- Create: `src/components/sections/operating-principle/OperatingCTA.tsx`

- [ ] **Step 6.1: Skapa OperatingCTA-komponenten**

Skapa fil `/Users/dpr/Code/Projekt/nordlet/src/components/sections/operating-principle/OperatingCTA.tsx`:

```tsx
"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SITE } from "@/lib/constants";
import { Phone } from "lucide-react";

export function OperatingCTA() {
  return (
    <section className="bg-primary-dark py-20 sm:py-28 text-white">
      <Container>
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent-light font-semibold text-sm tracking-widest uppercase mb-4">
              Hela operativprincipen
            </p>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10">
              Fyra steg som tillsammans ersätter kassettank, tömningsstation,
              svartvattenslang och sanitetsvätskor med en rullfolie och ett
              knapptryck.
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Redo att resa friare?
            </h2>
            <p className="mt-4 text-white/70 text-base sm:text-lg">
              Fri leverans i Sverige. 30 dagars öppet köp. Svensk support.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/#bestall" size="large">
                Beställ Frihetstoa
              </Button>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-accent-light transition-colors py-3"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                <Phone size={18} />
                {SITE.phone}
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

- [ ] **Step 6.2: Commit**

```bash
git add src/components/sections/operating-principle/OperatingCTA.tsx
git commit -m "feat: add OperatingCTA component"
```

---

## Task 7: /sa-fungerar-det Route + Metadata

**Files:**
- Create: `src/app/sa-fungerar-det/layout.tsx`
- Create: `src/app/sa-fungerar-det/page.tsx`

- [ ] **Step 7.1: Skapa layout.tsx med metadata**

Skapa fil `/Users/dpr/Code/Projekt/nordlet/src/app/sa-fungerar-det/layout.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Så fungerar Frihetstoa | Vattenlös toalett utan kassettank",
  description:
    "Frihetstoa förklarad i fyra kapitel. Från installation till värmeförsegling och tömning i hushållssoporna. Så ersätts kassettanken med en rullfolie och ett knapptryck.",
  openGraph: {
    title: "Så fungerar Frihetstoa",
    description:
      "Fyra kapitel om hur den vattenlösa toaletten ersätter kassettank och tömningsstation.",
    locale: "sv_SE",
    type: "article",
  },
};

export default function SaFungerarDetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
```

- [ ] **Step 7.2: Skapa page.tsx**

Skapa fil `/Users/dpr/Code/Projekt/nordlet/src/app/sa-fungerar-det/page.tsx`:

```tsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OperatingHero } from "@/components/sections/operating-principle/OperatingHero";
import { Chapter } from "@/components/sections/operating-principle/Chapter";
import { OperatingCTA } from "@/components/sections/operating-principle/OperatingCTA";
import { CHAPTERS } from "@/lib/constants";

export default function SaFungerarDetPage() {
  return (
    <>
      <Header />
      <main>
        <OperatingHero />
        {CHAPTERS.map((chapter, index) => (
          <Chapter key={chapter.slug} chapter={chapter} index={index} />
        ))}
        <OperatingCTA />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 7.3: Dev-server-verifiering**

```bash
pnpm dev
```

Öppna `http://localhost:3000/sa-fungerar-det`. Checklista:
- [ ] Hero visar "Så fungerar det"-eyebrow + stor serif-rubrik "Från rullen..." + ingress
- [ ] 4 kapitel under hero: varannan vänster-höger-bildkolumn
- [ ] Varje kapitel visar: kapitelnummer (01-04), rubrik, lead, brödtext, siffra-block, primär + sekundär bild
- [ ] Kapitel 3 (Förseglingen) visar cutaway-illustrationer (visuellt olika stil från foto-bilderna i kapitel 1, 2, 4)
- [ ] CTA-sektionen längst ner: rubrik "Redo att resa friare?", primär knapp + telefon med `<Phone>`-ikon (inte emoji)
- [ ] Header finns i toppen med transparent-till-scrollad-glass-övergång
- [ ] Footer syns längst ner
- [ ] Inga console-errors (`F12 → Console`)
- [ ] Mobile-vyn (DevTools → responsive, 390x844) stackar ren

Stoppa dev-servern (Ctrl+C).

- [ ] **Step 7.4: Screenshot-verifiering (live-reference)**

Från projekt-roten, kör `pnpm dev` i en terminal och i en annan:

```bash
cd /tmp/pw-audit
node scroll-screenshot.mjs http://localhost:3000/sa-fungerar-det /tmp/sa-fungerar-det-desktop.png 1440 900
node scroll-screenshot.mjs http://localhost:3000/sa-fungerar-det /tmp/sa-fungerar-det-mobile.png 390 844
```

Öppna båda i Preview och verifiera att allt renderar.

- [ ] **Step 7.5: Commit sidan**

```bash
git add src/app/sa-fungerar-det/
git commit -m "feat: add /sa-fungerar-det operativprincip page

Hero + 4 chapters + CTA. Reads from CHAPTERS constant.
Own metadata (title, description, OG)."
```

---

## Task 8: HowItWorks Teaser Refactor

**Files:**
- Modify: `src/components/sections/HowItWorks.tsx` (helt omskriven)

**Rolls in design-audit findings #1 (brand-fel i rubrik) och #5 (AI-slop 3-kol-grid).**

- [ ] **Step 8.1: Ersätt HowItWorks med teaser-variant**

Ersätt hela innehållet i `/Users/dpr/Code/Projekt/nordlet/src/components/sections/HowItWorks.tsx` med:

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CHAPTERS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="sa-fungerar-det" className="py-20 sm:py-28">
      <Container>
        <AnimateOnScroll>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Så fungerar det
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-text"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Så fungerar Frihetstoa
            </h2>
            <p className="mt-4 text-text-muted text-lg">
              Från rullen i kartongen till påsen i hushållssoporna. Fyra
              kapitel.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {CHAPTERS.map((chapter, i) => (
            <AnimateOnScroll key={chapter.slug} delay={i * 0.1}>
              <Link
                href={`/sa-fungerar-det#${chapter.slug}`}
                className="group block h-full overflow-hidden rounded-3xl border border-border bg-surface transition-all hover:border-accent/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-bg-alt">
                  <Image
                    src={chapter.images.primary}
                    alt={chapter.images.primaryAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Kapitel {chapter.number}
                  </p>
                  <h3 className="mt-2 text-xl text-text leading-snug">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {chapter.lead}
                  </p>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.35}>
          <div className="mt-12 text-center">
            <Link
              href="/sa-fungerar-det"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:bg-accent/5"
            >
              Läs hela historien
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

- [ ] **Step 8.2: Verifiera att inga andra filer refererar till gamla STEPS**

```bash
grep -rn "STEPS\b" src/ 2>&1
```

Förväntat: inga träffar. (Om det finns en kvarvarande, ta bort/uppdatera den också.)

- [ ] **Step 8.3: TS-kompilering utan fel**

```bash
pnpm tsc --noEmit
```

Förväntat: **exit 0, inga fel**. Alla tidigare varningar om STEPS ska nu vara borta.

- [ ] **Step 8.4: Dev-server-verifiering av landing-sida**

```bash
pnpm dev
```

Öppna `http://localhost:3000`. Checklista:
- [ ] Sektionen "Så fungerar det" har rubrik **"Så fungerar Frihetstoa"** (inte längre "NordLet")
- [ ] Fyra kort i rad: `Kapitel 01 Klar att använda på fem minuter`, `02 Precis som hemma...`, `03 Det tysta jobbet...`, `04 Från husbilen...`
- [ ] Varje kort har bild (primär från respektive kapitel), kapitelnummer, titel, lead
- [ ] Hover på kort: kant mot accent, bild skalar lite, skugga växer
- [ ] CTA-knapp "Läs hela historien →" under korten
- [ ] Klick på kort: navigerar till `/sa-fungerar-det#installation` (eller respektive slug), scrollar till rätt kapitel
- [ ] Klick på "Läs hela historien": navigerar till `/sa-fungerar-det` top
- [ ] Mobile (390x844): 4 kort stackar vertikalt eller 2x2, läsligt

Stoppa dev-servern.

- [ ] **Step 8.5: Commit teaser-refaktor**

```bash
git add src/components/sections/HowItWorks.tsx
git commit -m "refactor: replace HowItWorks with 4-chapter teaser

Resolves design-audit FINDING-001 (wrong brand name 'NordLet' in
heading, now 'Frihetstoa') and FINDING-004 (AI-slop 3-column number-
in-circle grid replaced with editorial 4-chapter image cards linking
to /sa-fungerar-det)."
```

---

## Task 9: Final Verification

- [ ] **Step 9.1: Full production build**

```bash
pnpm build
```

Förväntat: **exit 0**. Bygget ska slutföras utan fel. Next.js listar rutter inklusive:
- `/` (landing)
- `/sa-fungerar-det` (ny)

Om det saknas i listan, kontrollera att `src/app/sa-fungerar-det/page.tsx` finns och exporterar en default function.

- [ ] **Step 9.2: Kör production-server och slutverifiera**

```bash
pnpm start
```

Öppna i två tabbar:
- `http://localhost:3000` - verifiera att teaser-sektionen "Så fungerar Frihetstoa" visas med 4 bilder + "Läs hela historien"-CTA
- `http://localhost:3000/sa-fungerar-det` - verifiera att hero + 4 kapitel + CTA visas

Klicka igenom:
- [ ] Teaser-kort 1 → scrollar till `#installation` på sidan
- [ ] Teaser-kort 3 → scrollar till `#forseglingen` på sidan
- [ ] "Läs hela historien" → tar till sidans top
- [ ] På sidans botten, "Beställ Frihetstoa"-CTA → går till `/#bestall` (landing-sidan)
- [ ] Telefon-länken har `<Phone>`-ikon (inte 📞-emoji)

Inspektera med DevTools-Network:
- [ ] Alla 8 bilder laddas med 200-status
- [ ] Inga 404

Inspektera Console:
- [ ] Inga runtime-errors

Stoppa server (Ctrl+C).

- [ ] **Step 9.3: Playwright-baseline-screenshots för framtida jämförelse**

```bash
cd /tmp/pw-audit
node scroll-screenshot.mjs https://nordlet.vercel.app /tmp/before-deploy-landing.png 1440 900
# ^ sista live-versionen (innan vi deployar). Sparas som before-shot.
```

- [ ] **Step 9.4: Acceptance-check mot spec**

Läs `docs/superpowers/specs/2026-04-16-frihetstoa-operativprincip-design.md` sektion "6. Accept-kriterier" och bocka av:

- [ ] Ingen emdash i någon user-facing copy
- [ ] `HowItWorks.tsx` har rubrik "Så fungerar Frihetstoa"
- [ ] Alla 8 bilder ligger i `/public/images/how-it-works/` med specens exakta filnamn
- [ ] `/sa-fungerar-det` laddar fristående och CTA fungerar
- [ ] Landing-teaser länkar till `/sa-fungerar-det`
- [ ] Texten läst bredvid Clesanas motsvarande sida känns som annan röst (ingen ordagrann kopiering)
- [ ] `pnpm build` går igenom

Om något brister: gå tillbaka till motsvarande Task och justera.

- [ ] **Step 9.5: Slutcommit om något blev uppdaterat i verifieringen**

Om steg 9.1-9.4 avslöjade en miss och du gjort ändringar:
```bash
git add -A
git commit -m "fix: address acceptance-check findings"
```

Annars: inget att committa.

- [ ] **Step 9.6: Deploy (om användaren vill)**

Fråga användaren: "Vill du att jag deployar detta till Vercel nu?"

Om JA:
```bash
vercel --prod
```

Och verifiera med:
```bash
sleep 10 && curl -sI https://nordlet.vercel.app/sa-fungerar-det | head -3
```
Förväntat: 200 OK.

Om NEJ: stanna, rapportera klart.

---

## Rollback

Om något katastrof-fel uppstår:
```bash
git log --oneline | head -20     # hitta commit FÖRE Task 0
git reset --hard <sha>           # t.ex. e185c80 (spec-commit)
```

Alla genererade bilder (`public/images/how-it-works/*.png`) är dyra att återskapa - radera inte katalogen i onödan.

---

## Beroenden mellan tasks

```
Task 0 (prep)        - oberoende, kan köras när som helst
Task 1 (script)      - oberoende  
Task 2 (bilder)      - beror på Task 1
Task 3 (data)        - oberoende av 0-2 (fungerar utan bilder tills de visas)
Task 4 (Chapter)     - beror på Task 3
Task 5 (Hero)        - oberoende
Task 6 (CTA)         - oberoende
Task 7 (route)       - beror på Task 4, 5, 6
Task 8 (teaser)      - beror på Task 3 (bilder behövs för teaser-kort)
Task 9 (verify)      - beror på alla tidigare
```

Rekommenderad ordning vid linjär exekvering: 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9.
