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

## 2. Stripe Payment Links (betalningar)

1. Logga in på [dashboard.stripe.com](https://dashboard.stripe.com).
2. Gå till **Payment Links** → **New payment link**.
3. Skapa **Produkt 1** — *Frihetstoa* (14 900 kr inkl. moms).
4. I samma flöde:
   - **Collect customer address** → **Shipping address** → `Sverige` enbart
   - **Confirmation email** → på (Stripe skickar kvitto)
   - **After payment** → **Redirect customers to your site** → `https://nordlet.vercel.app/tack`
   - Optional: aktivera **Adjust quantity** om du vill tillåta mängdval
5. Kopiera den genererade URL:en.
6. Gör samma sak för **Produkt 2** — *Säsongspaketet* (16 900 kr).
7. Klistra in i `.env.local`:

```
NEXT_PUBLIC_CHECKOUT_URL_FRIHETSTOA=https://buy.stripe.com/xxx
NEXT_PUBLIC_CHECKOUT_URL_SASONGSPAKET=https://buy.stripe.com/yyy
```

Om någon av URL:erna saknas faller den knappen tillbaka till `mailto:info@nordlet.se`,
så du kan rulla ut en produkt i taget utan att andra knappen går sönder.

**Viktigt:** sätt Stripe till **Live mode** (inte Test) innan du deployar skarpt.
Test-länkar börjar med `https://buy.stripe.com/test_...` och accepterar bara
testkort. Live-länkar har ingen `test_` i URL:en.

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
- `/integritetspolicy` — GDPR-baserad. Stripe, Vercel, fraktpartners listade som delade parter.
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
