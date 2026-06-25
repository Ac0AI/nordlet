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
| 2026-06-24 | Torrtoaletter jämförda: vilken passar din stuga? | comparison | /guider/torrtoalett-jamforelse-vilken-passar-din-stuga | torrtoalett jämförelse | low-med | low | /guider/vattenlos-toalett-husbil-sa-fungerar-det · /guider/kassettoalett-vs-vattenlos-toalett · /guider/toalett-utan-kemikalier-husvagn · /#bestall | 8afb833 (+ tabellfix 261f597) |
| 2026-06-25 | Toalett i båt utan avlopp – vilken får du ha? | guide | /guider/toalett-i-bat-utan-avlopp-vilken-far-du-ha | toalett båt utan avlopp | medium | low | /guider/torrtoalett-jamforelse-vilken-passar-din-stuga · /guider/vattenlos-toalett-husbil-sa-fungerar-det · /guider/toalett-till-stuga-fritidshus-utan-avlopp · /#bestall | _(pending – denna runda)_ |
| 2026-06-25 | Toalett till stuga och fritidshus utan avlopp | guide | /guider/toalett-till-stuga-fritidshus-utan-avlopp | toalett stuga utan avlopp | high | low-med | /guider/torrtoalett-jamforelse-vilken-passar-din-stuga · /guider/vattenlos-toalett-husbil-sa-fungerar-det · /guider/toalett-utan-kemikalier-husvagn · /guider/toalett-i-bat-utan-avlopp-vilken-far-du-ha · /#bestall | _(pending – denna runda)_ |

<!-- Type ∈ guide | how-to | listicle | definition | comparison | data-study | resource | opinion | case-study -->

---

## Candidate backlog

> Scored shortlist from the last selection run. Filled by Step 1 of the current run (see below).

| Rank | Candidate | Proposed type | Target keyword | Vol | KD | Intent | Score | Notes / angle |
|---|---|---|---|---|---|---|---|---|
| ~~1~~ ✅ SHIPPED 2026-06-24 | Heat-seal kategori-jämförelse → /guider/torrtoalett-jamforelse-vilken-passar-din-stuga | comparison | torrtoalett jämförelse | low-med | low | commercial-decision | 22 | Klart denna runda. |
| ~~1~~ ✅ SHIPPED 2026-06-25 | Båt-guiden → /guider/toalett-i-bat-utan-avlopp-vilken-far-du-ha | guide | toalett båt utan avlopp | medium | low | commercial-info | 19 | Klar denna runda. |
| ~~2~~ ✅ SHIPPED 2026-06-25 | Stuga-guiden → /guider/toalett-till-stuga-fritidshus-utan-avlopp | guide | toalett stuga utan avlopp | high | low-med | info→commercial | 18 | Klar denna runda (situationspelare, länkar till jämförelsen). |
| 1 (nästa) | Får man ha torrtoalett? Tillstånd + var påsarna får slängas | definition | torrtoalett tillstånd · regler | low | low | informational | 15 | Hög info-gain/AI-citat men låg volym + kommun-varierande regler. Delvis redan täckt som sektion i heat-seal-jämförelsen OCH stuga-guiden – marginalvärde nu lågt. Överväg i stället en NY vinkel nästa runda (t.ex. kolonilott-djupdyk, eller kostnad/säsong-datapiece). |
| 2 (nästa) | Kolonilott-djupdyk: "Toalett på kolonilott – regler och bästa lösningen" | guide | toalett kolonilott | low-med | low | info→commercial | ~17 | Svagaste SERP (forumtrådar, noll byggd guide), egen vinkel. Research finns i agent-rapport denna session (Landskrona m.fl.). |

---

## Coverage map

| Cluster / theme | Pieces shipped | Gaps still open |
|---|---|---|
| Husbil/husvagn — sommar/lukt/natt | 6 | Vinter/kyla (lågprio, produkten är sommarpositionerad) |
| Jämförelse | 2 (vs kassettoalett; heat-seal vs förbränning/mulltoa/separett) | "bästa torrtoaletten" listicle (medvetet hoppad – self-crowning, crowded SERP) |
| Kemikaliefritt / tömning | 2 | — |
| Båt / toalett ombord utan avlopp | 1 (toalett-i-bat-utan-avlopp) | Djupare båtinnehåll vid behov |
| Stuga / landställe / fritidshus utan avlopp | 1 (toalett-till-stuga-fritidshus) | **Kolonilott-djupdyk** (svag SERP, egen vinkel) |
| Regler / lag (toalett utan avlopp, latrin, avfall) | täckt som sektion i 3 pieces | Egen sida lågprio (låg volym) |
| **Kostnad — djupdyk över en säsong** | **0** | Endast nuddat i jämförelsen |

---

## Notes

- **DR cap:** DR ≈ 4 (ny domän). Targets KD ≤ ~14. Svensk long-tail klarar detta.
- **No duplication:** ingen `docs/seo-sprint.md` finns — exclusion set = shipped-tabellen ovan.
- **One piece per run.**
