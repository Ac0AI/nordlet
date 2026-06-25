# Brief — Torrtoalett-jämförelse (värmeförsegling vs förbränning, mulltoa, separett)

- **Slug:** `torrtoalett-jamforelse-vilken-passar-din-stuga`
- **Type:** comparison
- **Primary keyword:** torrtoalett jämförelse / olika torrtoaletter
- **Secondary:** toalett utan avlopp (vilken typ), förbränningstoalett vs mulltoa, paketeringstoalett, värmeförseglande toalett, torrtoalett stuga
- **Audience:** stuga/fritidshus/kolonilott/off-grid-ägare (sekundärt husbil/båt) som väljer toalett-typ före köp.
- **Author:** Ludvig Eriksson. **Date:** 2026-06-24.

## Information-gain statement (the moat)

Den första **aktuella, neutrala svenska jämförelsen som tar med värmeförsegling/heat-seal som egen kategori** och som:
1. Reder ut den faktiska tekniska skillnaden mellan **mekanisk foliepaketering (Pacto, pedal, ingen värme)** och **värmeförsegling (NordLet, lufttät termoförslutning per besök)** — en distinktion ingen av de fem topprankade guiderna gör. Korrigerar den vanliga (och nu inaktuella) bilden att kategorin "bara har en modell".
2. Publicerar en **faktisk driftkostnad per besök** för värmeförsegling: **6,6–8,3 kr/besök** (förstahandssiffra från NordLets rullpriser — 249 kr/30 anv. till 995 kr/150 anv.). Ingen konkurrentartikel ger en kr-per-besök-siffra.
3. Ger en **äkta side-by-side-tabell över alla ~8 typer** (byggahus har typerna men ingen tabell; Testfakta har en tabell men med 2013 års priser).
4. Svarar källbelagt på **"var får de förseglade påsarna slängas?"** (restavfall, jämförbart med blöja — med kommun-caveat).

## Angle / thesis

"Det finns ingen 'bästa torrtoalett' — det finns den som passar din plats, ditt elläge och hur ofta du vill tömma. Här är en ärlig jämförelse av alla typer, inklusive den nyaste (värmeförsegling) som de flesta guider missar." Ludvig-röst, första person, ärlig om var värmeförsegling FÖRLORAR (löpande påskostnad, ingen näringsåtervinning).

## Honesty guardrails (do NOT violate)

- ❌ Säg INTE att Pacto är utgånget / "finns inte längre" — säljs nytt 2026 (~7 445 kr).
- ❌ Påstå INTE att NordLet är "enda heat-seal i världen" — Wrappon (Japan/USA) finns, ej i SE. Rätt framing: NordLet är en **värmeförseglande toalett som säljs i Sverige**; kategorin har mer än en modell numera.
- ❌ Påstå INTE "inga tillstånd behövs" — installation kan kräva anmälan/tillstånd till miljökontoret, **varierar per kommun**.
- ✅ Pås-i-soporna: framställ som **restavfall jämförbart med blöja** + caveat "kontrollera lokala avfallsföreskrifter". Säg INTE att de bulkhanteras som latrin (då gäller kommun-insamling).
- ✅ Flagga uppskattningar som ungefärliga ("ca", "uppskattat"): elkostnad/besök, strökostnad/besök, kemvätska/säsong, Pacto folie/besök.
- ✅ Priser som spann ("från … till"), inte exakta enskilda tal.
- ✅ Cinderella: elmodell kräver 230V (12V driver den ej); gasmodellen ("Freedom") går på gasol + 12V.

## Claim ledger (claim · source · tier · confidence)

| # | Claim | Source | Tier | Conf |
|---|---|---|---|---|
| 1 | NordLet driftkostnad 6,6–8,3 kr/besök (249 kr/30 anv; 995 kr/150 anv) | `src/lib/products.ts` (förstahands) | 1 first-party | verified |
| 2 | NordLet = värmeförsegling, lufttät påse/besök, batteri (USB/12V), CE, 30 anv/rulle | `src/lib/constants.ts`, sa-fungerar-det | 1 first-party | verified |
| 3 | Pacto säljs nytt i SE 2026 ~7 445 kr; spolfolie 355–375 kr/rulle; pedaldriven mekanisk wrap (ej värme) | vvsbutiken.se, badochtoaspecialisten.se, pacto.se/Danfo, Pacto-manual PDF | 2 retailer/brand | verified |
| 4 | Pacto-mekanik ≠ värmeförsegling; gamla elektriska Pacto utgången | Pacto-manual PDF; NordLet FAQ bekräftar distinktionen | 2 | verified |
| 5 | Förbränningstoalett ~20 000–43 000 kr (Sunwind 19 995 → Cinderella Freedom ~42 990) | Bygghemma, Pricerunner, Prisjakt, cinderellaeco | 2 | verified |
| 6 | Förbränning elmodell 2000W, 0,8–1,5 kWh/besök, kräver 230V (ej 12V); gasmodell gasol+12V; kräver frånluft | Testfakta, vvsbutiken spec-PDF, kohlbergs | 2 | verified |
| 7 | Förbränning påskostnad ~1,0–1,12 kr/besök; elkostnad/besök ~2,5–3,75 kr | retailers (påse); el = **estimate** (kWh verifierat, elpris antaget) | 2/3 | påse verified, el estimate |
| 8 | Mulltoa/förmultning ~3 500–22 900 kr (Biolan Simplett 3 499 → Naturum 22 925); passiv = ingen fläkt, aktiv = 12V | kompostcenter, Bygghemma, biolan.fi | 2 | verified (Biolan "Complett"-stavning) |
| 9 | Mulltoa strö ~149–179 kr/35L, 2–5 dl/anv → ~1,5 kr/besök | biolan.fi (förbrukning) + retailers (strö) | 2/3 | strö verified, kr/besök estimate |
| 10 | Separett (separerande) 5 790–9 495 kr; Weekend ingen el; Villa/Tiny 12V-fläkt + urinavlopp; påse 13,90–15,90 kr/fyllning | Bauhaus, Byggmax, Kohlbergs, separett.com | 2 | verified (Villa 9000 utgången → prisband ~7 250–7 995) |
| 11 | Kemtoa/kassett ~600–3 000 kr; vätska ~250–500 kr/säsong; kräver tömningsstation + kemikalier | Bauhaus, SeaSea, Pricerunner; vätska = estimate | 2/3 | pris verified, vätska estimate |
| 12 | Sealed påse = restavfall, jämförbart med blöja; latrin (bulk) = kommunalt ansvar, ej i soporna; **varierar per kommun** | Avfall Sverige, Sörmland Vatten, kommun-sorteringsguider | 2 authority | verified m. caveat |
| 13 | Torrtoa-installation kan kräva anmälan/tillstånd till miljökontor; varierar (Södertälje kräver, Göteborg/Huddinge ej) | HaV, Södertälje, Göteborg, Huddinge kommun | 1/2 gov | verified |
| 14 | Latrinkompostering kräver tillstånd/anmälan + invänta beslut (2 behållare, ≥25 m vattendrag, ≥5 m tomtgräns) | Södertälje, Nacka, Vaxholm faktablad | 1/2 gov | verified |
| 15 | Båt: svartvattenutsläpp förbjudet sedan 1 apr 2015, alla fritidsbåtar utom k-märkta, töm vid toatömningsstation | Transportstyrelsen, Havs- och vattenmyndigheten (verbatim) | 1 gov | verified (TSFS-nr & "före 1965" EJ bekräftat — utelämna) |
| 16 | Byggahus/Testfakta/Avloppsguiden kallar kategorin "förpack/paketeringstoalett"; guider beskriver den som att "bara en modell (Pacto) finns" | byggahus.se, testfakta.se, avloppsguiden.se (SERP-teardown) | 2 | verified verbatim |

## Entity-coverage map (must cover)

**Typer (alla ~8):** vattentoalett/WC (ram), **värmeförseglande/paketeringstoalett/förpackningstoalett (heat-seal)**, mekanisk foliepaketering (Pacto), **förbränningstoalett** (Cinderella Comfort/Freedom), **mulltoa/förmultningstoalett/komposterande** (Biolan, MullToa, Green Toilet), **separerande/urinseparerande** (Separett Villa/Tiny/Weekend), **kemtoa/kassett** (Porta Potti), frystoalett (Ekohytte), vakuumtoalett (kort).
**Jämförelse-dimensioner (tabellkolumner):** inköpspris · driftkostnad (kr/besök el. säsong) · el/ström · vatten · lukt/ventilation · tömning + var avfallet hamnar · plats/storlek · installation/tillstånd · för vem passar den.
**Nyckeltermer:** torrtoalett, toalett utan avlopp, spolfolie, latrin, latrinkompost, frånluftsrör, strömaterial, restavfall, värmeförsegling/heat-seal.

## SERP / format to beat

- **byggahus.se** (uppdaterad 24 jun 2026): 8 typer, rik checklista, MEN ingen tabell, ingen kr/besök-matematik, "bara Pacto"-felet. → slå med tabell + korrekt heat-seal-rad + kr/besök.
- **testfakta.se** (2013): har tabell + namnger "paketeringstoalett" positivt, MEN 13 år gamla priser. → slå med 2026-priser.
- **avloppsguiden.se**: bäst på tillstånd, inga priser. **viivilla.se / naranaturen.se**: utelämnar heat-seal helt.

## PAA / FAQ att besvara

Vilken torrtoalett passar utan el/vatten/avlopp? · Krävs tillstånd för torrtoalett/mulltoa? · Hur ofta måste man tömma? · Drar förbränningstoaletten mycket el? · Var får jag slänga avfallet/påsarna? · Luktar en mulltoa? · Vad kostar de olika typerna? · Värmeförsegling vs förbränning — vilken?

## Internal links (≥3 in-body + 2 inbound)

In-body → `/guider/vattenlos-toalett-husbil-sa-fungerar-det` (hur värmeförsegling fungerar), `/sa-fungerar-det` (produktmekanik), `/guider/kassettoalett-vs-vattenlos-toalett` (husbil-vinkeln), `/guider/toalett-utan-kemikalier-husvagn` (kemikaliefritt), CTA `/#bestall` (30 dagars öppet köp).
Inbound (lägg till denna runda) ← `/guider/kassettoalett-vs-vattenlos-toalett` + `/guider/vattenlos-toalett-husbil-sa-fungerar-det`.

## Schema

`Article` + `FAQPage` (från FAQ-sektionen). Ev. `BreadcrumbList` (hanteras av layout).
