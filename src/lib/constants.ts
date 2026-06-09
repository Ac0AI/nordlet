import {
  Droplets,
  BatteryCharging,
  ShieldCheck,
  Hand,
  Thermometer,
  Truck,
  RotateCcw,
  Flag,
  Shield,
  Route,
  FlaskConical,
  Wind,
} from "lucide-react";

export const SITE = {
  name: "NordLet",
  category: "NordLet Pro",
  tagline:
    "NordLet Pro. Vattenlös enkelhet för husbil, husvagn, båt och landställe.",
  description:
    "Fristående vattenlös toalett för husbil, husvagn, båt och platser utan avlopp. Värmeförsegling, batteridrift och en renare vardag utan kassettank eller flytande sanitetsvätska att dosera.",
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
  { label: "Guider", href: "/guider" },
  { label: "Beställ", href: "/#bestall" },
];

// Honest product-fact "stats" replacing fabricated popularity numbers.
export const SOCIAL_PROOF_STATS = [
  { number: "0 L", label: "Vatten" },
  { number: "30 d", label: "Öppet köp" },
  { number: "CE", label: "Europeisk säkerhet" },
];

export const PAIN_POINTS = [
  {
    icon: Route,
    title: "Trött på att planera efter tömningsstationer?",
    description:
      "När rutten styrs av tömningsplatser försvinner en del av friheten. Med NordLet Pro slipper du kassettanken helt.",
  },
  {
    icon: FlaskConical,
    title: "Trött på toamedel och kemikalier?",
    description:
      "Sanitetsvätskor kostar, luktar och följer med i varje resa. Med NordLet Pro slipper du den flytande sanitetsvätskan helt.",
  },
  {
    icon: Wind,
    title: "Trött på lukten i toautrymmet?",
    description:
      "Den typiska lukten från traditionella lösningar är svår att missa. Med NordLet Pro förseglas avfallet lufttätt inom sekunder.",
  },
];

export const FEATURES = [
  {
    icon: Droplets,
    title: "Ingen kassettank",
    description:
      "Ingen svartvattentank, ingen vattenanslutning och ingen avloppskoppling. Bara en mer genomtänkt lösning för platser där avlopp saknas.",
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
      "Inbyggt uppladdningsbart batteri som räcker i flera dagar. Laddas enkelt via USB eller 12V där du använder den.",
  },
  {
    icon: ShieldCheck,
    title: "Ingen sanitetsvätska att dosera",
    description:
      "Ingen flytande sanitetsvätska att hälla, mäta eller dosera. Ett granulat binder vätska och lukt automatiskt - du sköter inget själv.",
  },
  {
    icon: Hand,
    title: "Ett knapptryck räcker",
    description:
      "Välj läge och låt systemet arbeta. Ingen manuell tömning av kassett och inget onödigt handarbete.",
  },
];

export const SPECS = [
  { label: "Mått", value: "355 × 488 × 515 mm (b × d × h)" },
  { label: "Strömförsörjning", value: "12V, 70W" },
  { label: "Batteri", value: "Litium-jon, 5 200 mAh" },
  { label: "Laddning", value: "USB eller 12V" },
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
    lead: "NordLet Pro är fristående. Inget behöver anslutas, dras eller borras.",
    body: "När du packar upp första gången lägger du i folierullen, sätter tillbaka locket och trycker Reset. Det tar en minut. Sen är den redo hela din resa. När LED-lampan säger till byter du rullen på samma sätt. Det är hela installationen.",
    stat: "30 användningar per rulle. Ungefär en resevecka för två.",
    images: {
      primary: "/images/how-it-works/steg1-primary.png",
      secondary: "/images/how-it-works/steg1-secondary.png",
      primaryAlt: "Hand som lyfter locket på NordLet Pro",
      secondaryAlt: "Finger som trycker på NordLet Pros kontrollpanel",
    },
  },
  {
    number: "02",
    slug: "anvandning",
    title: "Precis som hemma. Bara utan vatten.",
    lead: "Sätt dig, gör ditt, stäng locket, tryck på knappen.",
    body: "Sitsen är i standardhöjd och känns som en vanlig toalett. När du är klar stänger du locket och väljer litet eller stort program på kontrollpanelen. Du behöver inte hälla i något toamedel, inte mäta ut någon vätska och inte spola. NordLet Pro sköter resten själv.",
    stat: "Dubbelt läge för flytande och fast. Ingen sanitetsvätska att dosera.",
    images: {
      primary: "/images/how-it-works/steg2-primary.png",
      secondary: "/images/how-it-works/steg2-secondary.png",
      primaryAlt: "NordLet Pro i ett kompakt toautrymme med varmt dagsljus",
      secondaryAlt: "Närbild av NordLet Pros kontrollpanel och lägesknappar",
    },
  },
  {
    number: "03",
    slug: "forseglingen",
    title: "Det tysta jobbet under locket",
    lead: "Det här är den del som gör att du aldrig behöver tömma en kassettank igen.",
    body: "När du tryckt på knappen drar NordLet Pro ihop folien runt innehållet och värmeförseglar den till en lufttät påse. Varje besök får sin egen förslutning. När påsen är förseglad matas ny, ren folie automatiskt fram och skålen är klar för nästa gång. Inget toamedel att dosera själv, ingen doft som väntar på dig i skåpet, ingen mekanik som du själv behöver hantera.",
    stat: "Lufttät försegling - även under varma dagar när luften står still.",
    images: {
      primary: "/images/how-it-works/steg3-primary.png",
      secondary: "/images/how-it-works/steg3-secondary.png",
      primaryAlt: "Genomskärning: avfallet förseglas till en lufttät påse",
      secondaryAlt: "Genomskärning: ny ren folie matas fram för nästa gång",
    },
  },
  {
    number: "04",
    slug: "tomning",
    title: "Från toaletten till hushållssoporna",
    lead: "Inga tömningsstationer. Inga söndagsköer. Inga sanitetsvätskor.",
    body: "När uppsamlingslådan är full tänds LED-indikatorn på kontrollpanelen. Dra ut lådan i nederdelen. Eftersom varje påse är förseglad för sig finns ingen lukt och ingen risk för spill. Du lägger dem i vanliga hushållssoporna - vid nästa rastplats, på campingen eller hemma i köket när resan är slut.",
    stat: "Varje påse förseglas för sig och går i det vanliga restavfallet.",
    images: {
      primary: "/images/how-it-works/steg4-primary.png",
      secondary: "/images/how-it-works/steg4-secondary.png",
      primaryAlt: "Uppsamlingslådan utdragen med synliga förseglade påsar",
      secondaryAlt: "Hand släpper en förseglad påse i en vanlig soptunna",
    },
    imageNote:
      "Bild för illustration – i verkligheten ligger påsarna lösare i lådan.",
  },
] as const;

export type Chapter = (typeof CHAPTERS)[number];

// Riktiga omdömen från de första testkunderna (juni 2026). Äkta personer,
// äkta citat – inga påhittade siffror. Samtliga gav 5/5.
export const REVIEWS = [
  {
    name: "Björn Ljung",
    context: "Husvagnsägare",
    rating: 5,
    quote:
      "Jag använder mycket hellre den här än den inbyggda toaletten i husvagnen. Det ger en helt annan frihet – jag slipper oroa mig för tanken och det känns mycket fräschare. Inne i husvagnen när jag behöver, annars går jag bara till en lämplig plats i närheten.",
  },
  {
    name: "Robert Eriksson",
    context: "Husbilsägare sedan flera år",
    rating: 5,
    quote:
      "Kanske inte livsförändrande – men i allra högsta grad semesterförändrande. Och snart pensionsförändrande.",
  },
  {
    name: "Inge-Gerd Karlsson",
    context: "Landställe utan avlopp",
    rating: 5,
    quote:
      "Utedasset luktade och var svårt att hålla rent. Nu använder jag den här i stället – inomhus eller utomhus beroende på vind och behov. En ren lycka för mig som bor avskilt.",
  },
];

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
      "Du använder toaletten som vanligt. När du aktiverar förseglingen paketeras avfallet i en påse som försluts lufttätt. Inget vatten att spola, ingen sanitetsvätska att dosera och ingen manuell hantering.",
  },
  {
    question: "Är det inte som PACTO-toan som luktade?",
    answer:
      "Nej. PACTO använde vanlig plastförslutning utan värme. NordLet Pro använder värmeförseglingsteknik som smälter ihop påsen till en helt lufttät enhet. Skillnaden märks framför allt i luktkontrollen.",
  },
  {
    question: "Vad gör jag med påsarna? Kan man slänga dem i vanliga soporna?",
    answer:
      "Ja. Påsarna slängs i vanliga hushållssoporna, precis som blöjor. Varje rulle räcker till 30 användningar.",
  },
  {
    question: "Jag har SOG idag. Är det här bättre?",
    answer:
      "SOG är en bra lösning om du vill minska användningen av kemikalier. Men kassettanken, tömningsstationerna och filterbytena finns fortfarande kvar. Med NordLet Pro försvinner hela den delen av vardagen.",
  },
  {
    question: "Behöver man speciellt toalettpapper?",
    answer:
      "Nej, använd det toalettpapper du vill. Inget behov av vattenlösligt eller speciellt poröst papper. Allt hamnar i påsen och förseglas.",
  },
  {
    question: "Passar den i min husbil, husvagn eller båt?",
    answer:
      "NordLet Pro är fristående och kräver ingen vatten- eller avloppsanslutning. Den är kompakt (355 mm bred, 488 mm djup) och passar i många trånga toautrymmen i husbil, husvagn, båt, stuga eller landställe. Kontrollera måtten och ställ den på en stabil plats.",
  },
  {
    question: "Hur lång tid räcker batteriet?",
    answer:
      "Det inbyggda litium-jon-batteriet räcker för flera dagars normal användning. Laddas enkelt via USB eller 12V-uttag där du använder den.",
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
