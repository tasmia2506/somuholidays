import type { FaqItem } from "@/components/FaqSection/FaqSection";

export interface PopularRoute {
  label: string;
  href?: string;
}

export interface LocationSeo {
  slug: string; // matches the app/ folder name, e.g. "taxi-service-bangalore"
  name: string; // "Bangalore"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localCab: string;
  airportCab: string;
  outstationCab: string;
  sightseeingCab: string;
  popularRoutes: PopularRoute[];
  faqs: FaqItem[];
}

// Somu Holidays is based in Rajajinagar, Bengaluru and operates out of this one
// city — so Bangalore is the only genuine "local service" location page. Other
// cities are covered as outstation route pages (see seo-routes.ts) rather than
// standalone location pages, since Somu doesn't run a local fleet in them.
export const SEO_LOCATIONS: LocationSeo[] = [
  {
    slug: "taxi-service-bangalore",
    name: "Bangalore",
    metaTitle: "Bangalore Taxi Service | Local, Airport & Outstation Cabs",
    metaDescription:
      "Chauffeur-driven taxi service in Bangalore from Somu Holidays — local cabs, airport transfers, outstation trips and sightseeing tours. Transparent per-km pricing, AC fleet, 24×7 support.",
    h1: "Bangalore Taxi Service",
    intro:
      "Somu Holidays runs a chauffeur-driven taxi service out of Rajajinagar, Bengaluru — covering everyday local cabs, airport drops and pickups, outstation trips across Karnataka and neighbouring states, and city sightseeing. Every vehicle is AC-fitted, serviced on a schedule, and comes with a driver — book by call, WhatsApp or the form on this site.",
    localCab:
      "Need a cab within Bangalore — an office commute, a wedding, a hospital visit or a half-day of errands? We send a chauffeur-driven sedan or SUV to any pickup point in the city, billed per kilometre with no hidden charges.",
    airportCab:
      "Pickups and drops to Kempegowda International Airport (KIA) are available round the clock. Share your flight time and pickup address and we'll plan the drive with enough buffer for check-in.",
    outstationCab:
      "For trips out of the city — a day run to Mysuru, a weekend in Coorg or a multi-day holiday further afield — our outstation cabs come with an experienced highway driver, per-km billing and a route planned before you leave.",
    sightseeingCab:
      "Visiting Bangalore and want a car for the day? We run half-day and full-day sightseeing cabs covering Lalbagh, Cubbon Park, Bangalore Palace, ISKCON and the city's shopping districts, with the vehicle waiting at each stop.",
    popularRoutes: [
      { label: "Bangalore to Mysuru Cab", href: "/bangalore-to-mysore-cab" },
      { label: "Bangalore to Coorg Cab", href: "/bangalore-to-coorg-cab" },
      { label: "Bangalore to Hassan Cab", href: "/bangalore-to-hassan-cab" },
      { label: "Bangalore to Chikkamagaluru Cab", href: "/bangalore-to-chikkamagaluru-cab" },
      { label: "Bangalore to Hampi Cab", href: "/bangalore-to-hampi-cab" },
      { label: "Bangalore to Gokarna Cab", href: "/bangalore-to-gokarna-cab" },
      { label: "Bangalore to Udupi Cab", href: "/bangalore-to-udupi-cab" },
      { label: "Bangalore to Dharmasthala Cab", href: "/bangalore-to-dharmasthala-cab" },
      { label: "Bangalore to Murudeshwara" },
      { label: "Bangalore to Shivamogga" },
      { label: "Bangalore to Tumakuru" },
      { label: "Bangalore to Mandya" },
      { label: "Bangalore to Ramanagara" },
      { label: "Bangalore to Chitradurga" },
      { label: "Bangalore to Ballari" },
    ],
    faqs: [
      {
        q: "Does Somu Holidays offer local taxi service within Bangalore?",
        a: "Yes. We send a chauffeur-driven sedan or SUV anywhere within Bangalore, billed per kilometre — useful for office travel, events, hospital visits or a day of city errands.",
      },
      {
        q: "Do you pick up and drop at Kempegowda International Airport?",
        a: "Yes, 24×7. Share your flight details and pickup address and we'll time the drive with enough buffer before your flight.",
      },
      {
        q: "Can I book an outstation cab from Bangalore for a day trip or a multi-day holiday?",
        a: "Yes — outstation cabs for day trips like Mysuru or multi-day holidays to Coorg, Chikkamagaluru, Hampi, Gokarna and more are all available, with an experienced highway driver and per-km billing.",
      },
      {
        q: "What vehicles are available for a Bangalore taxi booking?",
        a: "Swift and Etios sedans for a quick ride, Innova and Innova Crysta for families, and 21/25-seater AC buses for larger groups — every vehicle is chauffeur-driven and AC-fitted.",
      },
      {
        q: "How do I book a Bangalore taxi with Somu Holidays?",
        a: "Call, WhatsApp or use the booking form on this site with your pickup point, destination and travel date — we'll confirm the vehicle and price directly with you.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationSeo | undefined {
  return SEO_LOCATIONS.find((l) => l.slug === slug);
}
