# Frihetstoa Operativprincip - Designspec

**Datum:** 2026-04-16
**Status:** Ej implementerad
**Syfte:** Ge Frihetstoa en egen "så fungerar det"-story i fyra kapitel, inspirerad av formatet på clesana.com/en/operating-principle men med eget språk, eget bildspråk och ingen imitation av Clesanas texter.

## Inriktning

Tre val gjorda innan spec:
1. **Placering** - C: egen sida `/sa-fungerar-det` + kompakt teaser inline på landing
2. **Bildstil** - hybrid: studio-/kontextrenders för 6 yttre bilder, teknisk cutaway-illustration för 2 inre
3. **Omfattning** - 4 kapitel, 2 bilder per kapitel, totalt 8 bilder

## Varumärkesregler (från projekt-CLAUDE.md)

- Aldrig emdash. Tankstreck eller punkt.
- Skandinavisk, jordnära ton. Inga engelska marknadsord. Inga superlativ utan täckning.
- DM Serif för rubriker (`var(--font-dm-serif)`), sans-serif för brödtext.
- Talar till husbilsägare. Inte "kunden".
- Faktastat per kapitel, ingen floskel.

## 1. Arkitektur

### Ny sida

```
/src/app/sa-fungerar-det/
  page.tsx                  # Rendrar Hero + 4 Chapter + CTA + Footer
  layout.tsx                # Egen <title> och meta description
```

### Komponenter

```
/src/components/sections/operating-principle/
  OperatingHero.tsx         # Sidans hero: rubrik, ingress, scroll-indikator
  Chapter.tsx               # Återanvändbar: nummer, titel, brödtext, stat, 2 bilder
  OperatingCTA.tsx          # Bottenblock: "Beställ Frihetstoa" + telefonnummer
```

### Landing-sidans teaser

Byter ut nuvarande `HowItWorks.tsx` innehåll från 3 generiska steg till 4 kompakta kapitel-kort. Ny headline: `"Så fungerar Frihetstoa"` (ersätter `"Så fungerar NordLet"` - nuvarande rubrik är felaktig, produkten heter Frihetstoa).

Varje kort: kapitelnummer, titel, en bild (den starkaste per kapitel), 1-2 mening kort. Hela blocket slutar med en `"Läs hela historien"`-länk till `/sa-fungerar-det`.

### Data

Ny konstant i `/src/lib/constants.ts`:

```ts
export const CHAPTERS = [
  { number: "01", slug: "installation", title: "...", lead: "...", body: "...", stat: "...", images: [...] },
  ...
];
```

Gamla `STEPS`-konstanten tas bort (används bara av `HowItWorks.tsx`).

### Bilder

```
/public/images/how-it-works/
  01-installation-rulle.png
  02-installation-reset.png
  03-anvandning-miljo.png
  04-anvandning-panel.png
  05-forsegling-svets.png
  06-forsegling-matning.png
  07-tomning-lada.png
  08-tomning-sopor.png
```

Lägg till i `/src/lib/images.ts` under `IMAGES.howItWorks.*`.

### Generator-script

```
/scripts/generate-operativprincip.mjs
```

Läser `GEMINI_API_KEY` från `process.env` (aldrig CLI-argument). Kör `@giorgioliapakis/nanobanana generate` 8 gånger mot `public/images/how-it-works/`. Prompts inbäddade i scriptet som array.

`.env.example` uppdateras med `GEMINI_API_KEY=` om raden saknas, så `pnpm sync-env` hittar den.

## 2. Copy - sidan `/sa-fungerar-det`

### Hero

**Eyebrow:** `SÅ FUNGERAR DET`
**Rubrik:** `Från rullen i kartongen till påsen i hushållssoporna.`
**Ingress:**
> Frihetstoa ersätter kassettanken med en vattenlös lösning som sköter sig själv. Här är fyra kapitel som förklarar exakt vad som händer från det att du packar upp kartongen till det att du slänger den sista påsen hemma i köket.

### Kapitel 1 - Installation

**Nummer:** `01`
**Titel:** `Klar att använda på fem minuter`
**Lead:** `Ingen fast installation. Ingen slang. Ingen tömningsstation att ansluta till.`

**Brödtext:**
> Lyft av överdelen, sätt folierullen på plats i toalettens bas och sätt tillbaka locket. Tryck på Reset. Frihetstoa kalibrerar sig själv och är redo. Första gången tar det runt fem minuter. Efter det byter du rullen ungefär en gång i veckan när LED-lampan visar att det är dags.

**Stat:** `30 användningar per rulle - ungefär en resevecka för två personer.`

**Bilder:**
- `01-installation-rulle.png` (primär, landscape)
- `02-installation-reset.png` (sekundär, kvadrat, närbild)

### Kapitel 2 - Användning

**Nummer:** `02`
**Titel:** `Precis som hemma. Bara utan vatten.`
**Lead:** `Sätt dig, gör ditt, stäng locket, tryck på knappen.`

**Brödtext:**
> Sitsen är i standardhöjd och känns som en vanlig toalett. När du är klar stänger du locket och väljer litet eller stort program på kontrollpanelen. Du behöver inte hälla i något toamedel, inte mäta ut någon vätska och inte spola. Frihetstoa sköter resten själv.

**Stat:** `Dubbelt läge för flytande och fast. Noll kemikalier.`

**Bilder:**
- `03-anvandning-miljo.png` (primär, landscape - toa i husbilsinteriör)
- `04-anvandning-panel.png` (sekundär, kvadrat - kontrollpanel-närbild)

### Kapitel 3 - Förseglingen (det "inre" kapitlet, cutaway-diagram)

**Nummer:** `03`
**Titel:** `Det tysta jobbet under locket`
**Lead:** `Det här är den del som gör att du aldrig behöver tömma en kassettank igen.`

**Brödtext:**
> När du tryckt på knappen drar Frihetstoa ihop folien runt innehållet och värmeförseglar den till en lufttät påse. Varje besök får sin egen förslutning. När påsen är förseglad matas ny, ren folie automatiskt fram och skålen är klar för nästa gång. Ingen kemikalie, ingen doft som väntar på dig i skåpet, ingen mekanik som du själv behöver hantera.

**Stat:** `Lufttät försegling - även sommartid när värmen står still ovanför husbilen.`

**Bilder:**
- `05-forsegling-svets.png` (primär, landscape - cutaway-illustration av svetsningen)
- `06-forsegling-matning.png` (sekundär, kvadrat - cutaway av påsen som mataren fram)

### Kapitel 4 - Tömning

**Nummer:** `04`
**Titel:** `Från husbilen till hushållssoporna`
**Lead:** `Inga tömningsstationer. Inga söndagsköer. Inga sanitetsvätskor.`

**Brödtext:**
> När uppsamlingslådan är full tänds LED-indikatorn på kontrollpanelen. Dra ut lådan i nederdelen. Eftersom varje påse är förseglad för sig finns ingen lukt och ingen risk för spill. Du lägger dem i vanliga hushållssoporna - vid nästa rastplats, på campingen eller hemma i köket när resan är slut.

**Stat:** `Påsarna är biologiskt nedbrytbara och går i det vanliga restavfallet.`

**Bilder:**
- `07-tomning-lada.png` (primär, landscape - lådan utdragen med synliga påsar)
- `08-tomning-sopor.png` (sekundär, kvadrat - påse i soptunna)

### Bottentext innan CTA

> Det är hela operativprincipen. Fyra steg som tillsammans ersätter kassettank, tömningsstation, svartvattenslang och sanitetsvätskor med en rullfolie och ett knapptryck.

### CTA-block

**Rubrik:** `Redo att resa friare?`
**Brödtext:** `Fri leverans i Sverige. 30 dagars öppet köp. Svensk support.`
**Primär knapp:** `Beställ Frihetstoa` (till `#bestall` eller `/#bestall`)
**Sekundär:** Telefonnummer från `SITE.phone`

## 3. Copy - landing-teaser (ersätter `HowItWorks`)

**Eyebrow:** `SÅ FUNGERAR DET`
**Rubrik:** `Så fungerar Frihetstoa`
**Ingress (valfri):** `Från rullen i kartongen till påsen i hushållssoporna. Fyra kapitel.`

**Fyra kort** (använder samma CHAPTERS-data men bara `number`, `title`, `lead`, första bilden):

1. `01 Installation` - `Klar att använda på fem minuter` - bild: `01-installation-rulle.png`
2. `02 Användning` - `Precis som hemma. Bara utan vatten.` - bild: `03-anvandning-miljo.png`
3. `03 Förseglingen` - `Det tysta jobbet under locket` - bild: `05-forsegling-svets.png`
4. `04 Tömning` - `Från husbilen till hushållssoporna` - bild: `07-tomning-lada.png`

**CTA efter korten:** `Läs hela historien →` (länk till `/sa-fungerar-det`)

## 4. Nanobanana-prompts

Alla prompts skrivs på engelska (nanobanana/Gemini presterar bättre så) men sceneriet beskriver skandinavisk miljö. Formatstandard: 4:5 porträtt för "primära" landscape-bilder på sidan (känns mer redaktionellt än 16:9 för denna typ av innehåll), 1:1 för sekundära närbilder. Prompten körs med `--aspect 4:5` eller `--aspect 1:1` i scriptet.

**Gemensam stilregel för bild 1-4, 7-8 (studio/kontext-renders):**
> Premium Scandinavian product photography, soft diffused natural light, muted nordic color palette (bone white, warm grey, soft sand, subtle terracotta accent), matte finish surfaces, shallow depth of field, photorealistic, 4K, editorial quality. No visible text, no logos, no brand markings.

**Gemensam stilregel för bild 5-6 (cutaway):**
> Technical isometric cutaway illustration, clean vector line art with subtle gradient shading, muted nordic color palette (bone white housing, soft sand for film, warm terracotta accent on heating element), semi-realistic rendering, editorial magazine style, off-white seamless background. No labels, no text, no arrows, no call-outs.

---

**`01-installation-rulle.png`** (4:5)
> A compact portable dry toilet with matte white polymer shell and rounded edges, seen from a three-quarter angle. The top lid is lifted off and a hand with a linen shirt cuff is placing a circular film cassette into the cassette bay. Off-white seamless background with subtle cool-grey gradient. Soft window light from upper left. [STIL-A]

**`02-installation-reset.png`** (1:1)
> Close-up of the control panel on a matte white compact dry toilet. A small, minimal reset button with a subtle circular arrow icon is illuminated by a soft cool LED. A single finger is about to press it. Shallow depth of field, soft studio light, off-white background. [STIL-A]

**`03-anvandning-miljo.png`** (4:5)
> A matte white compact dry toilet standing on light oak wooden floor inside a cozy Scandinavian motorhome interior. Soft morning light coming through a side window, linen curtains slightly drawn, warm birch wood panelling in the background, a subtle fjord and pine forest view through the window. No people visible. [STIL-A]

**`04-anvandning-panel.png`** (1:1)
> Close-up three-quarter angle of a white dry toilet's control panel showing two illuminated buttons side by side, one marked with a small droplet icon and one with a larger filled-circle icon. Soft warm LED glow from the buttons, matte white polymer surface with fine brushed texture. Shallow depth of field, off-white background. [STIL-A]

**`05-forsegling-svets.png`** (4:5)
> Technical isometric cutaway illustration of the interior of a compact dry toilet. The cross-section reveals a film bag being heat-sealed closed by a warm-glowing horizontal sealing bar near its top, the sealed bag hanging below into a collection compartment. The film runs from a circular cassette roll at the side down through the sealing mechanism. [STIL-B]

**`06-forsegling-matning.png`** (1:1)
> Technical isometric cutaway illustration of the interior of a compact dry toilet. The cross-section shows a fresh length of new film being automatically fed from a circular side-mounted cassette up into the seat opening, while a freshly sealed bag rests in the collection drawer at the bottom. Subtle motion indicator in warm terracotta shows the feed direction. [STIL-B]

**`07-tomning-lada.png`** (4:5)
> A matte white compact dry toilet seen from the front at a slight angle, with its lower collection drawer pulled fully out. Inside the drawer, several neatly sealed individual white film bags are stacked. Off-white seamless background with subtle cool-grey gradient. Soft studio lighting. [STIL-A]

**`08-tomning-sopor.png`** (1:1)
> A hand with a warm linen shirt cuff dropping a single neatly sealed white film bag into an ordinary kitchen waste bin with a dark charcoal grey liner. The bin stands next to a blonde oak kitchen counter in a Scandinavian home. Soft natural window light, muted palette. No visible brand markings on the bin or liner. [STIL-A]

## 5. Implementationsordning

1. **Generator-script** - skriv `scripts/generate-operativprincip.mjs` och kör. Inspektera alla 8 bilder. Vid miss: justera prompt och kör igen för den specifika bilden. Accept-kriterium: konsistent stil mellan 1-4+7-8, tydligt stilskifte vid 5-6, ingen text eller brand i någon bild.
2. **Data** - lägg till `CHAPTERS` i `constants.ts`, uppdatera `images.ts`.
3. **Ny sida** - `app/sa-fungerar-det/page.tsx` + `operating-principle/` komponenter.
4. **Ersätt `HowItWorks`** - refaktor till teaser-variant som läser `CHAPTERS`.
5. **Uppdatera Hero-länk** - `href="#sa-fungerar-det"` på landing-sidan pekar fortfarande på teaser-sektionen, det är OK. Ny sida är extra djupnivå via "Läs hela historien".
6. **Verifiering** - `pnpm dev`, scroll landing, klicka till `/sa-fungerar-det`, kontrollera mobile. Screenshot båda sidorna. Bygg: `pnpm build` ska gå igenom utan fel.

## 6. Accept-kriterier

- Ingen emdash i någon copy.
- `HowItWorks.tsx` använder `Så fungerar Frihetstoa` som rubrik (ej "NordLet").
- Alla 8 bilder ligger i `/public/images/how-it-works/` med exakt de filnamn som specen anger.
- `/sa-fungerar-det` laddar fristående och har fungerande CTA till `#bestall`.
- Landing-teasern länkar till `/sa-fungerar-det`.
- Inga Clesana-formuleringar ordagrant. Texten läst sida vid sida ska kännas som annan röst.
- `pnpm build` går igenom.

## 7. Lämnat utanför (YAGNI)

- Video eller animerad GIF. Statisk bildserie räcker som v1.
- Flerspråkig version (en-/no-variant).
- SEO-structured-data `HowTo` schema. Kan läggas till i separat spec när/om SEO-arbete prioriteras.
- Bildvarianter i flera storlekar. Next.js Image sköter responsive sizing.
