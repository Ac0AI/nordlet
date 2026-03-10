import {
  Droplets,
  BatteryCharging,
  ShieldCheck,
  RotateCw,
  Hand,
  Leaf,
  Thermometer,
} from "lucide-react";

export const SITE = {
  name: "NordLet",
  category: "Frihetstoan",
  tagline: "Frihetstoan. Slipp kassettanken, toamedlet och tömningsstationerna.",
  description:
    "Nordens första vattenlösa husbilstoa. Ingen kassettank att tömma. Inga kemikalier. Ingen lukt. Bara frihet.",
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
  { number: "2 300+", label: "har valt Frihetstoan" },
  { number: "4.8", label: "av 5 i snittbetyg" },
  { number: "96%", label: "rekommenderar till andra" },
];

export const PAIN_POINTS = [
  {
    emoji: "😤",
    title: "Trött på att jaga tömningsstationer?",
    description:
      "Planera rutten efter tömningsställen istället för dit du faktiskt vill åka? Med Frihetstoan slipper du kassettanken helt.",
  },
  {
    emoji: "🧪",
    title: "Trött på toamedel och kemikalier?",
    description:
      "Sanitetsvätskor som luktar, kostar pengar och är dåliga för miljön. Frihetstoan använder noll kemikalier.",
  },
  {
    emoji: "🤢",
    title: "Trött på lukten i toautrymmet?",
    description:
      "Alla husbilsägare känner igen den där doften av kemikalie blandat med... ja. Med Frihetstoan finns ingen lukt. Punkt.",
  },
];

export const FEATURES = [
  {
    icon: Droplets,
    title: "Ingen kassettank",
    description:
      "Ingen svartvattentank att tömma. Ingen vattenanslutning. Ingen avloppskoppling. Bara frihet.",
  },
  {
    icon: Thermometer,
    title: "Luktfri. Även i 30-gradersvärme.",
    description:
      "Värmeförseglingen skapar en lufttät förslutning inom sekunder. Ingen lukt, inte ens mitt i sommaren.",
  },
  {
    icon: BatteryCharging,
    title: "Batteridrift",
    description:
      "Inbyggt uppladdningsbart batteri. Räcker i flera dagar. Laddas via USB eller 12V i husbilen.",
  },
  {
    icon: ShieldCheck,
    title: "Inga kemikalier. Noll.",
    description:
      "Slipp toamedel, sanitetsvätskor och allt som hör till. Bättre för dig och naturen.",
  },
  {
    icon: RotateCw,
    title: "Svängbar bas",
    description:
      "180° rotation med snabbkoppling. Passar även i trånga toautrymmen.",
  },
  {
    icon: Hand,
    title: "Ett knapptryck",
    description:
      "Tryck en knapp, klart. Ingen manuell hantering. Inget pysslande med kassetten.",
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
      "Använd den precis som din vanliga toa. Bekväm sits i standardhöjd.",
  },
  {
    number: "2",
    title: "Tryck på knappen",
    description:
      "Välj läge och tryck. Värmeförseglingen aktiveras automatiskt och förseglar lufttätt.",
  },
  {
    number: "3",
    title: "Släng i soporna",
    description:
      "Den förseglade påsen är biologiskt nedbrytbar och slängs i vanliga hushållssoporna. Klart.",
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
    text: "Vi har rest med husbil i 15 år och det här är det bästa vi köpt. Att slippa kassettanken och tömningsstationerna är en dröm. Vi hade SOG innan och tyckte det var bra, men det här är en helt annan nivå.",
    rating: 5,
  },
  {
    name: "Bengt",
    location: "Malmö",
    vehicle: "Knaus Van TI Plus",
    text: "Jag var skeptisk först. Tänkte 'ännu en grej som luktar efter två veckor'. Men efter en hel sommar kan jag säga: det luktar inte. Inte ens i 30-gradersvärmen i juli. Min fru är lika förvånad som jag.",
    rating: 5,
  },
  {
    name: "Inger & Sven-Erik",
    location: "Uppsala",
    vehicle: "Carthago Liner",
    text: "Vi ställer oss fritt i Norge varje sommar. Förut var det alltid stressen med att hitta tömning. Nu tänker vi inte ens på toan. Vi slänger påsen i soppåsen och kör vidare.",
    rating: 5,
  },
  {
    name: "Kerstin",
    location: "Lund",
    vehicle: "Bürstner Lyseo TD",
    text: "Som ensamresande kvinna slipper jag nu pyssla med kassetten och leta tömningsstationer. Jag bestämmer vart jag vill, inte var närmaste tömningsställe finns. Total frihet.",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "Luktar det verkligen inte? Inte ens på sommaren?",
    answer:
      "Vi vet att det låter för bra för att vara sant. Många har testat liknande lösningar och blivit besvikna. Men Frihetstoan använder värmeförsegling som skapar en 100% lufttät förslutning inom sekunder. Det gör den luktfri även i 30+ graders värme. Vi har över 2 300 kunder som bekräftar det. Och du har 30 dagars öppet köp om du vill testa själv.",
  },
  {
    question: "Hur funkar det egentligen?",
    answer:
      "Du använder toan precis som vanligt. När du trycker på knappen aktiveras en värmeförsegling som paketerar avfallet i en biologiskt nedbrytbar påse. Helt lufttätt. Inga kemikalier, inget vatten, ingen manuell hantering. Påsen slänger du i vanliga hushållssoporna.",
  },
  {
    question: "Är det inte som PACTO-toan som luktade?",
    answer:
      "Nej. PACTO använde vanlig plastförslutning utan värme. Frihetstoan använder en patenterad värmeförseglingsteknik som smälter ihop påsen till en helt lufttät enhet. Det är som att vakuumförpacka, inte bara knyta ihop en påse. Skillnaden i luktfrihet är enorm.",
  },
  {
    question: "Vad gör jag med påsarna? Kan man slänga dem i vanliga soporna?",
    answer:
      "Ja. Påsarna är biologiskt nedbrytbara och slängs i vanliga hushållssoporna, precis som blöjor. Varje rulle räcker till 30 användningar.",
  },
  {
    question: "Jag har SOG idag. Är det här bättre?",
    answer:
      "SOG är en bra lösning för att minska kemikalieanvändningen. Men du behöver fortfarande kassettanken, fortfarande tömningsstationer, och fortfarande byta kolfilter. Med Frihetstoan slipper du allt det. Ingen kassettank. Ingen tömning. Inget filter. Bara en påse i soporna.",
  },
  {
    question: "Behöver man speciellt toalettpapper?",
    answer:
      "Nej, använd det toalettpapper du vill. Inget behov av vattenlösligt eller speciellt poröst papper. Allt hamnar i påsen och förseglas.",
  },
  {
    question: "Passar den i min husbil/husvagn?",
    answer:
      "Frihetstoan är fristående och kräver ingen anslutning. Den är kompakt (445 × 355 mm) och den svängbara basen med 180° rotation gör att den passar även i trånga toautrymmen. Ingen installation behövs, du ställer den bara på plats.",
  },
  {
    question: "Hur lång tid räcker batteriet?",
    answer:
      "Det inbyggda litium-jon batteriet räcker för flera dagars normal användning. Laddas enkelt via USB eller 12V-uttaget i husbilen medan du kör.",
  },
  {
    question: "Kan jag returnera om jag inte är nöjd?",
    answer:
      "Absolut. Du har 30 dagars öppet köp med fri retur, inga frågor ställda. Vi tror så mycket på Frihetstoan att vi tar hela risken. Av alla som provat har 96% valt att behålla den.",
  },
];

export const TRUST_BADGES = [
  { text: "Fri frakt i hela Sverige", icon: "🚚" },
  { text: "30 dagars öppet köp", icon: "✅" },
  { text: "Svensk kundtjänst", icon: "🇸🇪" },
  { text: "2 års garanti", icon: "🛡️" },
];
