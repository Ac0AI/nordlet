# NordLet — Content Ledger

> Memory of the content engine. Read first on every run: **Shipped** is the dedup record; **Candidate backlog** is the scored shortlist. Bootstrapped 2026-06-24. Vol/KD are estimates (Ahrefs-free fallback).

---

## Shipped

| Date | Title | Type | Slug / URL | Target keyword | Vol | KD | Primary internal links | Commit / PR |
|---|---|---|---|---|---|---|---|---|
| 2026-05-10 | Vattenlös toalett för husbil: så fungerar den egentligen | definition | /guider/vattenlos-toalett-husbil-sa-fungerar-det | vattenlös toalett husbil | ~est | low | /#bestall | pre-ledger |
| 2026-05-17 | Slippa tömningsstationen | how-to | /guider/slippa-tomningsstationen | tömningsstation husbil | ~est | low | /#bestall | pre-ledger |
| 2026-05-24 | Husvagnstoalett utan att dosera sanitetsvätska | definition | /guider/toalett-utan-kemikalier-husvagn | toalett utan kemikalier | ~est | low | /#bestall | pre-ledger |
| 2026-05-31 | Luktfri toalett på sommaren | how-to | /guider/luktfri-toalett-sommar-varme | luktfri husbilstoalett | ~est | low | /#bestall | pre-ledger |
| 2026-06-05 | Kassettoalett eller vattenlös toalett – vilken passar dig? | comparison | /guider/kassettoalett-vs-vattenlos-toalett | kassettoalett vs vattenlös | ~est | low | /#bestall | pre-ledger |
| 2026-06-06 | Husbilssemestern på sommaren | guide | /guider/husbilssemestern-pa-sommaren-hur-hanterar-du-toalettfragan-utan-krange | husbil sommar toalett | ~est | low | /#bestall | pre-ledger |
| 2026-06-06 | Så förbereder du husbilens toalett inför sommaren | how-to | /guider/sa-forbereder-du-husbilens-toalett-infor-sommarsasongen-steg-for-steg | förbereda husbil sommar | ~est | low | /#bestall | pre-ledger |
| 2026-06-15 | Nattplatsen utan toalettbekymmer | guide | /guider/nattplatsen-utan-toalettbekymmer-sa-klarar-du-sommarnatterna-med-nordl | vild camping toalett | ~est | low | /#bestall | pre-ledger |
| 2026-06-24 | Torrtoaletter jämförda: vilken passar din stuga? | comparison | /guider/torrtoalett-jamforelse-vilken-passar-din-stuga | torrtoalett jämförelse | low-med | low | /guider/vattenlos-toalett-husbil-sa-fungerar-det · /guider/kassettoalett-vs-vattenlos-toalett · /guider/toalett-utan-kemikalier-husvagn · /#bestall | _(pending – uncommitted)_ |

<!-- Type ∈ guide | how-to | listicle | definition | comparison | data-study | resource | opinion | case-study -->

---

## Candidate backlog

> Scored shortlist from the last selection run. Filled by Step 1 of the current run (see below).

| Rank | Candidate | Proposed type | Target keyword | Vol | KD | Intent | Score | Notes / angle |
|---|---|---|---|---|---|---|---|---|
| ~~1~~ ✅ SHIPPED 2026-06-24 | Heat-seal kategori-jämförelse → /guider/torrtoalett-jamforelse-vilken-passar-din-stuga | comparison | torrtoalett jämförelse | low-med | low | commercial-decision | 22 | Klart denna runda. |
| 1 (nästa) | Toalett i båt utan avlopp – vilken får du ha? | guide/comparison | toalett båt utan avlopp · torrtoalett båt | medium | low | commercial-info | 19 | Otäckt båtsegment. Drivs av tömningsförbudet i sjön (1 apr 2015, alla fritidsbåtar). Retailer-sidor grunda, forum ostrukturerade → öppet för DR4. Research finns i agent-rapporter denna session. |
| 2 (nästa) | Toalett till stuga/fritidshus utan avlopp (definitiv guide) | guide | toalett stuga/fritidshus utan avlopp | high | med | info→commercial | 18 | #1-slot hålls av editorial guide (byggahus, uppdaterad 24 jun 2026), slåbar på long-tail. Högre trafik men högre effort. "toalett kolonilott/kolonistuga" = svag SERP (forumtrådar), lättast att vinna. |
| 3 (nästa) | Får man ha torrtoalett? Tillstånd + var påsarna får slängas | definition | torrtoalett tillstånd · regler | low | low | informational | 15 | Hög info-gain/AI-citat men låg volym + kommun-varierande regler. Delvis redan täckt som sektion i heat-seal-jämförelsen. |

---

## Coverage map

| Cluster / theme | Pieces shipped | Gaps still open |
|---|---|---|
| Husbil/husvagn — sommar/lukt/natt | 6 | Vinter/kyla (lågprio, produkten är sommarpositionerad) |
| Jämförelse | 2 (vs kassettoalett; heat-seal vs förbränning/mulltoa/separett) | "bästa torrtoaletten" listicle (medvetet hoppad – self-crowning, crowded SERP) |
| Kemikaliefritt / tömning | 2 | — |
| **Båt / toalett ombord utan avlopp** | **0** | Hela segmentet otäckt |
| **Stuga / landställe / fritidshus utan avlopp** | **0** | Hela segmentet otäckt — stor svensk kategori |
| **Regler / lag (toalett utan avlopp, latrin, avfall)** | **0** | AEO/AI-citat-guld, Svensk-specifikt |
| **Kostnad — djupdyk över en säsong** | **0** | Endast nuddat i jämförelsen |

---

## Notes

- **DR cap:** DR ≈ 4 (ny domän). Targets KD ≤ ~14. Svensk long-tail klarar detta.
- **No duplication:** ingen `docs/seo-sprint.md` finns — exclusion set = shipped-tabellen ovan.
- **One piece per run.**
