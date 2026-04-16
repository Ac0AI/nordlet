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
