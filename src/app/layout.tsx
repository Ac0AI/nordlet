import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { PostHogAnalytics } from "@/components/analytics/PostHogAnalytics";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { BuyModal } from "@/components/BuyModal";
import { SITE } from "@/lib/constants";
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
  title: "NordLet Pro | Vattenlös toalett för husbil, husvagn och båt",
  description:
    "NordLet Pro är en fristående vattenlös toalett för husbil, husvagn, båt och platser utan avlopp. Värmeförsegling, batteridrift och lufttäta påsar.",
  keywords: [
    "husbilstoalett",
    "vattenlös toalett",
    "husvagn toalett",
    "båttoalett",
    "toalett båt",
    "fritidshus toalett",
    "RV toalett",
    "NordLet",
    "camping toalett",
  ],
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "NordLet" }],
  publisher: "NordLet",
  openGraph: {
    title: "NordLet Pro | Vattenlös toalett för resa och fritid",
    description:
      "Upptäck NordLet Pro. En fristående vattenlös toalett med värmeförsegling för husbil, husvagn, båt och platser utan avlopp.",
    url: "https://nordlet.se",
    locale: "sv_SE",
    type: "website",
    siteName: "NordLet",
  },
  twitter: {
    card: "summary_large_image",
    title: "NordLet Pro | Vattenlös toalett för resa och fritid",
    description:
      "Fristående vattenlös toalett med värmeförsegling för husbil, husvagn, båt och platser utan avlopp.",
  },
};

// Webbplatsövergripande entitet för sökmotorer och AI-sökmotorer (GEO).
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nordlet.se/#organization",
  name: "NordLet",
  legalName: SITE.company.name,
  ...(SITE.company.orgNr ? { taxID: SITE.company.orgNr } : {}),
  url: "https://nordlet.se",
  logo: "https://nordlet.se/icon.svg",
  email: SITE.email,
  description:
    "NordLet säljer NordLet Pro, en fristående vattenlös toalett med värmeförsegling för husbil, husvagn, båt och platser utan avlopp.",
  areaServed: "SE",
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "customer support",
    availableLanguage: "Swedish",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
        <Analytics />
        <MetaPixel />
        <PostHogAnalytics />
        <BuyModal />
        <CookieConsent />
      </body>
    </html>
  );
}
