import type { FaqItem } from "@/components/FaqSection/FaqSection";

export interface RouteSeo {
  slug: string; // matches the dynamic [route] segment, e.g. "bangalore-to-mysore-cab"
  origin: string; // "Bangalore"
  destination: string; // "Mysuru"
  destinationSlug?: string; // links to /destinations/[slug] when a package page exists
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  oneWay: string;
  roundTrip: string;
  outstationInfo: string;
  pickupPoints: string[];
  dropPoints: string[];
  placesToVisit: string[];
  faqs: FaqItem[];
}

const BENGALURU_PICKUPS = [
  "Rajajinagar (our base)",
  "Kempegowda International Airport",
  "Majestic / Kempegowda Bus Station",
  "Koramangala & Indiranagar",
  "Whitefield & Electronic City",
  "Any address within Bengaluru",
];

export const SEO_ROUTES: RouteSeo[] = [
  {
    slug: "bangalore-to-mysore-cab",
    origin: "Bangalore",
    destination: "Mysuru",
    destinationSlug: "mysuru",
    metaTitle: "Bangalore to Mysore Cab | One-Way & Round-Trip Taxi",
    metaDescription:
      "Book a Bangalore to Mysore cab with Somu Holidays — one-way or round-trip, chauffeur-driven AC vehicles, per-km pricing. Covers Mysore Palace, Chamundi Hills and Brindavan Gardens.",
    h1: "Bangalore to Mysore Cab",
    intro:
      "Mysuru is the most-booked day trip out of Bengaluru — palaces, hills and gardens, comfortably covered in a single day. Our Bangalore to Mysore taxi comes with a chauffeur who knows the route and the stops worth the time.",
    oneWay: "Heading to Mysuru and not coming back the same day? Book a one-way drop and pay only for that leg.",
    roundTrip:
      "Most travellers do Mysuru as a same-day round trip — the car waits through your sightseeing and drives you back to Bengaluru the same evening.",
    outstationInfo:
      "Billed per kilometre with a daily minimum, driver allowance and tolls/parking at actuals — shown upfront before you confirm, same as every outstation trip we run.",
    pickupPoints: BENGALURU_PICKUPS,
    dropPoints: [
      "Mysore Palace & city centre",
      "Chamundi Hills",
      "Mysuru Railway Station / Bus Stand",
      "Any hotel or homestay in Mysuru",
    ],
    placesToVisit: [
      "Mysore Palace, lit up on Sundays and public holidays",
      "Chamundi Hills viewpoint and temple",
      "Brindavan Gardens musical fountain show",
      "St. Philomena's Church",
      "Devaraja Market for local produce and flowers",
    ],
    faqs: [
      {
        q: "Can I book a one-way cab from Bangalore to Mysore?",
        a: "Yes — a one-way drop is available if you're not returning to Bengaluru the same day.",
      },
      {
        q: "Is a same-day round trip to Mysore possible?",
        a: "Yes, it's the most common booking — the car stays with you through the day's sightseeing and drives back to Bengaluru in the evening.",
      },
      {
        q: "Which vehicles can I book for the Bangalore to Mysore route?",
        a: "Swift and Etios sedans for smaller groups, Innova and Innova Crysta for families, and buses for larger groups — all chauffeur-driven and AC-fitted.",
      },
    ],
  },
  {
    slug: "bangalore-to-coorg-cab",
    origin: "Bangalore",
    destination: "Coorg",
    destinationSlug: "coorg",
    metaTitle: "Bangalore to Coorg Cab | Outstation Taxi for Madikeri",
    metaDescription:
      "Bangalore to Coorg cab with Somu Holidays — chauffeur-driven outstation taxi to Madikeri's coffee estates, waterfalls and viewpoints. One-way or round-trip, transparent per-km pricing.",
    h1: "Bangalore to Coorg Cab",
    intro:
      "Coorg's misty coffee estates and hill roads are a popular weekend run from Bengaluru. Our Bangalore to Coorg taxi takes the Mysuru route into Madikeri, with a driver used to the hill curves.",
    oneWay: "Flying out from Mangaluru or ending your trip elsewhere? A one-way Bangalore to Coorg drop is available.",
    roundTrip:
      "For a 2–3 day Coorg getaway, the cab stays with you for the full trip and drives back to Bengaluru at the end.",
    outstationInfo:
      "Hill-road outstation pricing applies — per kilometre, with driver allowance and tolls/parking at actuals, confirmed before you book.",
    pickupPoints: BENGALURU_PICKUPS,
    dropPoints: ["Madikeri town", "Virajpet & Kushalnagar", "Any homestay or resort in Coorg"],
    placesToVisit: [
      "Raja's Seat sunset viewpoint, Madikeri",
      "Abbey Falls and a working coffee & spice estate",
      "Dubare Elephant Camp on the Cauvery",
      "Namdroling (Golden Temple), Bylakuppe",
      "Omkareshwara Temple, Madikeri",
    ],
    faqs: [
      {
        q: "How many days do travellers usually take for a Coorg trip from Bangalore?",
        a: "Most book a 2–3 day round trip — enough for Madikeri's viewpoints, a coffee estate walk and the Dubare Elephant Camp.",
      },
      {
        q: "Is a one-way cab to Coorg available?",
        a: "Yes, if your return journey is from elsewhere, a one-way drop can be arranged.",
      },
    ],
  },
  {
    slug: "bangalore-to-hassan-cab",
    origin: "Bangalore",
    destination: "Hassan",
    metaTitle: "Bangalore to Hassan Cab | Taxi for Belur & Halebidu",
    metaDescription:
      "Bangalore to Hassan cab with Somu Holidays — chauffeur-driven taxi for Belur, Halebidu and Shravanabelagola's Hoysala temples. One-way or round-trip, per-km pricing.",
    h1: "Bangalore to Hassan Cab",
    intro:
      "Hassan is the base for Karnataka's finest Hoysala temple architecture. Our Bangalore to Hassan taxi is built for a temple circuit — Belur, Halebidu and Shravanabelagola, comfortably covered over a day or two.",
    oneWay: "Continuing on to Chikkamagaluru or Coorg from Hassan? A one-way drop works well for that kind of onward trip.",
    roundTrip: "Book a round trip for the full Hassan temple circuit with the car waiting at every stop.",
    outstationInfo: "Standard outstation per-km billing applies, with driver allowance and tolls/parking at actuals.",
    pickupPoints: BENGALURU_PICKUPS,
    dropPoints: ["Hassan town centre", "Belur", "Halebidu", "Shravanabelagola"],
    placesToVisit: [
      "Chennakeshava Temple, Belur",
      "Hoysaleswara Temple, Halebidu",
      "Gomateshwara (Bahubali) statue, Shravanabelagola",
    ],
    faqs: [
      {
        q: "Can one cab cover Belur, Halebidu and Shravanabelagola from Bangalore?",
        a: "Yes — these three Hoysala heritage sites are close together and are typically covered in a single round-trip booking.",
      },
    ],
  },
  {
    slug: "bangalore-to-chikkamagaluru-cab",
    origin: "Bangalore",
    destination: "Chikkamagaluru",
    destinationSlug: "chikmagalur",
    metaTitle: "Bangalore to Chikkamagaluru Cab | Taxi for Coffee Hills",
    metaDescription:
      "Bangalore to Chikkamagaluru cab with Somu Holidays — chauffeur-driven taxi to Mullayanagiri, Hebbe Falls and the coffee estates. One-way or round-trip, transparent per-km pricing.",
    h1: "Bangalore to Chikkamagaluru Cab",
    intro:
      "Chikkamagaluru pairs Karnataka's highest peaks with its best coffee country. Our Bangalore to Chikkamagaluru taxi handles the drive up into the Baba Budangiri range comfortably, in a vehicle built for hill roads.",
    oneWay: "Heading onward to Hassan, Coorg or Mangaluru after Chikkamagaluru? A one-way drop suits that itinerary.",
    roundTrip: "A 2–3 day round trip is the usual booking, with the car based with you through the stay.",
    outstationInfo: "Per-km outstation pricing, driver allowance and tolls/parking at actuals — confirmed upfront.",
    pickupPoints: BENGALURU_PICKUPS,
    dropPoints: ["Chikkamagaluru town", "Mudigere", "Any estate stay or resort in the hills"],
    placesToVisit: [
      "Mullayanagiri, Karnataka's highest peak",
      "Hebbe Falls",
      "Baba Budangiri hill range viewpoints",
      "Coffee estate walks and tastings",
      "Kemmangundi viewpoints (seasonal road conditions)",
    ],
    faqs: [
      {
        q: "Is the Chikkamagaluru route manageable in a sedan?",
        a: "The main town and most estate stays are, but some estate interior roads suit an SUV like the Innova better — tell us your stay location and we'll recommend the right vehicle.",
      },
    ],
  },
  {
    slug: "bangalore-to-hampi-cab",
    origin: "Bangalore",
    destination: "Hampi",
    destinationSlug: "hampi",
    metaTitle: "Bangalore to Hampi Cab | Taxi for the Vijayanagara Ruins",
    metaDescription:
      "Bangalore to Hampi cab with Somu Holidays — chauffeur-driven taxi for the Vittala Temple, Virupaksha Temple and the Hampi ruins. One-way or round-trip, per-km pricing.",
    h1: "Bangalore to Hampi Cab",
    intro:
      "Hampi is a longer drive north from Bengaluru, through the Vijayanagara empire's ruined capital. Our Bangalore to Hampi taxi is set up for the distance, with driver changeovers available on request for very long single-day drives.",
    oneWay: "Flying out of Hubballi or Ballari after Hampi? A one-way drop can be arranged.",
    roundTrip: "A 2–3 day round trip is the usual way to see Hampi without rushing the ruins.",
    outstationInfo: "Long-distance outstation per-km billing, with driver allowance and tolls/parking at actuals.",
    pickupPoints: BENGALURU_PICKUPS,
    dropPoints: ["Hampi Bazaar", "Kamalapura", "Hospet Railway Station / Bus Stand"],
    placesToVisit: [
      "Vittala Temple and the iconic stone chariot",
      "Virupaksha Temple and Hampi Bazaar",
      "Matanga Hill sunrise or sunset viewpoint",
      "Lotus Mahal and the Elephant Stables",
    ],
    faqs: [
      {
        q: "Is Bangalore to Hampi a long drive?",
        a: "Yes, it's one of the longer outstation drives we run — most travellers book it as a 2–3 day round trip rather than a single-day visit.",
      },
    ],
  },
  {
    slug: "bangalore-to-gokarna-cab",
    origin: "Bangalore",
    destination: "Gokarna",
    destinationSlug: "gokarna",
    metaTitle: "Bangalore to Gokarna Cab | Taxi for Om Beach & Kudle Beach",
    metaDescription:
      "Bangalore to Gokarna cab with Somu Holidays — chauffeur-driven taxi to Om Beach, Kudle Beach and the Mahabaleshwar Temple. One-way or round-trip, transparent per-km pricing.",
    h1: "Bangalore to Gokarna Cab",
    intro:
      "Gokarna's beaches and headland cliffs are a quieter alternative to Goa, reached by road from Bengaluru. Our Bangalore to Gokarna taxi covers the coastal drive with a chauffeur for the full trip.",
    oneWay: "Continuing to Murudeshwara or Udupi afterward? A one-way drop from Gokarna can be arranged.",
    roundTrip: "Most travellers book a 2–3 day round trip for Gokarna's beaches and the town temple.",
    outstationInfo: "Long-distance outstation per-km billing, with driver allowance and tolls/parking at actuals.",
    pickupPoints: BENGALURU_PICKUPS,
    dropPoints: ["Gokarna town", "Om Beach", "Kudle Beach"],
    placesToVisit: [
      "Om Beach and Kudle Beach",
      "Mahabaleshwar Temple, Gokarna town",
      "Half Moon & Paradise Beach cliff walk (seasonal access)",
    ],
    faqs: [
      {
        q: "Can the same cab continue from Gokarna to Murudeshwara or Udupi?",
        a: "Yes — tell us your onward plan when booking and we'll quote the extended coastal route.",
      },
    ],
  },
  {
    slug: "bangalore-to-udupi-cab",
    origin: "Bangalore",
    destination: "Udupi",
    metaTitle: "Bangalore to Udupi Cab | Taxi for Krishna Matha & Malpe Beach",
    metaDescription:
      "Bangalore to Udupi cab with Somu Holidays — chauffeur-driven taxi to the Krishna Matha temple, Malpe Beach and St. Mary's Island. One-way or round-trip, per-km pricing.",
    h1: "Bangalore to Udupi Cab",
    intro:
      "Udupi brings together the Krishna Matha temple town and the Malpe coastline. Our Bangalore to Udupi taxi makes the coastal drive comfortable, with stops along the way on request.",
    oneWay: "Flying out of Mangaluru after Udupi? A one-way drop is available.",
    roundTrip: "A 2–3 day round trip suits most Udupi visits, including a Malpe Beach and St. Mary's Island stop.",
    outstationInfo: "Long-distance outstation per-km billing, with driver allowance and tolls/parking at actuals.",
    pickupPoints: BENGALURU_PICKUPS,
    dropPoints: ["Udupi town centre", "Malpe", "Manipal"],
    placesToVisit: [
      "Sri Krishna Matha temple",
      "Malpe Beach and the boat ride to St. Mary's Island",
      "Manipal town and lake",
    ],
    faqs: [
      {
        q: "Does the Bangalore to Udupi cab also cover Manipal?",
        a: "Yes, Manipal is a few minutes from Udupi town and is covered on the same booking.",
      },
    ],
  },
  {
    slug: "bangalore-to-dharmasthala-cab",
    origin: "Bangalore",
    destination: "Dharmasthala",
    metaTitle: "Bangalore to Dharmasthala Cab | Taxi for Manjunatha Temple",
    metaDescription:
      "Bangalore to Dharmasthala cab with Somu Holidays — chauffeur-driven taxi for the Manjunatha Temple pilgrimage. One-way or round-trip, transparent per-km pricing.",
    h1: "Bangalore to Dharmasthala Cab",
    intro:
      "Dharmasthala is one of the most visited pilgrimage towns in Karnataka, built around the Manjunatha Temple. Our Bangalore to Dharmasthala taxi is a common booking for a day or overnight darshan trip.",
    oneWay: "Continuing to Mangaluru or Udupi after Dharmasthala? A one-way drop can be arranged.",
    roundTrip: "Most pilgrims book a round trip — a day visit or an overnight stay before the drive back.",
    outstationInfo: "Standard outstation per-km billing, with driver allowance and tolls/parking at actuals.",
    pickupPoints: BENGALURU_PICKUPS,
    dropPoints: ["Dharmasthala temple town", "Belthangady"],
    placesToVisit: [
      "Sri Manjunatha Swamy Temple",
      "Bahubali statue, Dharmasthala",
      "Manjusha Museum",
    ],
    faqs: [
      {
        q: "Can the Dharmasthala trip be done in a single day from Bangalore?",
        a: "It's a long day if done without an overnight stay — most travellers prefer an overnight round trip so the darshan and drive aren't rushed.",
      },
    ],
  },
];

export function getRouteBySlug(slug: string): RouteSeo | undefined {
  return SEO_ROUTES.find((r) => r.slug === slug);
}

export function getAllRouteSlugs(): string[] {
  return SEO_ROUTES.map((r) => r.slug);
}
