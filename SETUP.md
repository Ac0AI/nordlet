# NordLet – Setup för första skarpa försäljning

Snabbstart för att ta sajten från "looks good" till "tar emot riktiga pengar".
Följ punkterna i ordning.

## 1. Företagsuppgifter (lagkrav)

Svensk e-com måste visa säljarens organisationsnummer och adress. Sätt i `.env.local`:

```
NEXT_PUBLIC_COMPANY_NAME=NordLet
NEXT_PUBLIC_ORG_NR=XXXXXX-XXXX
NEXT_PUBLIC_COMPANY_ADDRESS=Exempelgatan 1, 123 45 Exempelstad
```

Alla tre fälten visas i Footer + Köpvillkor + Integritetspolicy så fort de är ifyllda.

## 2. Kustom Checkout (betalningar)

Kassan är färdigbyggd i koden (`src/lib/kustom.ts`, `/kassa`, `/kassa/bekraftelse`,
`/api/kustom/push`) och ligger vilande tills API-nycklarna sätts. Tills dess visar
alla beställ-knappar e-postfallbacken, så inget går sönder.

**Förutsättning:** registrerat aktiebolag (Nordic Selective AB). Kustom godkänner
inte merchant-ansökan utan org.nr.

### När bolaget är godkänt

1. Ansök om merchant-konto på [kustom.co](https://www.kustom.co) (Kustom Checkout,
   f.d. Klarna Checkout). Du behöver org.nr, bankuppgifter och sajt-URL.
2. Du får API-credentials i Kustoms merchantportal: användarnamn (kopplat till
   merchant-ID) och lösenord. Det finns separata credentials för **playground**
   (testmiljö) och **production**.
3. Sätt i `.env.local` och i Vercel (Settings → Environment Variables):

```
KUSTOM_API_USERNAME=PK_xxxxx
KUSTOM_API_PASSWORD=xxxxx
KUSTOM_ENV=playground
NEXT_PUBLIC_KUSTOM_ENABLED=true
NEXT_PUBLIC_SITE_URL=https://nordlet.se
```

4. Testa hela flödet i playground: lägg en order på `/kassa?paket=refill-1`,
   betala med [Kustoms testdata](https://docs.kustom.co), kontrollera att
   bekräftelsesidan visas och att pushen loggas i Vercel-loggarna.
5. Byt till production-credentials + `KUSTOM_ENV=production` och gör ett riktigt
   testköp med eget kort (kan återbetalas i merchantportalen).

### Hur flödet hänger ihop

- Beställ-knappar pekar på `/kassa?paket=<nyckel>` (nycklar i `src/lib/products.ts`)
- `/kassa` skapar ordern via `POST /checkout/v3/orders` och bäddar in Kustoms
  kassa-iframe (Klarna, Swish, kort - styrs av merchant-avtalet)
- Efter betalning skickas kunden till `/kassa/bekraftelse?order_id=...`
- Kustom POST:ar till `/api/kustom/push` som bekräftar ordern (acknowledge)
- Priser och produkter ändras i `src/lib/products.ts` - en fil, ett ställe

### Valfri override per paket

Om en hostad betalningslänk ska användas för ett enskilt paket i stället för
Kustom-kassan kan `NEXT_PUBLIC_CHECKOUT_URL_FRIHETSTOA` /
`NEXT_PUBLIC_CHECKOUT_URL_SASONGSPAKET` sättas till en URL. De har högst
prioritet. Lämna tomma i normalfallet.

## 2b. Meta Pixel (Facebook-annonsering)

Spårningen är förbyggd och **vilande tills ett pixel-ID sätts** - exakt som
Kustom. Inget laddas, ingen cookie-ruta visas, och integritetspolicyn säger
fortfarande "inga marknadsföringscookies" så länge ID:t är tomt.

### När du vill börja annonsera

1. Skapa en pixel i [Meta Events Manager](https://business.facebook.com)
   (Datakällor → Pixlar → Skapa). Kopiera pixel-ID:t (bara siffror).
2. Lägg till i `.env.local` och i Vercel (Settings → Environment Variables):

```
NEXT_PUBLIC_META_PIXEL_ID=1234567890
```

3. Deploya. Då händer detta automatiskt:
   - En GDPR-cookieruta visas (Acceptera alla / Endast nödvändiga).
   - Pixeln laddas **först efter** "Acceptera alla" och skickar `PageView`.
   - Integritetspolicyns cookie-avsnitt byter automatiskt till Meta-texten.
4. Verifiera med [Meta Pixel Helper](https://chromewebstore.google.com/detail/meta-pixel-helper)
   (Chrome-tillägg) - acceptera cookies och se att PageView triggas.

### Events som redan är inkopplade

| Event | Var | Värde |
|-------|-----|-------|
| `PageView` | alla sidor | - |
| `ViewContent` | startsidan | 14 900 kr |
| `Lead` | reservationsformuläret (early access) | 12 900 kr |
| `InitiateCheckout` | `/kassa` | paketets pris |
| `Purchase` | `/tack` + `/kassa/bekraftelse` | orderbelopp (Kustom) |

`Lead` triggas när en intresseanmälan skickas (kräver att Resend är satt, se
2d). `InitiateCheckout` och `Purchase` triggas så fort kassan (avsnitt 2) är
aktiv - ingen extra kod behövs då.

**Viktigt för annonsoptimering:** så länge kassan är vilande finns inget
`Purchase`-event. Optimera då Meta-kampanjen mot **`Lead`** (intresseanmälan),
inte mot sidvisningar. Det kräver att Resend är konfigurerat (2d).

## 2c. PostHog (produktanalys)

Förbyggd och **vilande tills en nyckel sätts** - samma logik som pixeln. Laddas
bara efter "Acceptera alla" och skickar data till EU-regionen.

1. Skapa ett projekt på [posthog.com](https://posthog.com) - välj **EU**-region.
   Använd ett projekt som hör till NordLet/Nordic Selective (blanda inte in
   NordLet-data i ett projekt för ett annat bolag - det är rörigt och sämre för
   GDPR).
2. Kopiera projekt-API-nyckeln (`phc_...`) och lägg i `.env.local` + Vercel:

```
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

3. Deploya. PostHog laddas efter cookie-samtycke och fångar:
   - `$pageview` (varje sidbyte)
   - `cta_click` (alla primära CTA:er, med `location` + `mode`)
   - `lead_submitted` (skickad intresseanmälan - din north star i early access)
4. Bygg en funnel i PostHog: `$pageview` → `cta_click` → `lead_submitted`.

## 2d. Early access - intresseanmälan (Resend)

Så länge kassan är vilande kör sidan **early access**: primär-CTA blir "Säkra
grundarpriset", grundarpriset (12 900 kr, ord. 14 900) visas, och ett
reservationsformulär tar namn + e-post + valfritt telefon i beställ-sektionen.

**Styrs av:** `NEXT_PUBLIC_EARLY_ACCESS`. På automatiskt tills kassan slås på.
Sätt `=false` för att i stället falla tillbaka till gamla e-postbeställningen.

**Så fångas anmälningarna (Resend):**

```
RESEND_API_KEY=re_xxxxx
RESEND_FROM_EMAIL=NordLet <info@nordlet.se>
LEAD_NOTIFY_EMAIL=info@nordlet.se
RESEND_AUDIENCE_ID=            # valfritt: lägg anmälningar i en maillista
```

1. Skapa konto på [resend.com](https://resend.com), lägg till domänen
   **nordlet.se** och verifiera DNS (SPF/DKIM). DNS ligger hos Simply.com
   (konto S636939), inte Porkbun.
2. Skapa en API-nyckel, sätt variablerna ovan i `.env.local` + Vercel.
3. (Valfritt) skapa en Audience i Resend och sätt `RESEND_AUDIENCE_ID` så att
   varje anmälan hamnar i en lista du kan maila vid lansering.

**Utan `RESEND_API_KEY`:** formuläret faller tillbaka till en förifylld
`mailto` (ingen anmälan tappas), men `Lead`-eventet triggas inte. **Sätt därför
Resend innan du startar annonser.**

### När kassan öppnar (byt från early access till försäljning)

1. Följ avsnitt 2 (Kustom) och sätt `NEXT_PUBLIC_KUSTOM_ENABLED=true`.
   Då stängs early access av automatiskt: CTA:er blir "Beställ", formuläret
   göms, refill-paketen visas och köp-knapparna pekar på `/kassa`.
2. Maila listan från Resend med den personliga köplänken och grundarpriset.

_Tips: lägg pixel-ID, PostHog-nyckel och Resend-nyckeln i `.env.example` (utan
värden) så plockar onboarding/sync upp raderna._

## 3. Telefonnummer (valfritt)

Om du vill publicera telefonnummer för beställningar:

```
NEXT_PUBLIC_PHONE=+46 70 XXX XX XX
```

Lämna tomt om du inte vill stå för telefonsupport än — alla telefon-CTA:er göms
då automatiskt (Hero, Pricing, StickyMobileCTA, Footer).

## 4. Synka env från huben

Om `GEMINI_API_KEY` behövs (för att regenerera operativprincip-bilder senare):

```bash
cd /Users/dpr/Code/Projekt && pnpm sync-env
```

## 5. Deploy

```bash
cd /Users/dpr/Code/Projekt/nordlet
vercel env pull .env.local       # om env ska flyttas till Vercel projektet
# Lägg till alla NEXT_PUBLIC_* variabler i Vercel dashboard → Settings → Environment Variables
vercel --prod
```

Eller låt `git push origin main` trigga auto-deploy om repo:t är länkat.

## 6. Juridiska sidor

Följande sidor autogenereras baserat på `SITE.company.*`-värdena:

- `/kopvillkor` — Distansavtalslagen-kompatibel. 14 dagars ångerrätt + 30 dagars öppet köp.
- `/integritetspolicy` — GDPR-baserad. Kustom, Vercel, fraktpartners listade som delade parter.
- `/tack` — post-checkout success-sida.

**Innan riktiga kunder tas emot:** läs igenom båda juridiska sidorna minst en gång
och justera där det passar din specifika situation (fraktpartners, extra garanti-
erbjudanden, retur-adress etc.). För komplex e-com rekommenderas jurist-genomgång.

## 7. Efter första kund

När första betald kund landar:

- Be om 2-3 meningars recension efter 30 dagar, plus att få använda namnet (bara
  förnamn + ort OK).
- Byt ut `/kopvillkor`-Senast uppdaterad-datumet om du ändrar något.
- När du har 5+ riktiga recensioner kan du återinföra en Testimonials-sektion i
  `src/components/sections/` och importera i `page.tsx`. Håll dig till verifierbara
  citat.

## 8. Efter första press-omnämnande

När du blivit nämnd i en riktig tidning/blogg/podd kan du återskapa en
AsSeenIn-sektion (den togs bort eftersom de tidigare logotyperna var fabricerade).
Håll dig till faktiska omnämnanden med länk tillgänglig på begäran.
