import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Så fungerar Frihetstoa | Vattenlös toalett utan kassettank",
  description:
    "Frihetstoa förklarad i fyra steg. Från installation till värmeförsegling och tömning i hushållssoporna. Så ersätts kassettanken med en rullfolie och ett knapptryck.",
  openGraph: {
    title: "Så fungerar Frihetstoa",
    description:
      "Fyra steg som visar hur den vattenlösa toaletten ersätter kassettank och tömningsstation.",
    locale: "sv_SE",
    type: "article",
  },
};

export default function SaFungerarDetLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
