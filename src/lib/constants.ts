import {
  Droplets,
  BatteryCharging,
  ShieldCheck,
  RotateCw,
  Hand,
  Thermometer,
  Truck,
  RotateCcw,
  Flag,
  Shield,
} from "lucide-react";

export const SITE = {
  name: "NordLet",
  category: "Frihetstoa",
  tagline: "Frihetstoa. Vattenlös enkelhet för ett friare husbilsliv.",
  description:
    "Nordens vattenlösa toalett för husbilar och husvagnar. Värmeförsegling, batteridrift och en renare resa utan kassettank eller kemikalier.",
  email: "info@nordlet.se",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME ?? "NordLet",
    orgNr: process.env.NEXT_PUBLIC_ORG_NR ?? "",
    address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS ?? "",
  },
  checkoutUrls: {
    frihetstoa: process.env.NEXT_PUBLIC_CHECKOUT_URL_FRIHETSTOA ?? "",
    sasongspaket: process.env.NEXT_PUBLIC_CHECKOUT_URL_SASONGSPAKET ?? "",
  },
};

export const NAV_LINKS = [
  { label: "Så fungerar det", href: "/#sa-fungerar-det" },
  { label: "Fördelar", href: "/#fordelar" },
  { label: "Vanliga frågor", href: "/#faq" },
  { label: "Beställ", href: "/#bestall" },
];

// Honest product-fact "stats" replacing fabricated popularity numbers.
export const SOCIAL_PROOF_STATS = [
  { number: "0%", label: "Kemikalier" },
  { number: "14 d", label: "Full ångerrätt" },
  { number: "CE", label: "Europeisk säkerhet" },
];

export const PAIN_POINTS = [
  {
    emoji: "😤",
    title: "Trött på att planera efter tömningsstationer?",
    description:
      "När rutten styrs av tömningsplatser försvinner en del av friheten. Med Frihetstoa slipper du kassettanken helt.",
  },
  {
    emoji: "🧪",
    title: "Trött på toamedel och kemikalier?",
    description:
      "Sanitetsvätskor kostar, luktar och följer med i varje resa. Frihetstoa fungerar helt utan kemikalier.",
  },
  {
    emoji: "🤢",
    title: "Trött på lukten i toautrymmet?",
    description:
      "Den typiska lukten från traditionella lösningar är svår att missa. Med Frihetstoa förseglas avfallet lufttätt inom sekunder.",
  },
];

export const FEATURES = [
  {
    icon: Droplets,
    title: "Ingen kassettank",
    description:
      "Ingen svartvattentank, ingen vattenanslutning och ingen avloppskoppling. Bara en mer genomtänkt lösning för livet på vägen.",
  },
  {
    icon: Thermometer,
    title: "Lufttät försegling",
    description:
      "Värmeförseglingen skapar en helt lufttät förslutning inom sekunder. Diskret och fräsch även under varma sommardagar.",
  },
  {
    icon: BatteryCharging,
    title: "Batteridrift",
    description:
      "Inbyggt uppladdningsbart batteri som räcker i flera dagar. Laddas enkelt via USB eller 12V i husbilen.",
  },
  {
    icon: ShieldCheck,
    title: "Utan kemikalier",
    description:
      "Ingen sanitetsvätska, inga tillsatser och inget extra att bära med sig. Renare för dig och skonsammare för miljön.",
  },
  {
    icon: RotateCw,
    title: "Svängbar bas",
    description:
      "180° rotation med snabbkoppling. Passar även i trånga toautrymmen.",
  },
  {
    icon: Hand,
    title: "Ett knapptryck räcker",
    description:
      "Välj läge och låt systemet arbeta. Ingen manuell tömning av kassett och inget onödigt handarbete.",
  },
];

export const SPECS = [
  { label: "Mått", value: "445 × 355 × 455 mm" },
  { label: "Strömförsörjning", value: "12V, 70W" },
  { label: "Batteri", value: "Litium-jon, 5 200 mAh" },
  { label: "Laddning", value: "USB eller 12V i husbilen" },
  { label: "Lägen", value: "Dubbelt läge (fast & flytande)" },
  { label: "Kapacitet", value: "30 användningar per rulle" },
  { label: "Indikator", value: "LED visar när det är dags att byta" },
  { label: "Färg", value: "Vit" },
];

export const CHAPTERS = [
  {
    number: "01",
    slug: "installation",
    title: "Klart på en minut",
    lead: "Frihetstoan är fristående. Inget behöver anslutas, dras eller borras.",
    body: "När du packar upp första gången lägger du i folierullen, sätter tillbaka locket och trycker Reset. Det tar en minut. Sen är den redo hela din resa. När LED-lampan säger till byter du rullen på samma sätt. Det är hela installationen.",
    stat: "30 användningar per rulle. Ungefär en resevecka för två.",
    images: {
      primary: "/images/how-it-works/01-installation-rulle.png",
      secondary: "/images/how-it-works/02-installation-reset.png",
      primaryAlt: "Folierulle sätts på plats i Frihetstoa",
      secondaryAlt: "Hand trycker Reset-knappen på kontrollpanelen",
    },
  },
  {
    number: "02",
    slug: "anvandning",
    title: "Precis som hemma. Bara utan vatten.",
    lead: "Sätt dig, gör ditt, stäng locket, tryck på knappen.",
    body: "Sitsen är i standardhöjd och känns som en vanlig toalett. När du är klar stänger du locket och väljer litet eller stort program på kontrollpanelen. Du behöver inte hälla i något toamedel, inte mäta ut någon vätska och inte spola. Frihetstoa sköter resten själv.",
    stat: "Dubbelt läge för flytande och fast. Noll kemikalier.",
    images: {
      primary: "/images/how-it-works/03-anvandning-miljo.png",
      secondary: "/images/how-it-works/04-anvandning-panel.png",
      primaryAlt: "Frihetstoa installerad i husbilsinteriör med varmt morgonljus",
      secondaryAlt: "Närbild av kontrollpanelens lägesknappar",
    },
  },
  {
    number: "03",
    slug: "forseglingen",
    title: "Det tysta jobbet under locket",
    lead: "Det här är den del som gör att du aldrig behöver tömma en kassettank igen.",
    body: "När du tryckt på knappen drar Frihetstoa ihop folien runt innehållet och värmeförseglar den till en lufttät påse. Varje besök får sin egen förslutning. När påsen är förseglad matas ny, ren folie automatiskt fram och skålen är klar för nästa gång. Ingen kemikalie, ingen doft som väntar på dig i skåpet, ingen mekanik som du själv behöver hantera.",
    stat: "Lufttät försegling - även sommartid när värmen står still ovanför husbilen.",
    images: {
      primary: "/images/how-it-works/05-forsegling-svets.png",
      secondary: "/images/how-it-works/06-forsegling-matning.png",
      primaryAlt: "Genomskärning av värmeförseglingen inuti Frihetstoa",
      secondaryAlt: "Genomskärning som visar ny folie som matas fram",
    },
  },
  {
    number: "04",
    slug: "tomning",
    title: "Från husbilen till hushållssoporna",
    lead: "Inga tömningsstationer. Inga söndagsköer. Inga sanitetsvätskor.",
    body: "När uppsamlingslådan är full tänds LED-indikatorn på kontrollpanelen. Dra ut lådan i nederdelen. Eftersom varje påse är förseglad för sig finns ingen lukt och ingen risk för spill. Du lägger dem i vanliga hushållssoporna - vid nästa rastplats, på campingen eller hemma i köket när resan är slut.",
    stat: "Påsarna är biologiskt nedbrytbara och går i det vanliga restavfallet.",
    images: {
      primary: "/images/how-it-works/07-tomning-lada.png",
      secondary: "/images/how-it-works/08-tomning-sopor.png",
      primaryAlt: "Uppsamlingslådan utdragen med synliga förseglade påsar",
      secondaryAlt: "Hand släpper en förseglad påse i en vanlig soptunna",
    },
  },
] as const;

export type Chapter = (typeof CHAPTERS)[number];

// Only verifiable claims. Add more once you have documented evidence (CE-certifikat
// från leverantör, press-omnämnanden, samarbetsavtal).
export const AUTHORITY_BADGES = [
  { label: "CE-märkt", type: "cert" },
  { label: "Svensk support", type: "org" },
  { label: "14 dagars full ångerrätt enligt Distansavtalslagen", type: "legal" },
];

export const FAQS = [
  {
    question: "Luktar det verkligen inte? Inte ens på sommaren?",
    answer:
      "Värmeförseglingen skapar en helt lufttät förslutning inom sekunder, vilket gör systemet luktfritt även under varma sommardagar. Du har 30 dagars öppet köp om du vill prova själv.",
  },
  {
    question: "Hur funkar det egentligen?",
    answer:
      "Du använder toaletten som vanligt. När du trycker på knappen aktiveras en värmeförsegling som paketerar avfallet i en biologiskt nedbrytbar påse och försluter den lufttätt. Inget vatten, inga kemikalier och ingen manuell hantering.",
  },
  {
    question: "Är det inte som PACTO-toan som luktade?",
    answer:
      "Nej. PACTO använde vanlig plastförslutning utan värme. Frihetstoa använder värmeförseglingsteknik som smälter ihop påsen till en helt lufttät enhet. Skillnaden märks framför allt i luktkontrollen.",
  },
  {
    question: "Vad gör jag med påsarna? Kan man slänga dem i vanliga soporna?",
    answer:
      "Ja. Påsarna är biologiskt nedbrytbara och slängs i vanliga hushållssoporna, precis som blöjor. Varje rulle räcker till 30 användningar.",
  },
  {
    question: "Jag har SOG idag. Är det här bättre?",
    answer:
      "SOG är en bra lösning om du vill minska användningen av kemikalier. Men kassettanken, tömningsstationerna och filterbytena finns fortfarande kvar. Med Frihetstoa försvinner hela den delen av vardagen.",
  },
  {
    question: "Behöver man speciellt toalettpapper?",
    answer:
      "Nej, använd det toalettpapper du vill. Inget behov av vattenlösligt eller speciellt poröst papper. Allt hamnar i påsen och förseglas.",
  },
  {
    question: "Passar den i min husbil/husvagn?",
    answer:
      "Frihetstoa är fristående och kräver ingen anslutning. Den är kompakt (445 × 355 mm) och den svängbara basen med 180° rotation gör att den passar även i trånga toautrymmen. Ingen installation behövs, du ställer den bara på plats.",
  },
  {
    question: "Hur lång tid räcker batteriet?",
    answer:
      "Det inbyggda litium-jon-batteriet räcker för flera dagars normal användning. Laddas enkelt via USB eller 12V-uttaget i husbilen medan du kör.",
  },
  {
    question: "Kan jag returnera om jag inte är nöjd?",
    answer:
      "Ja. Du har full ångerrätt enligt Distansavtalslagen i 14 dagar, och utöver det erbjuder vi 30 dagars öppet köp med fri retur.",
  },
];

export const TRUST_BADGES = [
  { text: "Fri leverans i hela Sverige", icon: Truck },
  { text: "30 dagars öppet köp", icon: RotateCcw },
  { text: "Svensk rådgivning", icon: Flag },
  { text: "2 års garanti", icon: Shield },
];
