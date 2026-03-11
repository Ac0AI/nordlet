import {
  Droplets,
  BatteryCharging,
  ShieldCheck,
  RotateCw,
  Hand,
  Thermometer,
} from "lucide-react";

export const SITE = {
  name: "NordLet",
  category: "Frihetstoa",
  tagline: "Frihetstoa. Vattenlös enkelhet för ett friare husbilsliv.",
  description:
    "Nordens vattenlösa toalett för husbilar och husvagnar. Värmeförsegling, batteridrift och en renare resa utan kassettank eller kemikalier.",
  email: "info@nordlet.se",
  phone: "+46 70 123 45 67",
};

export const NAV_LINKS = [
  { label: "Så fungerar det", href: "#sa-fungerar-det" },
  { label: "Fördelar", href: "#fordelar" },
  { label: "Omdömen", href: "#omdomen" },
  { label: "Vanliga frågor", href: "#faq" },
  { label: "Beställ", href: "#bestall" },
];

export const SOCIAL_PROOF_STATS = [
  { number: "2 300+", label: "har valt Frihetstoa" },
  { number: "4.8", label: "av 5 i snittbetyg" },
  { number: "96%", label: "rekommenderar till andra" },
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

export const STEPS = [
  {
    number: "1",
    title: "Sätt dig",
    description:
      "Använd den precis som din vanliga toalett. Bekväm sits i standardhöjd.",
  },
  {
    number: "2",
    title: "Tryck på knappen",
    description:
      "Välj läge och tryck. Värmeförseglingen aktiveras automatiskt och försluter varje påse lufttätt.",
  },
  {
    number: "3",
    title: "Lägg i hushållssoporna",
    description:
      "Den förseglade, biologiskt nedbrytbara påsen kastas i vanliga hushållssoporna. Enkelt och hygieniskt.",
  },
];

export const AUTHORITY_BADGES = [
  { label: "Testad & godkänd av Husbil & Husvagn", type: "media" },
  { label: "CE-certifierad", type: "cert" },
  { label: "Rekommenderad av Sveriges Camping- och Stugföretagares Riksorganisation", type: "org" },
];

export const TESTIMONIALS = [
  {
    name: "Margareta & Lars",
    location: "Göteborg",
    vehicle: "Hymer B-ML 780",
    text: "Efter femton år med husbil är det här ett av våra mest uppskattade köp. Att slippa kassettanken och tömningsstationerna har gjort resandet märkbart enklare. Vi hade SOG tidigare, men Frihetstoa känns som en betydligt mer genomtänkt lösning.",
    rating: 5,
  },
  {
    name: "Bengt",
    location: "Malmö",
    vehicle: "Knaus Van TI Plus",
    text: "Jag var skeptisk i början, men efter en hel sommar är jag övertygad. Förseglingen håller tätt även under varma veckor i juli, och hela lösningen känns mer genomarbetad än de alternativ vi tittade på tidigare.",
    rating: 5,
  },
  {
    name: "Inger & Sven-Erik",
    location: "Uppsala",
    vehicle: "Carthago Liner",
    text: "Vi står ofta fritt i Norge under sommaren och brukade alltid ha nästa tömning i bakhuvudet. Med Frihetstoa har den detaljen försvunnit helt. Resandet känns lugnare, friare och betydligt mer bekvämt.",
    rating: 5,
  },
  {
    name: "Kerstin",
    location: "Lund",
    vehicle: "Bürstner Lyseo TD",
    text: "Som ensamresenär uppskattar jag framför allt enkelheten. Jag slipper hantera kassett och leta tömningsstationer, och kan planera dagarna helt efter vart jag vill åka. Det gör stor skillnad i praktiken.",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "Luktar det verkligen inte? Inte ens på sommaren?",
    answer:
      "Många är skeptiska första gången de hör om konceptet. Skillnaden är att Frihetstoa använder värmeförsegling som skapar en helt lufttät förslutning inom sekunder. Det gör systemet luktfritt även under varma sommardagar. Över 2 300 kunder har redan valt Frihetstoa, och du har 30 dagars öppet köp om du vill prova själv.",
  },
  {
    question: "Hur funkar det egentligen?",
    answer:
      "Du använder toaletten som vanligt. När du trycker på knappen aktiveras en värmeförsegling som paketerar avfallet i en biologiskt nedbrytbar påse och försluter den lufttätt. Inget vatten, inga kemikalier och ingen manuell hantering.",
  },
  {
    question: "Är det inte som PACTO-toan som luktade?",
    answer:
      "Nej. PACTO använde vanlig plastförslutning utan värme. Frihetstoa använder en patenterad värmeförseglingsteknik som smälter ihop påsen till en helt lufttät enhet. Skillnaden märks framför allt i luktkontrollen.",
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
      "Det inbyggda litium-jon batteriet räcker för flera dagars normal användning. Laddas enkelt via USB eller 12V-uttaget i husbilen medan du kör.",
  },
  {
    question: "Kan jag returnera om jag inte är nöjd?",
    answer:
      "Absolut. Du har 30 dagars öppet köp med fri retur. Vi vill att du ska kunna prova Frihetstoa i lugn och ro, och 96% av dem som testar väljer att behålla den.",
  },
];

export const TRUST_BADGES = [
  { text: "Fri leverans i hela Sverige", icon: "🚚" },
  { text: "30 dagars öppet köp", icon: "✅" },
  { text: "Svensk rådgivning", icon: "🇸🇪" },
  { text: "2 års garanti", icon: "🛡️" },
];
