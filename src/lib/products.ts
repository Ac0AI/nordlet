// Central produktkatalog. Alla priser i kr inkl. 25% moms.
// Ändra priser här - kassan, beställ-sektionen och strukturerad data läser härifrån.

export type ProductKey =
  | "frihetstoa"
  | "sasongspaket"
  | "refill-1"
  | "refill-3"
  | "refill-5";

export type Product = {
  key: ProductKey;
  /** Artikelreferens som följer med ordern till Kustom/bokföring */
  reference: string;
  name: string;
  priceKr: number;
  /** Rabatterat grundarpris under early access. Visas struket mot priceKr. */
  foundingPriceKr?: number;
  description: string;
};

export const PRODUCTS: Record<ProductKey, Product> = {
  frihetstoa: {
    key: "frihetstoa",
    reference: "NLP-100",
    name: "NordLet Pro",
    priceKr: 14900,
    foundingPriceKr: 12900,
    description: "NordLet Pro med 1 rulle påsar, USB-laddkabel och 2 års garanti.",
  },
  sasongspaket: {
    key: "sasongspaket",
    reference: "NLP-150",
    name: "Säsongspaketet",
    priceKr: 16900,
    description:
      "NordLet Pro med 5 rullar påsar, 12V-adapter, bärväska och prioriterad support.",
  },
  "refill-1": {
    key: "refill-1",
    reference: "NLR-001",
    name: "Påsrulle - 1 rulle (30 användningar)",
    priceKr: 249,
    description: "1 originalrulle till NordLet Pro. Räcker till 30 användningar.",
  },
  "refill-3": {
    key: "refill-3",
    reference: "NLR-003",
    name: "Påsrullar - 3-pack (90 användningar)",
    priceKr: 649,
    description: "3 originalrullar till NordLet Pro. Räcker till 90 användningar.",
  },
  "refill-5": {
    key: "refill-5",
    reference: "NLR-005",
    name: "Påsrullar - 5-pack (150 användningar)",
    priceKr: 995,
    description: "5 originalrullar till NordLet Pro. Räcker en hel säsong.",
  },
};

export const MOMS_RATE = 2500; // 25% i Kustoms format (basis points)

/** Pris i ören (minor units) som Kustom-API:t kräver */
export function priceMinorUnits(p: Product): number {
  return Math.round(p.priceKr * 100);
}

/** Momsdel av ett bruttobelopp i ören, enligt Kustoms formel */
export function taxAmountMinorUnits(totalMinor: number): number {
  return Math.round((totalMinor * MOMS_RATE) / (10000 + MOMS_RATE));
}

export function isProductKey(value: string | undefined): value is ProductKey {
  return Boolean(value && value in PRODUCTS);
}
