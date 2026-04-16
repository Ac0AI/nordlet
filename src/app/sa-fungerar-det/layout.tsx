import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Så fungerar Frihetstoa | Vattenlös toalett utan kassettank",
  description:
    "Frihetstoa förklarad i fyra kapitel. Från installation till värmeförsegling och tömning i hushållssoporna. Så ersätts kassettanken med en rullfolie och ett knapptryck.",
  openGraph: {
    title: "Så fungerar Frihetstoa",
    description:
      "Fyra kapitel om hur den vattenlösa toaletten ersätter kassettank och tömningsstation.",
    locale: "sv_SE",
    type: "article",
  },
};

export default function SaFungerarDetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
