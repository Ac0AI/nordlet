# NordLet Pro — Designsystem

Källa till sanning för sidans visuella språk. Avvikelser från det här är högre allvarlighetsgrad i en designgranskning.

## Princip
Lugnt, redaktionellt, skandinaviskt premium. Hellre en stark idé än många dekorativa element. Bryt symmetri och variera komposition – sidan ska läsa som ett företag, inte som en SaaS-mall.

## Färg (CSS-variabler i `globals.css`)
Använd ALLTID tokens, aldrig hårdkodad hex i komponenter.
- `--color-primary` #173847 (djup teal) · `--color-primary-dark` #0d2530
- `--color-accent` #b48a4a (mässing) · `--color-accent-light` #cfab74
- `--color-text` #202826 · `--color-text-muted` #596562 · `--color-text-light` #8a9490
- `--color-bg` #f6f5f0 · `--color-bg-alt` #eef1ec · `--color-bg-warm` #e7ebe6 · `--color-surface` #fbfaf6
- `--color-green` #4a7560 (positivt) · `--color-border` #d7ddd8
- **Inget rött i paletten.** "Nej/saknas" markeras neutralt (`bg-bg-alt` + `text-text-light`), inte rött.

## Typografi
- Rubriker: **DM Serif Display** via utility-klassen **`font-display`** (aldrig inline `style={{fontFamily}}`).
- Brödtext: **Inter** (via `body`).
- Skala: H1 `text-5xl→7xl`, sektions-H2 `text-3xl sm:text-4xl`, H3 `text-lg/xl`. Håll en ramp – introducera inte nya storlekar per sektion.

## Spacing
- Sektioner: `py-20 sm:py-28` (standard). Smalare band (Authority): `py-16 sm:py-20`.
- Sektionsintro-marginal: `mb-14` (eller `mb-16` på mörka helbredssektioner). Håll det till dessa.
- 4/8-skala för padding/gap. Inga magiska värden.

## Radie-hierarki (inte allt lika runt)
- Stora ytor/kort: `rounded-2xl` / `rounded-3xl`.
- Små element (ikon-chips, badges): `rounded-lg`.
- Knappar: `rounded-full`.

## Layoutmönster (anti-slop)
- **Redaktionella listor, inte ikon-i-cirkel-rutnät.** Funktioner/problem visas med en hårfin topplinje (`border-t`) + ikon + rubrik, vänsterställt. Ingen färgad cirkel bakom ikonen.
- **Variera kompositionen.** Centrera inte varje sektionsintro – väg av vänsterställda mot centrerade.
- **Inga låtsas-kort.** Hover-effekt bara på faktiskt klickbara element.
- Ikoner: lucide, `strokeWidth={1.75}`, i accent-färg. Aldrig emoji som UI.

## Rörelse
- En delad `AnimateOnScroll` (opacity + 30px, `once`), stagger `i*0.1`. Respekterar `prefers-reduced-motion`.
- Entré-fade + hover. Lägg purposeful rörelse bara när den förstärker hierarki.

## Tillgänglighet (krav)
- `:focus-visible` accent-ring globalt. Aldrig `outline:none` utan ersättning.
- Touch targets ≥ 44px. Brödtext ≥ 16px, kontrast ≥ 4.5:1.
- `prefers-reduced-motion` respekteras. ARIA på accordion/ikon-knappar.
