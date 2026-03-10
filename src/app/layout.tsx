import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NordLet — Vattenlös husbilstoalett | Slipp kemikalier & tömningsstationer",
  description:
    "NordLet är den prisbelönta vattenlösa toaletten för husbilar och husvagnar. Batteridrift, värmeförsegling och biologiskt nedbrytbara påsar. Fri frakt. 30 dagars öppet köp.",
  keywords: [
    "husbilstoalett",
    "vattenlös toalett",
    "husvagn toalett",
    "RV toalett",
    "NordLet",
    "camping toalett",
  ],
  openGraph: {
    title: "NordLet — Slipp kemikalier & tömningsstationer för gott",
    description:
      "Upptäck NordLet — den vattenlösa toaletten som ger dig total frihet i husbilen. Batteridrift. Luktfri. 30 dagars öppet köp.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${dmSerif.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
