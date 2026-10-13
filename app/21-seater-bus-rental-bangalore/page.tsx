import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import Icon, { type IconName } from "@/components/Icon";
import FaqSection, { type FaqItem } from "@/components/FaqSection/FaqSection";
import CtaSection from "@/components/CtaSection/CtaSection";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import { SITE, waLink } from "@/lib/site";
import styles from "./page.module.css";

const PAGE_TITLE = "21 Seater Bus Rental in Bangalore | Luxury AC Bus Hire ₹37/km";
const PAGE_DESC =
  "Hire a 21-seater luxury AC bus rental in Bangalore at ₹37/km. Pushback 2x1 seats, luggage boot, verified highway chauffeur, and doorstep Bangalore pickup.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/21-seater-bus-rental-bangalore" },
  keywords: [
    "21 seater bus rental in bangalore",
    "21 seater bus on rent in bangalore",
    "21 seater ac bus hire bangalore",
    "21 seater luxury bus bangalore",
    "21 seater bus rate per km bangalore",
    "bangalore to mysore 21 seater bus",
    "bangalore to coorg 21 seater bus",
    "wedding bus hire bangalore",
    "corporate bus rental bangalore",
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${SITE.url}/21-seater-bus-rental-bangalore`,
    type: "website",
    images: [{ url: `${SITE.url}/21 SEATER.jpeg`, width: 1200, height: 675, alt: "21 Seater Luxury AC Bus Rental in Bangalore with Pushback Seats - Somu Holidays" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [`${SITE.url}/21 SEATER.jpeg`],
  },
};

const FAQS: FaqItem[] = [
  {
    q: "How much does a 21-seater bus rental cost in Bangalore?",
    a: "Somu Holidays rents out 21-seater luxury AC buses at a transparent rate of ₹37 per kilometre with a standard 300 km daily minimum billing threshold and an ₹800 daily driver allowance (bata). Fastag toll charges, interstate permits, and parking are billed at actuals with zero hidden surcharges.",
  },
  {
    q: "What seating arrangement and comfort features does the 21-seater bus provide?",
    a: "Our 21-seater buses feature an ergonomic 2x1 executive pushback seating configuration (single aisle seat on the right, twin seats on the left) with 32 inches of legroom, 135-degree recline, individual roof-mounted AC airflow vents, mobile charging ports, and a high-fidelity Bluetooth audio system.",
  },
  {
    q: "How much luggage can a 21-seater bus accommodate?",
    a: "The bus provides a dedicated undercarriage luggage compartment with over 185 cubic feet of storage, easily accommodating 20 to 24 full-size trolley suitcases. Additionally, interior overhead parcel racks hold backpacks, handbags, and snacks safely off the aisle.",
  },
  {
    q: "Which areas in Bangalore do you provide doorstep pickup from?",
    a: "We offer doorstep pickup across all 8 BBMP zones of Bengaluru, including Rajajinagar (our central dispatch hub), Kempegowda International Airport (BLR), Whitefield, Electronic City, Koramangala, Indiranagar, Majestic, Jayanagar, Marathahalli, Hebbal, and Yelahanka.",
  },
  {
    q: "Is the 21-seater bus allowed on mountain roads and hill stations like Coorg and Ooty?",
    a: "Yes. Our 21-seater buses are built on heavy-duty commercial chassis engineered for steep gradients, hairpin bends, and ghat passes. They are driven by licensed, background-verified chauffeurs with over 10 years of experience navigating the Nilgiris (Ooty 36 hairpin bends), Western Ghats (Coorg, Chikmagalur, Sakleshpur), and Wayanad.",
  },
  {
    q: "How does a 21-seater bus compare to renting three Toyota Innova Crystas?",
    a: "Booking a single 21-seater bus at ₹37/km saves your group 35% to 45% compared to three Innova Crystas (3 x ₹20 = ₹60/km plus 3x driver bata and 3x tolls). Crucially, a 21-seater keeps your entire party together, avoids convoy coordination delays, and offers far greater luggage space.",
  },
  {
    q: "What is the difference between a Tempo Traveller and a 21-seater luxury bus?",
    a: "While a 12 to 17 seater Tempo Traveller is a converted light commercial van with limited boot space when all seats are occupied, our 21-seater bus is a full-width commercial coach with wider 14-inch aisles, 2x1 recliner seats, dual-compressor rooftop cooling, and a massive independent under-chassis luggage bay.",
  },
  {
    q: "Are tolls, parking fees, and interstate permits included in the quote?",
    a: "Tolls, parking fees, and other-state permits (for Tamil Nadu, Kerala, Andhra Pradesh, and Goa) are billed at actuals based on official Fastag logs and receipts. We calculate estimated tolls upfront so you have total budget clarity before starting.",
  },
  {
    q: "Can we hire a 21-seater bus for local Bangalore events, corporate shuttles, and weddings?",
    a: "Yes. In addition to outstation highway trips, we provide 8-hour / 80-km and 12-hour / 120-km city packages for wedding guest transfers across Bangalore marriage choultries and Palace Grounds, corporate tech park shuttles, and airport group transfers.",
  },
  {
    q: "How do I confirm a 21-seater bus booking with Somu Holidays?",
    a: "You can book instantly by messaging us on WhatsApp (+91 93809 58852) or calling our dispatch desk. Share your travel dates, pickup location, and itinerary to receive an itemized quote and driver allocation.",
  },
];

const SPECS: { icon: IconName; title: string; desc: string }[] = [
  { icon: "seat", title: "21 Executive Pushback Seats", desc: "Ergonomic 2x1 layout with 32-inch legroom, 135° recline, and plush lumbar headrests." },
  { icon: "snow", title: "Dual-Compressor Rooftop AC", desc: "24,000 kcal/hr cooling power with individual passenger airflow control nozzles." },
  { icon: "bag", title: "185 Cu Ft Luggage Boot", desc: "Independent under-chassis compartment fitting 20+ large suitcases plus overhead parcel racks." },
  { icon: "shield", title: "Verified Highway Chauffeur", desc: "10+ years commercial experience across Karnataka, Kerala, Tamil Nadu, and Western Ghats." },
  { icon: "sparkle", title: "Pristine Sanitisation", desc: "Deep-cleaned, vacuumed, and mechanical 25-point safety inspection before every journey." },
  { icon: "clock", title: "24×7 Dispatch Support", desc: "Active GPS route coordination and round-the-clock trip management from our Rajajinagar HQ." },
];

const POPULAR_ROUTES = [
  { dest: "Mysuru", km: "145 km", hrs: "3 hrs", desc: "Ideal for full-day group heritage tours to Mysore Palace and Brindavan Gardens via expressway.", link: "/destinations/mysuru" },
  { dest: "Coorg (Madikeri)", km: "260 km", hrs: "5.5 hrs", desc: "The premier team retreat and family holiday destination in the coffee hills.", link: "/destinations/coorg" },
  { dest: "Ooty & Nilgiris", km: "275 km", hrs: "6.5 hrs", desc: "Scenic mountain getaway with safe navigation through the 36 Kalhatty hairpin bends.", link: "/destinations/ooty" },
  { dest: "Chikmagalur", km: "245 km", hrs: "5 hrs", desc: "Lush coffee plantations, Mullayanagiri peak, and waterfall excursions.", link: "/destinations/chikmagalur" },
  { dest: "Tirupati Balaji", km: "250 km", hrs: "5 hrs", desc: "Comfortable, timely pilgrimage transfers straight to Alipiri and Tirumala gates.", link: "/contact#book" },
  { dest: "Hampi (UNESCO)", km: "350 km", hrs: "6.5 hrs", desc: "Historical Vijayanagara heritage exploration for universities and cultural groups.", link: "/destinations/hampi" },
  { dest: "Wayanad (Kerala)", km: "280 km", hrs: "6 hrs", desc: "Verdant rainforest retreats, tea gardens, and Chembra Peak excursions.", link: "/contact#book" },
  { dest: "Gokarna & Murudeshwar", km: "490 km", hrs: "9 hrs", desc: "Coastal Karnataka temple trail and beach camping for corporate and college groups.", link: "/destinations/gokarna" },
];

const PICKUP_ZONES = [
  {
    zone: "Central & West Bangalore",
    icon: "pin" as const,
    areas: ["Rajajinagar (HQ Dispatch)", "Malleshwaram", "Majestic / KSR Railway Station", "Basavanagudi", "Vijayanagar", "Yeshwanthpur"],
  },
  {
    zone: "East Bangalore & Tech Corridors",
    icon: "pin" as const,
    areas: ["Whitefield", "ITPL", "Marathahalli", "Bellandur", "Outer Ring Road (ORR)", "Mahadevapura"],
  },
  {
    zone: "South Bangalore",
    icon: "pin" as const,
    areas: ["Koramangala", "Electronic City Phase 1 & 2", "Jayanagar", "BTM Layout", "JP Nagar", "Bannerghatta Road", "HSR Layout"],
  },
  {
    zone: "North Bangalore & Airport",
    icon: "pin" as const,
    areas: ["Kempegowda International Airport (BLR T1 & T2)", "Hebbal", "Yelahanka", "Manyata Tech Park", "Sahakara Nagar"],
  },
];

const USE_CASES: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "shield",
    title: "Corporate Offsites & MICE Transfers",
    desc: "Single-vehicle logistics for engineering teams, leadership retreats, and summit attendees traveling to Coorg, Kabini, or Sakleshpur resort corridors.",
  },
  {
    icon: "sparkle",
    title: "Wedding Guest Logistics & Muhurtham Shuttles",
    desc: "Punctual, stress-free transfers for bridal delegations and family members across Bangalore wedding choultries, Palace Grounds, and resort venues.",
  },
  {
    icon: "star",
    title: "Family Pilgrimages & Temple Darshans",
    desc: "Smooth air-suspension comfort and low entry steps designed for senior citizens visiting Tirupati, Kukke Subramanya, Dharmasthala, and Mantralayam.",
  },
  {
    icon: "map",
    title: "College & University Industrial Visits (IV)",
    desc: "Safe, RTO-approved group transportation with speed governors and background-verified drivers for student educational excursions.",
  },
];

export default function Seater21BusPage() {
  const waMsg =
    "Hi Somu Holidays, I would like to book a 21-seater luxury AC bus in Bangalore. Please share availability and an estimate.";

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Product", "Vehicle"],
        "@id": `${SITE.url}/21-seater-bus-rental-bangalore#product`,
        name: "21 Seater Luxury AC Bus Rental in Bangalore",
        description: PAGE_DESC,
        image: `${SITE.url}/21 SEATER.jpeg`,
        vehicleConfiguration: "21 Passenger Seats + 1 Chauffeur, 2x1 Pushback Recliner Layout",
        fuelType: "Diesel",
        brand: { "@type": "Brand", name: SITE.name },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "37",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "37",
            priceCurrency: "INR",
            unitCode: "KMT",
            referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "KMT" },
          },
          availability: "https://schema.org/InStock",
          validFrom: "2024-01-01",
          seller: {
            "@type": "TravelAgency",
            name: SITE.name,
            telephone: SITE.phonePrimaryTel,
            address: {
              "@type": "PostalAddress",
              streetAddress: "No. 12, 1st Cross, Magadi Main Rd, Agrahara Dasarahalli, Rajajinagar",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              postalCode: "560079",
              addressCountry: "IN",
            },
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "184",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Fleet", item: `${SITE.url}/fleet` },
          { "@type": "ListItem", position: 3, name: "21 Seater Bus Rental", item: `${SITE.url}/21-seater-bus-rental-bangalore` },
        ],
      },
      {
        "@type": "TravelAgency",
        "@id": `${SITE.url}/#organization`,
        name: `${SITE.name} Tours & Travels`,
        url: SITE.url,
        logo: `${SITE.url}/logo.jpeg`,
        image: `${SITE.url}/21 SEATER.jpeg`,
        telephone: SITE.phonePrimaryTel,
        priceRange: "₹₹",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.9793,
          longitude: 77.5458,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 12, 1st Cross, Magadi Main Rd, Agrahara Dasarahalli, Rajajinagar",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560079",
          addressCountry: "IN",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson).replace(/</g, "\\u003c") }}
        />

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <div className="crumb" style={{ marginBottom: 16 }}>
                  <Link href="/" title="Go to Somu Holidays homepage">Home</Link>
                  <Icon name="chevron" size={14} />
                  <Link href="/fleet" title="Browse our full fleet of cabs and buses">Fleet</Link>
                  <Icon name="chevron" size={14} />
                  <span>21 Seater Bus Rental</span>
                </div>
                <span className="eyebrow" style={{ color: "var(--terracotta-300)" }}>
                  Bangalore Group Travel Specialist • 21-Seater Luxury AC Coach
                </span>
                <h1 className="display">21 Seater Bus Rental in Bangalore</h1>
                <p className={styles.heroLead}>
                  Chauffeur-driven luxury 21-seater AC buses for corporate offsites, wedding guest logistics, college excursions,
                  and family pilgrimages. Enjoy 2x1 pushback seats, dual AC, large luggage bays, and transparent per-km
                  pricing at ₹37/km.
                </p>
                <div className={styles.heroBadges}>
                  <span className={styles.heroBadge}><Icon name="check" size={14} /> 21 Pushback Recliner Seats</span>
                  <span className={styles.heroBadge}><Icon name="check" size={14} /> ₹37/km Transparent Rate</span>
                  <span className={styles.heroBadge}><Icon name="check" size={14} /> ₹800 Daily Driver Bata</span>
                  <span className={styles.heroBadge}><Icon name="check" size={14} /> Doorstep Bangalore Pickup</span>
                  <span className={styles.heroBadge}><Icon name="check" size={14} /> Zero Hidden Surge</span>
                </div>
                <div className={styles.heroCtaRow}>
                  <a
                    href={waLink(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnPrimary"
                    title="Book 21 Seater Bus on WhatsApp"
                    aria-label="Book 21 Seater Bus on WhatsApp"
                  >
                    <Icon name="whatsapp" size={18} /> Book on WhatsApp
                  </a>
                  <a
                    href={`tel:${SITE.phonePrimaryTel}`}
                    className="btn btnGhost"
                    title={`Call Somu Holidays at ${SITE.phonePrimary}`}
                    aria-label={`Call Somu Holidays at ${SITE.phonePrimary}`}
                  >
                    <Icon name="phone" size={18} /> Call {SITE.phonePrimary}
                  </a>
                </div>
              </div>

              {/* Media Card with Anchor, Title, Alt */}
              <div className={styles.heroImageCard}>
                <span className={styles.priceSticker}>₹37 / km</span>
                <Link
                  href="/contact#book"
                  title="21 Seater Luxury AC Bus Bangalore - Click to Book Online"
                  aria-label="21 Seater Luxury AC Bus Bangalore - Click to Book Online"
                >
                  <Image
                    src="/21 SEATER.jpeg"
                    alt="21 Seater Luxury AC Bus on rent in Bangalore with pushback seats and luggage boot"
                    title="21 Seater AC Bus Rental Bangalore - Somu Holidays Fleet"
                    fill
                    priority
                    sizes="(min-width: 992px) 40vw, 90vw"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Inverted Pyramid AEO Answer Block */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className={styles.aeoBox}>
              <h2>Quick Summary: 21 Seater Bus Rental Rates &amp; Specifications in Bangalore (2026)</h2>
              <p>
                <strong>Somu Holidays</strong> rents out clean, chauffeur-driven <strong>21-seater luxury AC buses in Bangalore</strong> starting at <strong>₹37 per kilometre</strong> with an <strong>₹800/day driver allowance (bata)</strong> and a standard 300 km daily minimum billing threshold. Built with ergonomic 2x1 pushback reclining seats, central dual-compressor AC, and an undercarriage luggage compartment accommodating 20+ large travel bags, our 21-seater fleet provides doorstep pickup across all areas of Bengaluru—including Rajajinagar, Kempegowda International Airport (BLR), Whitefield, Electronic City, Koramangala, and Indiranagar. Bookings can be confirmed 24/7 on WhatsApp at +91 93809 58852 with verified commercial highway chauffeurs and zero hidden charges.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">Vehicle Features</span>
                <h2 className="display h2">Engineered for Long-Distance Comfort</h2>
                <p className="lead">
                  Every passenger enjoys equal legroom, individual climate controls, and generous luggage space so your group arrives refreshed.
                </p>
              </div>
            </div>

            <div className={styles.specsGrid}>
              {SPECS.map((s) => (
                <div key={s.title} className={styles.specCard}>
                  <div className={styles.specIcon}>
                    <Icon name={s.icon} size={20} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparent Tariff Breakdown & Walkthrough */}
        <section className="section bgIvory50" id="tariff">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">Transparent Pricing</span>
                <h2 className="display h2">21 Seater Bus Tariff in Bangalore</h2>
                <p className="lead">Zero hidden fees. All odometer readings start and end at your scheduled pickup address in Bengaluru.</p>
              </div>
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.tariffTable}>
                <thead>
                  <tr>
                    <th>Item / Service</th>
                    <th>Rate</th>
                    <th>Billing Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Per-km Rate</strong></td>
                    <td><strong>₹37 / km</strong></td>
                    <td>Based on actual GPS / physical odometer readings</td>
                  </tr>
                  <tr>
                    <td><strong>Driver Allowance (Bata)</strong></td>
                    <td><strong>₹800 / day</strong></td>
                    <td>Applicable per calendar day for driver meals &amp; accommodation</td>
                  </tr>
                  <tr>
                    <td><strong>Daily Minimum Distance</strong></td>
                    <td><strong>300 km / day</strong></td>
                    <td>Standard Karnataka inter-district and interstate travel threshold</td>
                  </tr>
                  <tr>
                    <td><strong>Tolls &amp; Parking</strong></td>
                    <td><strong>At Actuals</strong></td>
                    <td>Fastag toll records &amp; monument parking receipts shared transparently</td>
                  </tr>
                  <tr>
                    <td><strong>Interstate Permit</strong></td>
                    <td><strong>At Actuals</strong></td>
                    <td>Applicable when crossing into Tamil Nadu, Kerala, Andhra Pradesh, or Goa</td>
                  </tr>
                  <tr>
                    <td><strong>Night Driving Surcharge</strong></td>
                    <td><strong>Nil</strong></td>
                    <td>Included within standard daily driver bata; zero extra midnight surcharges</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Live Calculation Walkthrough */}
            <div className={styles.calcCard}>
              <h3 style={{ fontSize: "1.25rem", color: "var(--forest-950)", marginBottom: 8 }}>
                Sample Tariff Walkthrough: 2-Day Bangalore to Mysore Round Trip
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9375rem" }}>
                Total estimated round-trip distance is ~360 km + 40 km local sightseeing. Billed on the standard 2-day minimum threshold of 600 km:
              </p>
              <div className={styles.calcSteps}>
                <div className={styles.calcStep}>
                  <strong>Base Kilometer Rental</strong>
                  <span>₹22,200</span>
                  <p>600 km minimum × ₹37/km</p>
                </div>
                <div className={styles.calcStep}>
                  <strong>Driver Bata (2 Days)</strong>
                  <span>₹1,600</span>
                  <p>2 calendar days × ₹800/day</p>
                </div>
                <div className={styles.calcStep}>
                  <strong>Total Base Vehicle Cost</strong>
                  <span>₹23,800</span>
                  <p>+ actual Fastag tolls (~₹660)</p>
                </div>
                <div className={styles.calcStep}>
                  <strong>Per Person (20 Travelers)</strong>
                  <span>₹1,190 / pax</span>
                  <p>40% cheaper than 3 separate taxis</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a
                href={waLink("Hi Somu Holidays, please share a custom tariff estimate for our 21-seater bus trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btnPrimary"
                title="Get Custom Quote on WhatsApp"
                aria-label="Get Custom Quote on WhatsApp"
              >
                <Icon name="whatsapp" size={18} /> Get Instant Custom Quote
              </a>
            </div>
          </div>
        </section>

        {/* Comparison Matrix */}
        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">Smart Group Economics</span>
                <h2 className="display h2">21-Seater Bus vs. Multiple Cabs vs. Tempo Traveller</h2>
                <p className="lead">
                  Why booking a dedicated 21-seater luxury bus is the most economical, comfortable, and cohesive choice for 14+ travelers:
                </p>
              </div>
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.tariffTable}>
                <thead>
                  <tr>
                    <th>Feature / Cost Parameter</th>
                    <th className={styles.highlightHead}>21-Seater Luxury Bus</th>
                    <th>3x Toyota Innova Crystas</th>
                    <th>17-Seater Tempo Traveller</th>
                    <th>40-Seater Large Coach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Passenger Capacity</strong></td>
                    <td className={styles.highlightCol}><strong>21 Passengers</strong></td>
                    <td>21 Passengers (7 per cab)</td>
                    <td>16 Passengers</td>
                    <td>40 Passengers</td>
                  </tr>
                  <tr>
                    <td><strong>Per-Km Base Rate</strong></td>
                    <td className={styles.highlightCol}><strong>₹37 / km</strong></td>
                    <td>₹60 / km (3 × ₹20/km)</td>
                    <td>₹32 / km</td>
                    <td>₹55 / km</td>
                  </tr>
                  <tr>
                    <td><strong>Daily Driver Bata</strong></td>
                    <td className={styles.highlightCol}><strong>₹800 / day</strong></td>
                    <td>₹1,500 / day (3 × ₹500)</td>
                    <td>₹700 / day</td>
                    <td>₹1,200 / day</td>
                  </tr>
                  <tr>
                    <td><strong>Fastag Toll Expenses</strong></td>
                    <td className={styles.highlightCol}><strong>Single Bus Toll</strong></td>
                    <td>3x Full Car Tolls</td>
                    <td>Single Commercial Toll</td>
                    <td>Heavy Multi-Axle Toll</td>
                  </tr>
                  <tr>
                    <td><strong>Luggage Capacity</strong></td>
                    <td className={styles.highlightCol}><strong>185 cu ft Boot (20+ bags)</strong></td>
                    <td>Limited (2 bags / car)</td>
                    <td>Moderate Rear Rack</td>
                    <td>Large Cargo Bay</td>
                  </tr>
                  <tr>
                    <td><strong>Hill Station &amp; Ghat Roads</strong></td>
                    <td className={styles.highlightCol}><strong>Excellent Hill Agility</strong></td>
                    <td>High Agility</td>
                    <td>High Agility</td>
                    <td>Restricted on Ooty / Coorg Ghats</td>
                  </tr>
                  <tr>
                    <td><strong>2-Day Trip Estimated Total</strong></td>
                    <td className={styles.highlightCol}><strong>₹23,800 + tolls</strong></td>
                    <td>₹37,500 + 3x tolls</td>
                    <td>₹20,600 (tight for 16+)</td>
                    <td>₹35,400 (under-utilized)</td>
                  </tr>
                  <tr>
                    <td><strong>Group Bonding</strong></td>
                    <td className={styles.highlightCol}><strong>100% Shared Memories</strong></td>
                    <td>Fragmented in 3 cars</td>
                    <td>Together</td>
                    <td>Together</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Popular Outstation Routes */}
        <section className="section bgIvory50">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">Popular Trips</span>
                <h2 className="display h2">Top Corridors Driven by Our 21-Seater Buses</h2>
                <p className="lead">
                  From weekend corporate retreats to peaceful temple circuits, here are the most requested outstation routes departing from Bangalore:
                </p>
              </div>
            </div>

            <div className={styles.routesGrid}>
              {POPULAR_ROUTES.map((r) => (
                <div key={r.dest} className={styles.routeCard}>
                  <div>
                    <h3>Bangalore to {r.dest}</h3>
                    <div className={styles.routeMeta}>
                      <span><Icon name="map" size={14} /> {r.km}</span>
                      <span><Icon name="clock" size={14} /> {r.hrs}</span>
                    </div>
                    <p>{r.desc}</p>
                  </div>
                  <Link
                    href={r.link}
                    className="linkArrow"
                    title={`Explore ${r.dest} Tour Package and Route Details`}
                    aria-label={`Explore ${r.dest} Tour Package and Route Details`}
                  >
                    View Tour Details <Icon name="arrow" size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doorstep Bangalore Pickup Zones */}
        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">Local Bangalore Coverage</span>
                <h2 className="display h2">Doorstep Pickup Across Bengaluru Localities</h2>
                <p className="lead">
                  Our dispatch operations cover every major residential hub, IT corridor, and transport junction in Bengaluru:
                </p>
              </div>
            </div>

            <div className={styles.pickupGrid}>
              {PICKUP_ZONES.map((pz) => (
                <div key={pz.zone} className={styles.pickupCard}>
                  <h3>
                    <Icon name={pz.icon} size={18} /> {pz.zone}
                  </h3>
                  <div className={styles.pickupTags}>
                    {pz.areas.map((area) => (
                      <span key={area} className={styles.pickupTag}>{area}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Group Travel Scenarios */}
        <section className="section bgIvory50">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">Customized Travel</span>
                <h2 className="display h2">Specialized Group Travel Scenarios</h2>
                <p className="lead">
                  Tailored logistics engineered around the specific needs of corporate teams, families, wedding guests, and educational institutions:
                </p>
              </div>
            </div>

            <div className={styles.useCaseGrid}>
              {USE_CASES.map((uc) => (
                <div key={uc.title} className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <Icon name={uc.icon} size={20} />
                  </div>
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Compliance & Safety Trust Anchor */}
        <section className="section">
          <div className="container">
            <div className={styles.authorityBox}>
              <h2>
                <Icon name="shield" size={22} />
                Authoritative Passenger Safety &amp; RTO Regulatory Compliance
              </h2>
              <p style={{ color: "#2b2b2b", lineHeight: 1.6 }}>
                Every 21-seater commercial bus operated by Somu Holidays adheres strictly to <strong>Karnataka State Transport Department</strong> guidelines, <strong>AIS-052 Automotive Industry Bus Code</strong> build standards, and Ministry of Road Transport &amp; Highways (MoRTH) statutory rules. We operate exclusively with commercial yellow-board tourist permits and certified highway chauffeurs.
              </p>
              <div className={styles.authorityGrid}>
                <div className={styles.authorityItem}>
                  <Icon name="check" size={16} />
                  <span><strong>All India Tourist Permit (AITP):</strong> Seamless interstate transit across TN, Kerala, AP, and Goa borders.</span>
                </div>
                <div className={styles.authorityItem}>
                  <Icon name="check" size={16} />
                  <span><strong>Speed Governor Limiter:</strong> RTO-certified electronic speed limiter set to 80 km/h for passenger safety.</span>
                </div>
                <div className={styles.authorityItem}>
                  <Icon name="check" size={16} />
                  <span><strong>Full Passenger Insurance:</strong> Comprehensive commercial vehicle liability policy covering all 21 seats.</span>
                </div>
                <div className={styles.authorityItem}>
                  <Icon name="check" size={16} />
                  <span><strong>Verified Chauffeurs:</strong> Background-checked drivers with 10+ years of mountain and night-driving mastery.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Comprehensive FAQs for AEO */}
        <FaqSection
          items={FAQS}
          title="21 Seater Bus Rental in Bangalore — Frequently Asked Questions"
          lead="Everything you need to know about seating, luggage, routes, driver allowances, and payment policies."
          id="bus-faq"
        />

        {/* Static Noscript Pre-render Snapshot for AI Crawlers */}
        <noscript>
          <div style={{ padding: "40px 20px", background: "#f9f9f9", color: "#333", maxWidth: 900, margin: "0 auto" }}>
            <h2>21 Seater Bus Rental in Bangalore — Somu Holidays Tours &amp; Travels</h2>
            <p>
              Hire a 21-seater luxury AC bus in Bangalore at ₹37 per kilometre with ₹800 daily driver allowance and 300 km daily minimum billing threshold. Pushback 2x1 seats, dual air conditioning, 185 cu ft luggage boot, and experienced highway chauffeur. Doorstep pickup across Rajajinagar, Whitefield, Electronic City, Koramangala, and Kempegowda International Airport.
            </p>
            <h3>Key Vehicle Specifications</h3>
            <ul>
              <li>21 Executive Pushback Seats (2x1 Layout, 32-inch Legroom)</li>
              <li>Dual-Compressor Rooftop Air Conditioning</li>
              <li>185 Cu Ft Undercarriage Luggage Boot for 20+ suitcases</li>
              <li>Highway-Certified Chauffeur with 10+ Years Experience</li>
              <li>Speed Governor Limited to 80 km/h per RTO Guidelines</li>
              <li>All India Tourist Permit for Karnataka, Kerala, Tamil Nadu, and Andhra Pradesh</li>
            </ul>
            <p>
              Contact Somu Holidays: Phone +91 93809 58852 | Address: No. 12, 1st Cross, Magadi Main Rd, Agrahara Dasarahalli, Rajajinagar, Bengaluru 560079.
            </p>
          </div>
        </noscript>

        {/* CTA Banner */}
        <CtaSection bgImage="/21 SEATER.jpeg" />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
