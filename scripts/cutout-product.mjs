// Klipper ut den vita studio-bakgrunden ur ett produktfoto och sparar en
// PNG med transparent bakgrund. Används för hero-scenen, där produkten står
// direkt på den mörka tealen utan vitt kort.
//
// Steg:
//  1. Skala upp källan (Lanczos) till UPSCALE px. Originalfotot är bara 800px,
//     vilket blir suddigt när hero-bilden visas stort på en retina-skärm
//     (~540px CSS = 1080 device-px). Produkten är blank slät plast utan textur,
//     så uppskalning ger inga artefakter – men en skarp silhuett på retina.
//  2. Flood-fill från de fyra hörnen över sammanhängande nära-vita pixlar.
//     Produktens egna vita ytor ligger inneslutna och nås aldrig av fyllningen.
//     Tröskeln 250 utnyttjar gapet mellan bakgrunden (255) och produkten (≤245).
//  3. Anti-aliasa bara silhuetten (lätt Gauss på alfa), trimma och centrera.
//
// Kör:  node scripts/cutout-product.mjs <in.png> <ut.png>
// Standard: hero-bilden a73eb…png  ->  frihetstoan-hero-v2.png

import { PNG } from "pngjs";
import sharp from "sharp";

const SRC =
  process.argv[2] ??
  "public/images/products/a73eb482e69db1413051eec47614edf2.png";
const OUT =
  process.argv[3] ?? "public/images/products/frihetstoan-hero-v3.png";
const THRESH = 250;
const UPSCALE = 2000;

const upscaled = await sharp(SRC)
  .resize(UPSCALE, UPSCALE, { kernel: "lanczos3", fit: "fill" })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const png = new PNG({ width: upscaled.info.width, height: upscaled.info.height });
upscaled.data.copy(png.data);
const { width: w, height: h, data } = png;
const idx = (x, y) => (y * w + x) * 4;
const isBg = (x, y) => {
  const i = idx(x, y);
  return data[i] >= THRESH && data[i + 1] >= THRESH && data[i + 2] >= THRESH;
};

// Flood-fill: bara bakgrund som hänger ihop med ett hörn tas bort.
const visited = new Uint8Array(w * h);
const stack = [];
for (const [sx, sy] of [
  [0, 0],
  [w - 1, 0],
  [0, h - 1],
  [w - 1, h - 1],
]) {
  if (isBg(sx, sy)) {
    stack.push(sx, sy);
    visited[sy * w + sx] = 1;
  }
}
while (stack.length) {
  const y = stack.pop();
  const x = stack.pop();
  data[idx(x, y) + 3] = 0;
  for (const [nx, ny] of [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ]) {
    if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
    const p = ny * w + nx;
    if (!visited[p] && isBg(nx, ny)) {
      visited[p] = 1;
      stack.push(nx, ny);
    }
  }
}

// Anti-aliasing av kanten – INTE av ytan.
// Floodfillen ger en binär mask (0/255). Bakgrunden är ren vit (255) och även
// produktens ljusaste ytor ligger under ~245, så den verkliga silhuetten är
// redan skarp i fotot. Felet att undvika: att tona ned solid produkt bara för
// att den glansiga cylinderns bortvända sida är ljusgrå (~240) – det gjorde
// hela högersidan halvtransparent och suddig.
//
// Därför rör vi bara gränspixlarna: en lätt 3x3 Gauss på alfakanalen. Helt
// inre ytor (alla grannar 255) förblir 255, bakgrund (alla grannar 0) förblir
// 0 – bara själva kanten får mjukhet. Resultat: opak produkt, len silhuett.
const aBin = new Uint8Array(w * h);
for (let p = 0; p < w * h; p++) aBin[p] = data[p * 4 + 3];
const kernel = [1, 2, 1, 2, 4, 2, 1, 2, 1];
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    let sum = 0,
      wsum = 0,
      k = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++, k++) {
        const nx = x + dx,
          ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
        sum += aBin[ny * w + nx] * kernel[k];
        wsum += kernel[k];
      }
    }
    data[(y * w + x) * 4 + 3] = Math.round(sum / wsum);
  }
}

// Trimma till produktens verkliga ram och centrera den på en kvadratisk duk
// med jämn marginal. Originalfotot har produkten lågt och till vänster, vilket
// får den att se beskuren ut i layouten – det här centrerar den på riktigt.
let minX = w,
  minY = h,
  maxX = -1,
  maxY = -1;
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    if (data[(y * w + x) * 4 + 3] > 8) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}
const bw = maxX - minX + 1;
const bh = maxY - minY + 1;
const side = Math.round(Math.max(bw, bh) * 1.16); // ~8% luft runt om
const out = new PNG({ width: side, height: side, fill: true });
out.data.fill(0); // helt transparent duk
const offX = Math.round((side - bw) / 2);
const offY = Math.round((side - bh) / 2);
for (let y = 0; y < bh; y++) {
  for (let x = 0; x < bw; x++) {
    const sp = ((minY + y) * w + (minX + x)) * 4;
    const dp = ((offY + y) * side + (offX + x)) * 4;
    for (let c = 0; c < 4; c++) out.data[dp + c] = data[sp + c];
  }
}

// Skala ned till slutstorlek (supersampling = ren kant) och spara som PNG.
// Bilden serveras lossless (unoptimized i <Image>) eftersom en hård urklippskant
// ringar i lossy WebP – det var strecken i bild #4.
//
// Två fällor som ger en ljus kantlinje, båda hanterade här:
//  1. Förmultiplicera alfa FÖRE nedskalning. De urklippta pixlarna har kvar vit
//     RGB (255) under alpha=0; utan förmultiplicering blöder det vita in i
//     kanten = ljus frans. Förmultiplicering nollar den dolda RGB:n först.
//  2. Mitchell-kärnan (inga negativa lober) istället för Lanczos → ingen
//     overshoot/ringning vid den hårda alfa-kanten.
const FINAL = 1400;
const pm = Buffer.from(out.data);
for (let i = 0; i < pm.length; i += 4) {
  const a = pm[i + 3] / 255;
  pm[i] = Math.round(pm[i] * a);
  pm[i + 1] = Math.round(pm[i + 1] * a);
  pm[i + 2] = Math.round(pm[i + 2] * a);
}
const { data: rd } = await sharp(pm, {
  raw: { width: side, height: side, channels: 4 },
})
  .resize(FINAL, FINAL, { kernel: "mitchell", fit: "fill" })
  .raw()
  .toBuffer({ resolveWithObject: true });
const px = Buffer.from(rd);
for (let i = 0; i < px.length; i += 4) {
  const a = px[i + 3];
  if (a === 0) {
    px[i] = px[i + 1] = px[i + 2] = 0;
    continue;
  }
  const f = 255 / a;
  px[i] = Math.min(255, Math.round(px[i] * f));
  px[i + 1] = Math.min(255, Math.round(px[i + 1] * f));
  px[i + 2] = Math.min(255, Math.round(px[i + 2] * f));
}
await sharp(px, { raw: { width: FINAL, height: FINAL, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(OUT);
console.log(
  `Urklipp klart: produkt ${bw}x${bh}, centrerad ${side}px -> ${FINAL}px (förmultiplicerad) -> ${OUT}`
);
