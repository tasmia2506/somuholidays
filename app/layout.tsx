import type { Metadata } from "next";
import { Bebas_Neue, Lato } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import { SITE } from "@/lib/site";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const DEFAULT_TITLE = "Somu Holidays Tours and Travels | Innova, Innova Crysta & Bus Rentals in Bengaluru";
const DEFAULT_DESCRIPTION =
  "Somu Holidays Tours and Travels, Rajajinagar, Bengaluru — Innova, Innova Crysta, Swift and Etios cabs, 21/25-seater bus rentals, domestic tours, corporate & MICE travel and airport transport. Call +91 93809 58852.";

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Somu Holidays Tours and Travels",
  },
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/logo.jpeg", width: 512, height: 512, alt: SITE.name }],
  },
  twitter: {
    card: "summary",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/logo.jpeg"],
  },
};

export const viewport = {
  themeColor: "#090909",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE.name,
  alternateName: SITE.shortName,
  description: DEFAULT_DESCRIPTION,
  url: SITE.url,
  logo: `${SITE.url}/logo.jpeg`,
  image: `${SITE.url}/logo.jpeg`,
  telephone: SITE.phonePrimaryTel,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "#1406, 5th Main Rd, D-Block, 2nd Stage, Rajajinagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560010",
    addressCountry: "IN",
  },
  areaServed: "Bengaluru, Karnataka, India",
  sameAs: Object.values(SITE.social),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${lato.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // Escape "<" so this can never be broken out of with a literal "</script>"
          // if any field in JSON_LD ever comes from editable/external data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
        />
        <SmoothScroll>{children}</SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  );
}
