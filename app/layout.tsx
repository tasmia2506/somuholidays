import type { Metadata } from "next";
import Link from "next/link";
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  colorScheme: "light",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      alternateName: SITE.shortName,
      description: DEFAULT_DESCRIPTION,
      url: SITE.url,
      logo: `${SITE.url}/logo.jpeg`,
      image: `${SITE.url}/logo.jpeg`,
      telephone: SITE.phonePrimaryTel,
      email: SITE.email,
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Credit Card, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        streetAddress: "#1406, 5th Main Rd, D-Block, 2nd Stage, Rajajinagar",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560010",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "12.9897",
        longitude: "77.5539",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        "Bengaluru",
        "Rajajinagar",
        "Kempegowda International Airport",
        "Karnataka",
        "South India",
      ],
      sameAs: Object.values(SITE.social),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "148",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Transportation and Tour Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "21 Seater Bus Rental in Bangalore",
              description: "Luxury 21-seater AC bus rental for corporate, wedding, and outstation trips at ₹37/km.",
              url: `${SITE.url}/21-seater-bus-rental-bangalore`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Toyota Innova Crysta Cab Rental",
              description: "Premium 7-seater MUV rental for family travel and airport drops at ₹20/km.",
              url: `${SITE.url}/fleet`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bangalore Taxi Service",
              description: "Local, airport, and outstation chauffeur-driven cab service.",
              url: `${SITE.url}/taxi-service-bangalore`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#business` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${bebasNeue.variable} ${lato.variable}`}>
      <body>
        <noscript>
          <div style={{ padding: "20px", background: "#fdf8f4", color: "#111", fontFamily: "sans-serif" }}>
            <h2>Somu Holidays Tours and Travels — Bengaluru</h2>
            <p>
              Luxury 21-seater bus rentals, 25-seater AC buses, Toyota Innova Crysta, and chauffeur-driven cabs based in
              Rajajinagar, Bengaluru. Call +91 93809 58852 or email somuholidaysrajajinagar@gmail.com.
            </p>
            <ul>
              <li><Link href="/21-seater-bus-rental-bangalore">21 Seater Bus Rental in Bangalore</Link></li>
              <li><Link href="/fleet">Our Complete Fleet (Swift, Etios, Innova, Crysta, Buses)</Link></li>
              <li><Link href="/destinations">Holiday Tour Packages (Mysuru, Coorg, Ooty, Hampi, Chikmagalur)</Link></li>
              <li><Link href="/taxi-service-bangalore">Bangalore Taxi Service</Link></li>
              <li><Link href="/blog">Travel &amp; Bus Rental Blog</Link></li>
              <li><Link href="/contact">Contact &amp; Bookings</Link></li>
            </ul>
          </div>
        </noscript>
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
