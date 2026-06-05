import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://nordlet.se"),
  title: "NordLet Frihetstoa | Vattenlös toalett för husbil och husvagn",
  description:
    "NordLet Frihetstoa är den vattenlösa toaletten för husbilar och husvagnar. Värmeförsegling, batteridrift och lufttätt förseglade påsar för ett friare reseliv.",
  keywords: [
    "husbilstoalett",
    "vattenlös toalett",
    "husvagn toalett",
    "RV toalett",
    "NordLet",
    "camping toalett",
  ],
  openGraph: {
    title: "NordLet Frihetstoa | Vattenlös toalett för friare husbilsliv",
    description:
      "Upptäck Frihetstoa. En vattenlös toalett med värmeförsegling, batteridrift och en mer genomtänkt vardag på vägen.",
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
        <Analytics />
      </body>
    </html>
  );
}
