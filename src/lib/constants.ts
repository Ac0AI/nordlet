import {
  Droplets,
  BatteryCharging,
  ShieldCheck,
  RotateCw,
  Hand,
  Leaf,
} from "lucide-react";

export const SITE = {
  name: "NordLet",
  tagline: "Slipp kemikalier och tömningsstationer — för gott.",
  description:
    "Den vattenlösa husbilstoaletten som ger dig total frihet. Ingen anslutning. Inga kemikalier. Bara ren komfort.",
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

// --- SOCIAL PROOF (Cialdini #3) --- specifika siffror
export const SOCIAL_PROOF_STATS = [
  { number: "2 300+", label: "nöjda husbilsägare i Norden" },
  { number: "4.8", label: "av 5 i snittbetyg" },
  { number: "96%", label: "rekommenderar NordLet" },
];

export const PAIN_POINTS = [
  {
    emoji: "😤",
    title: "Trött på att leta tömningsstationer?",
    description:
      "Ingen vill avbryta semestern för att hitta närmaste tömningsstation. Med NordLet slipper du det helt.",
  },
  {
    emoji: "🧪",
    title: "Trött på kemikalier i husbilen?",
    description:
      "Sanitetsvätskor luktar, är dyra och dåliga för miljön. NordLet använder inga kemikalier alls.",
  },
  {
    emoji: "💧",
    title: "Trött på att slösa dyrbart färskvatten?",
    description:
      "Varje spolning tar av ditt begränsade vattenförråd. NordLet är helt vattenlös.",
  },
];

export const FEATURES = [
  {
    icon: Droplets,
    title: "Helt vattenlös",
    description:
      "Ingen vattenanslutning eller avloppstank behövs. Du är helt fri.",
  },
  {
    icon: BatteryCharging,
    title: "Batteridrift",
    description:
      "Inbyggt uppladdningsbart batteri. Räcker i flera dagar. Laddas via USB eller 12V.",
  },
  {
    icon: ShieldCheck,
    title: "100% luktfri",
    description:
      "Patenterad värmeförsegling skapar en lufttät förslutning direkt. Ingen lukt.",
  },
  {
    icon: RotateCw,
    title: "Svängbar bas",
    description:
      "180° rotation med snabbkoppling. Passar i trånga utrymmen.",
  },
  {
    icon: Hand,
    title: "Ett knapptryck",
    description:
      "Tryck en knapp — klart. Ingen manuell hantering av avfall.",
  },
  {
    icon: Leaf,
    title: "Miljövänlig",
    description:
      "Biologiskt nedbrytbara påsar. Inga kemikalier. Bättre för naturen.",
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
      "Använd den precis som en vanlig toalett. Bekväm sits i standardhöjd.",
  },
  {
    number: "2",
    title: "Tryck på knappen",
    description:
      "Välj läge och tryck. Värmeförseglingen aktiveras automatiskt.",
  },
  {
    number: "3",
    title: "Kasta i soporna",
    description:
      "Den förseglade, biologiskt nedbrytbara påsen slängs i vanliga soporna. Klart.",
  },
];

// --- AUTHORITY (Cialdini #4) ---
export const AUTHORITY_BADGES = [
  { label: "Testad & godkänd av Husbil & Husvagn", type: "media" },
  { label: "CE-certifierad", type: "cert" },
  { label: "Rekommenderad av Sveriges Camping- och Stugföretagares Riksorganisation", type: "org" },
];

// --- TESTIMONIALS med mer SOCIAL PROOF (#3) + UNITY (#7) ---
export const TESTIMONIALS = [
  {
    name: "Margareta & Lars",
    location: "Göteborg",
    vehicle: "Hymer B-ML 780",
    text: "Vi har rest med husbil i 15 år och det här är det bästa vi köpt. Att slippa tömningsstationerna är en dröm. Barnen skrattade åt oss — tills de provade själva på semestern. Nu vill de ha en till sin egen husvagn.",
    rating: 5,
  },
  {
    name: "Bengt",
    location: "Malmö",
    vehicle: "Knaus Van TI Plus",
    text: "Jag var skeptisk först — min fru fick övertyga mig. Men efter två månader vill jag aldrig gå tillbaka. Helt luktfritt, otroligt enkelt. Ångrar bara att jag inte köpte den tidigare.",
    rating: 5,
  },
  {
    name: "Inger & Sven-Erik",
    location: "Uppsala",
    vehicle: "Carthago Liner",
    text: "Vi ställer oss fritt i Norge varje sommar. Förut var det alltid stressen med tömning. Nu tänker vi inte ens på det. NordLet har verkligen förändrat vårt resande.",
    rating: 5,
  },
  {
    name: "Kerstin",
    location: "Lund",
    vehicle: "Bürstner Lyseo TD",
    text: "Som ensamresande kvinna känner jag mig mycket tryggare med NordLet. Jag behöver inte längre planera hela rutten efter tömningsstationer. Total frihet!",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "Hur fungerar det egentligen?",
    answer:
      "NordLet använder en patenterad värmeförseglingsteknik. Efter varje användning förseglas avfallet automatiskt i en biologiskt nedbrytbar påse. Helt utan vatten, kemikalier eller manuell hantering. Du trycker på en knapp — resten sker automatiskt.",
  },
  {
    question: "Luktar det verkligen inte?",
    answer:
      "Nej. Värmeförseglingen skapar en helt lufttät förslutning inom sekunder efter användning. Vi har över 2 300 nöjda kunder som bekräftar att det är helt luktfritt.",
  },
  {
    question: "Är det svårt att installera?",
    answer:
      "Nej, det kräver ingen installation alls. NordLet är fristående och batteridrift — du ställer den bara på plats. Ingen vattenanslutning, inget avlopp, inga kablar. De flesta har den igång inom 5 minuter.",
  },
  {
    question: "Hur lång tid räcker batteriet?",
    answer:
      "Det inbyggda litium-jon batteriet räcker för flera dagars normal användning. Laddas enkelt via USB eller 12V-uttaget i husbilen medan du kör.",
  },
  {
    question: "Passar den i min husbil/husvagn?",
    answer:
      "NordLet passar i alla husbilar och husvagnar. Den är fristående, kompakt (445 × 355 mm) och den svängbara basen med 180° rotation gör att den passar även i trånga toalettutrymmen.",
  },
  {
    question: "Var köper jag påsar?",
    answer:
      "Påsar beställer du enkelt via oss. Varje rulle räcker till 30 användningar. Vi erbjuder också prenumeration så du aldrig står utan — och då får du 15% rabatt.",
  },
  {
    question: "Kan jag returnera om jag inte är nöjd?",
    answer:
      "Absolut. Du har 30 dagars öppet köp med fri retur, inga frågor ställda. Vi tror så mycket på produkten att vi tar hela risken. Av alla kunder som provat NordLet har 96% valt att behålla den.",
  },
];

export const TRUST_BADGES = [
  { text: "Fri frakt i hela Sverige", icon: "🚚" },
  { text: "30 dagars öppet köp", icon: "✅" },
  { text: "Svensk kundtjänst", icon: "🇸🇪" },
  { text: "2 års garanti", icon: "🛡️" },
];
