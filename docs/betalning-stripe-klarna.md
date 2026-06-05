# Lanseringsplan – Betalning med Stripe + Klarna

**Mål:** Sälja Frihetstoa (14 900 kr) och Säsongspaketet (16 900 kr) med **kort + Klarna (faktura/delbetalning/finansiering) + Swish** från dag 1, med minsta möjliga kod och snabbast time-to-market.

**Varför Stripe + Klarna:** Sajten är redan byggd för Stripe Payment Links (`NEXT_PUBLIC_CHECKOUT_URL_*` + `/tack`-redirect). Klarna via Stripe ger faktura, dela upp i 3–4 och finansiering upp till 100 000 kr. Ni får hela beloppet direkt – Klarna tar kreditrisken. Inget Klarna-avtal behövs separat.

---

## Del A — Du i Stripe (kräver BankID, kan inte göras av Claude)

1. **Skapa Stripe-konto** på stripe.com → land **Sverige**, valuta **SEK**.
   - Fyll i: org.nr, företagsnamn/adress, **företagsbankkonto (IBAN)**, legitimera firmatecknare via BankID.
2. **Slå på betalmetoder:** Dashboard → **Settings → Payment methods** → aktivera:
   - **Cards**, **Klarna**, **Swish**, **Apple Pay / Google Pay**.
   - (Klarna kräver SEK – redan satt.)
3. **Moms:** priserna är inkl. moms (B2C). Aktivera **Stripe Tax** eller markera priset som "inkl. moms" så momsen redovisas rätt (25 %).
4. **Skapa produkter + priser:** Dashboard → **Product catalog**:
   - Frihetstoa – 14 900 kr
   - Säsongspaketet – 16 900 kr
5. **Skapa en Payment Link per produkt** (Dashboard → Payment Links):
   - **Collect shipping address** → begränsa till **Sverige**.
   - **Confirmation email** på.
   - **After payment → Redirect** → `https://nordlet.se/tack`
   - (Frivilligt) tillåt **rabattkoder**.
6. **Kopiera de två länkarna** och skicka till mig (eller klistra in i env enligt Del B).

> Tips: testa i **Test mode** först (testkort + Klarna-testflöde), gå sen till **Live mode**.

---

## Del B — Claude i koden (görs när länkarna finns)

1. **Fyll i miljövariabler** i `.env.local` **och** i Vercel (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_CHECKOUT_URL_FRIHETSTOA=…`
   - `NEXT_PUBLIC_CHECKOUT_URL_SASONGSPAKET=…`
   - `NEXT_PUBLIC_ORG_NR=…` (lagkrav att visa)
   - `NEXT_PUBLIC_COMPANY_ADDRESS=…` (lagkrav att visa)
   - `NEXT_PUBLIC_PHONE=…` (frivilligt – visar telefon-CTA)
2. **Konverteringsbudskap** i `Pricing.tsx` vid priset:
   - "Dela upp – från ca **X kr/mån**" (Klarna delbetalning).
   - "**Betala om 30 dagar** med Klarna" – kopplat till ert 30 dagars öppet köp = prova innan du betalar.
3. **Legal:** säkerställ att org.nr + adress syns i footer + köpvillkor (fylls automatiskt när env är satt).
4. **Redeploy** (Vercel) och verifiera.

*Kan förberedas redan nu (utan Stripe-länkar):* punkt 2 + 3.

---

## Del C — Verifiering & go-live

- [ ] Klicka "Beställ" → Stripe-kassan visar **kort + Klarna + Swish**.
- [ ] Genomför **testköp** (test mode) → kvitto-mejl kommer → redirect till `/tack` fungerar.
- [ ] Klarna visar **faktura + dela upp** på 14 900 kr.
- [ ] Växla till **Live mode**, gör ett skarpt köp och **återbetala** det (kontroll av hela flödet).
- [ ] QA på mobil (de flesta köpen sker där).

---

## Vem gör vad / tidslinje

| Steg | Vem | Tid |
|---|---|---|
| Stripe-konto + produkter + Payment Links (Del A) | Du (BankID) | ~1–2h (beror på bankkonto/legitimering) |
| Env + kod + deploy + QA (Del B–C) | Claude | Samma dag som länkarna finns |
| Konverteringsbudskap (kan börja nu) | Claude | ~30 min |

---

## Avgifter (Stripe, SE)

- Kort (EEA): ~1,5 % + 1,80 kr
- Klarna: 2,99 % + 4,00 kr (intro 1,5 % + 1,80 kr i minst 2 mån)
- Swish: egen avgift, se Stripes prislista
- Utbetalning: hela beloppet minus avgift, ~2 bankdagar

## Nästa steg (senare, vid behov)
Om faktura-volymen blir stor: utvärdera **Svea Checkout** (varm kontakt) eller Klarna Checkout som primär kassa. Marknadssajten kan återanvändas – ingen omstart.
