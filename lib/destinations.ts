export type PriceType = "vehicle" | "person";

export interface ItineraryStep {
  day: string;
  title: string;
  desc: string;
}

export interface DestinationPackage {
  slug: string;
  name: string;
  category: string;
  meta: string;
  tagline: string;
  heroImg: string;
  gallery: string[];
  duration: string;
  priceType: PriceType;
  price: number;
  priceNote: string;
  bestTime: string;
  pickup: string;
  highlights: string[];
  itinerary: ItineraryStep[];
  inclusions: string[];
  exclusions: string[];
}

// Real destinations are day trips (Mysuru) priced per vehicle; the rest are
// multi-day holiday packages priced per person. All itineraries/prices here
// are illustrative — supplied business data covered fleet rental rates only,
// not package pricing.
export const DESTINATIONS: DestinationPackage[] = [
  {
    slug: "mysuru",
    name: "Mysuru",
    category: "Heritage City",
    meta: "145 km · ~3.5 hrs · Full-day trip",
    tagline: "Palaces, gardens and royal history, in a single day from Bengaluru.",
    heroImg: "1590766940554-634a7ed41450",
    gallery: ["1590766940554-634a7ed41450", "1600011689032-8b628b8a8747", "1602216056096-3b40cc0c9944"],
    duration: "1 Day",
    priceType: "vehicle",
    price: 3500,
    priceNote: "per sedan, full day (AC, driver, fuel, tolls & parking included)",
    bestTime: "October to March",
    pickup: "Bengaluru (any area)",
    highlights: [
      "Mysore Palace, with the evening illumination on Sundays and public holidays",
      "Chamundi Hills viewpoint and temple",
      "Brindavan Gardens musical fountain show",
      "St. Philomena's Church",
      "Time for silk-saree and sandalwood shopping",
    ],
    itinerary: [
      { day: "Day 1", title: "Bengaluru → Mysuru → Bengaluru", desc: "Early start from Bengaluru, arrive Mysuru by late morning. Visit Mysore Palace, Chamundi Hills and St. Philomena's Church. Lunch break. Evening at Brindavan Gardens for the fountain show, then drive back, arriving late evening." },
    ],
    inclusions: ["AC vehicle for the full day", "Driver allowance", "Tolls & parking", "Bottled water"],
    exclusions: ["Monument entry tickets", "Meals", "Guide charges"],
  },
  {
    slug: "coorg",
    name: "Coorg",
    category: "Coffee Hills",
    meta: "260 km · ~6 hrs · 2N / 3D package",
    tagline: "Misty coffee estates and waterfalls in the Western Ghats — Karnataka's own hill country.",
    heroImg: "1757702328394-a71ad4c417c2",
    gallery: ["1757702328394-a71ad4c417c2", "1600011689032-8b628b8a8747", "1602216056096-3b40cc0c9944"],
    duration: "2 Nights / 3 Days",
    priceType: "person",
    price: 8499,
    priceNote: "per person, twin sharing",
    bestTime: "October to March",
    pickup: "Bengaluru",
    highlights: [
      "Raja's Seat sunset viewpoint, Madikeri",
      "Abbey Falls and a working coffee & spice estate walk",
      "Dubare Elephant Camp on the banks of the Cauvery",
      "Namdroling (Golden Temple) Tibetan monastery, Bylakuppe",
      "Omkareshwara Temple, Madikeri",
    ],
    itinerary: [
      { day: "Day 1", title: "Bengaluru → Madikeri", desc: "Drive via Mysuru, check-in, evening at Raja's Seat for sunset and Omkareshwara Temple." },
      { day: "Day 2", title: "Coorg sightseeing", desc: "Abbey Falls, a coffee & spice plantation walk with tasting, Dubare Elephant Camp in the afternoon." },
      { day: "Day 3", title: "Departure", desc: "Breakfast, optional Golden Temple stop at Bylakuppe, drive back to Bengaluru." },
    ],
    inclusions: ["2 nights hotel/homestay with breakfast", "AC vehicle throughout", "Driver allowance, tolls & parking"],
    exclusions: ["Lunch & dinner", "Plantation tasting & elephant camp entry fees", "Coracle / river rafting (optional, paid)"],
  },
  {
    slug: "chikmagalur",
    name: "Chikmagalur",
    category: "Coffee Hills",
    meta: "245 km · ~5 hrs · 2N / 3D package",
    tagline: "Karnataka's highest peaks, rolling coffee country and waterfalls.",
    heroImg: "1622725859789-8e9ccf920693",
    gallery: ["1622725859789-8e9ccf920693", "1600011689032-8b628b8a8747", "1602216056096-3b40cc0c9944"],
    duration: "2 Nights / 3 Days",
    priceType: "person",
    price: 7999,
    priceNote: "per person, twin sharing",
    bestTime: "October to March",
    pickup: "Bengaluru",
    highlights: [
      "Mullayanagiri, Karnataka's highest peak",
      "Hebbe Falls (jeep ride through the estate, optional, paid)",
      "Baba Budangiri hill range viewpoints",
      "Coffee estate stay and tasting",
      "Kemmangundi hill viewpoints (seasonal road conditions)",
    ],
    itinerary: [
      { day: "Day 1", title: "Bengaluru → Chikmagalur", desc: "Drive in, check-in at a coffee estate stay, evening at leisure." },
      { day: "Day 2", title: "Mullayanagiri & Hebbe Falls", desc: "Early trek/drive to Mullayanagiri peak, afternoon jeep ride to Hebbe Falls." },
      { day: "Day 3", title: "Departure", desc: "Breakfast, optional Kemmangundi viewpoint stop, drive back to Bengaluru." },
    ],
    inclusions: ["2 nights estate stay/hotel with breakfast", "AC vehicle throughout", "Driver allowance, tolls & parking"],
    exclusions: ["Lunch & dinner", "Hebbe Falls jeep ride fee", "Trekking guide charges"],
  },
  {
    slug: "hampi",
    name: "Hampi",
    category: "Heritage Ruins",
    meta: "340 km · ~6.5 hrs · 2N / 3D package",
    tagline: "The ruined Vijayanagara capital — temples, boulders and stone chariots.",
    heroImg: "1651569213711-b29d1fc3f995",
    gallery: ["1651569213711-b29d1fc3f995", "1600011689032-8b628b8a8747", "1602216056096-3b40cc0c9944"],
    duration: "2 Nights / 3 Days",
    priceType: "person",
    price: 8999,
    priceNote: "per person, twin sharing",
    bestTime: "October to February",
    pickup: "Bengaluru",
    highlights: [
      "Vittala Temple and the iconic stone chariot",
      "Virupaksha Temple and Hampi Bazaar",
      "Matanga Hill sunrise or sunset viewpoint",
      "Lotus Mahal and the Elephant Stables",
      "Coracle ride across the Tungabhadra (optional, paid)",
    ],
    itinerary: [
      { day: "Day 1", title: "Bengaluru → Hampi", desc: "Long drive in (or overnight train, arranged separately), check-in, evening at Hampi Bazaar." },
      { day: "Day 2", title: "Hampi ruins", desc: "Vittala Temple, Virupaksha Temple, Lotus Mahal and Elephant Stables, sunset at Matanga Hill." },
      { day: "Day 3", title: "Departure", desc: "Breakfast, last sightseeing stop, drive back to Bengaluru." },
    ],
    inclusions: ["2 nights hotel stay with breakfast", "AC vehicle for the road itinerary", "Driver allowance, tolls & parking"],
    exclusions: ["Monument entry tickets", "Lunch & dinner", "Coracle ride charges"],
  },
  {
    slug: "gokarna",
    name: "Gokarna",
    category: "Beach Getaway",
    meta: "485 km · ~9 hrs · 2N / 3D package",
    tagline: "Quieter beaches and headland cliffs on Karnataka's own coastline.",
    heroImg: "1617467053978-276d9d4d5d11",
    gallery: ["1617467053978-276d9d4d5d11", "1600011689032-8b628b8a8747", "1602216056096-3b40cc0c9944"],
    duration: "2 Nights / 3 Days",
    priceType: "person",
    price: 9499,
    priceNote: "per person, twin sharing",
    bestTime: "October to March",
    pickup: "Bengaluru",
    highlights: [
      "Om Beach and Kudle Beach",
      "Mahabaleshwar Temple, Gokarna town",
      "Half Moon & Paradise Beach cliff walk (seasonal access)",
      "Sunset point at Om Beach headland",
      "Local Malnad-coastal thali meals",
    ],
    itinerary: [
      { day: "Day 1", title: "Bengaluru → Gokarna", desc: "Long drive in, check-in near the beach, evening at Om Beach." },
      { day: "Day 2", title: "Beaches & temple", desc: "Morning at Kudle Beach, Mahabaleshwar Temple visit, afternoon cliff walk to Half Moon / Paradise Beach." },
      { day: "Day 3", title: "Departure", desc: "Breakfast, last beach morning, drive back to Bengaluru." },
    ],
    inclusions: ["2 nights beach-stay hotel with breakfast", "AC vehicle for the road itinerary", "Driver allowance, tolls & parking"],
    exclusions: ["Lunch & dinner", "Water sports", "Temple donation tickets"],
  },
  {
    slug: "goa",
    name: "Goa",
    category: "Beach Getaway",
    meta: "560 km · ~10 hrs · 3N / 4D package",
    tagline: "Beaches, seafood and a relaxed coastal pace, 3 nights of it.",
    heroImg: "1512343879784-a960bf40e7f2",
    gallery: ["1512343879784-a960bf40e7f2", "1600011689032-8b628b8a8747", "1602216056096-3b40cc0c9944"],
    duration: "3 Nights / 4 Days",
    priceType: "person",
    price: 10999,
    priceNote: "per person, twin sharing (land package; airfare/train extra)",
    bestTime: "November to February",
    pickup: "Bengaluru or Goa airport/station",
    highlights: [
      "North and South Goa beach circuits",
      "Fort Aguada and Basilica of Bom Jesus",
      "Sunset cruise on the Mandovi river",
      "Free time at Baga / Calangute / Palolem",
      "Local seafood thali experience",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival & North Goa beaches", desc: "Pick-up on arrival, check-in, evening at Calangute and Baga beach." },
      { day: "Day 2", title: "Old Goa & Fort Aguada", desc: "Basilica of Bom Jesus, Fort Aguada, free time, evening Mandovi river cruise." },
      { day: "Day 3", title: "South Goa", desc: "Palolem / Colva beach day trip, free time for water sports (optional, paid)." },
      { day: "Day 4", title: "Departure", desc: "Breakfast, check-out, drop to airport/station." },
    ],
    inclusions: ["3 nights hotel stay with breakfast", "AC vehicle for all transfers & sightseeing", "Mandovi river cruise ticket", "Driver allowance, tolls & parking"],
    exclusions: ["Airfare / train fare", "Lunch & dinner (except where noted)", "Water sports & entry tickets"],
  },
  {
    slug: "alleppey",
    name: "Alleppey",
    category: "Backwaters",
    meta: "3N / 4D package · Houseboat included",
    tagline: "A night on a houseboat, drifting through Kerala's backwaters.",
    heroImg: "1593693397690-362cb9666fc2",
    gallery: ["1593693397690-362cb9666fc2", "1602216056096-3b40cc0c9944", "1600011689032-8b628b8a8747"],
    duration: "3 Nights / 4 Days",
    priceType: "person",
    price: 13499,
    priceNote: "per person, twin sharing (includes 1 night houseboat)",
    bestTime: "September to March",
    pickup: "Bengaluru or Kochi airport",
    highlights: [
      "Overnight stay on a traditional Kerala houseboat",
      "Backwater cruise through coconut-lined canals",
      "Kumarakom bird sanctuary visit",
      "Traditional Kerala sadya meal on the houseboat",
      "Village and coir-making walk",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival → Alleppey", desc: "Pick-up, drive to Alleppey, board the houseboat by afternoon for an overnight backwater cruise." },
      { day: "Day 2", title: "Houseboat → Kumarakom", desc: "Disembark after breakfast, transfer to a resort near Kumarakom, visit the bird sanctuary." },
      { day: "Day 3", title: "Leisure day", desc: "Village walk, canoe ride through narrow canals (optional, paid), free time at the resort." },
      { day: "Day 4", title: "Departure", desc: "Breakfast, check-out, drop to airport/station." },
    ],
    inclusions: ["1 night houseboat (all meals onboard)", "2 nights resort stay with breakfast", "AC vehicle for all transfers", "Kumarakom bird sanctuary entry"],
    exclusions: ["Airfare / train fare", "Lunch & dinner on land days", "Canoe rides & other paid activities"],
  },
  {
    slug: "madurai",
    name: "Madurai",
    category: "Pilgrimage",
    meta: "435 km · ~8 hrs · 2N / 3D package",
    tagline: "Temple towers, deep tradition and classic Tamil Nadu cuisine.",
    heroImg: "1582510003544-4d00b7f74220",
    gallery: ["1582510003544-4d00b7f74220", "1602216056096-3b40cc0c9944", "1600011689032-8b628b8a8747"],
    duration: "2 Nights / 3 Days",
    priceType: "person",
    price: 7999,
    priceNote: "per person, twin sharing",
    bestTime: "November to February",
    pickup: "Bengaluru",
    highlights: [
      "Meenakshi Amman Temple, including the evening ritual",
      "Thirumalai Nayakkar Mahal",
      "Alagar Kovil and the Vaigai riverside",
      "Local Chettinad-style meals",
      "Optional add-on to Rameswaram (2 more days)",
    ],
    itinerary: [
      { day: "Day 1", title: "Bengaluru → Madurai", desc: "Overnight or early drive, check-in, evening visit to Meenakshi Amman Temple." },
      { day: "Day 2", title: "Madurai sightseeing", desc: "Thirumalai Nayakkar Mahal, Gandhi Memorial Museum, Alagar Kovil, evening free for local markets." },
      { day: "Day 3", title: "Departure", desc: "Breakfast, check-out, drive back to Bengaluru." },
    ],
    inclusions: ["2 nights hotel stay with breakfast", "AC vehicle throughout", "Driver allowance, tolls & parking"],
    exclusions: ["Lunch & dinner", "Temple donation tickets / special darshan", "Rameswaram add-on (quoted separately)"],
  },
  {
    slug: "kumarakom",
    name: "Kumarakom",
    category: "Nature Retreat",
    meta: "2N / 3D package · Backwater resort",
    tagline: "A quiet resort stay among palm-fringed canals and paddy fields.",
    heroImg: "1602216056096-3b40cc0c9944",
    gallery: ["1602216056096-3b40cc0c9944", "1593693397690-362cb9666fc2", "1600011689032-8b628b8a8747"],
    duration: "2 Nights / 3 Days",
    priceType: "person",
    price: 11499,
    priceNote: "per person, twin sharing",
    bestTime: "September to March",
    pickup: "Bengaluru or Kochi airport",
    highlights: [
      "Kumarakom Bird Sanctuary",
      "Backwater canoe & shikara rides",
      "Vembanad Lake sunset point",
      "Ayurvedic massage (optional add-on)",
      "Toddy-shop style Kerala lunch",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival → Kumarakom", desc: "Pick-up, drive in, check-in at a backwater resort, evening at leisure by the lake." },
      { day: "Day 2", title: "Bird sanctuary & canals", desc: "Morning visit to the bird sanctuary, afternoon shikara ride through the canals." },
      { day: "Day 3", title: "Departure", desc: "Breakfast, check-out, drop to airport/station." },
    ],
    inclusions: ["2 nights resort stay with breakfast", "Bird sanctuary entry", "One shikara ride", "AC vehicle for all transfers"],
    exclusions: ["Airfare / train fare", "Lunch & dinner", "Ayurvedic spa treatments"],
  },
  {
    slug: "agra",
    name: "Agra",
    category: "Golden Triangle",
    meta: "5N / 6D package · Delhi · Agra · Jaipur",
    tagline: "The Taj Mahal, anchoring a classic Golden Triangle circuit.",
    heroImg: "/agra taj mahal.jpeg",
    gallery: ["/agra taj mahal.jpeg", "1524492412937-b28074a5d7da", "1477587458883-47145ed94245"],
    duration: "5 Nights / 6 Days",
    priceType: "person",
    price: 18999,
    priceNote: "per person, twin sharing (Delhi–Agra–Jaipur circuit)",
    bestTime: "October to March",
    pickup: "Delhi airport/station",
    highlights: [
      "Taj Mahal at sunrise",
      "Agra Fort",
      "Fatehpur Sikri en route to Jaipur",
      "Combined with Jaipur's forts and palaces",
      "Old & New Delhi sightseeing",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Delhi", desc: "Pick-up from the airport/station, check-in, evening at leisure or Old Delhi food walk (optional)." },
      { day: "Day 2", title: "Delhi sightseeing", desc: "Red Fort, Jama Masjid, India Gate, Qutub Minar, Humayun's Tomb." },
      { day: "Day 3", title: "Delhi → Agra", desc: "Drive to Agra, sunrise or evening visit to the Taj Mahal, Agra Fort." },
      { day: "Day 4", title: "Agra → Jaipur", desc: "Fatehpur Sikri en route, continue to Jaipur, evening at leisure." },
      { day: "Day 5", title: "Jaipur sightseeing", desc: "Amber Fort, City Palace, Hawa Mahal, Jantar Mantar." },
      { day: "Day 6", title: "Departure", desc: "Breakfast, drop to Jaipur airport/station." },
    ],
    inclusions: ["5 nights hotel stay with breakfast", "AC vehicle for the full circuit", "Driver allowance, tolls, parking & interstate permits"],
    exclusions: ["Airfare / train fare", "Monument entry tickets", "Lunch & dinner"],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    category: "Royal Heritage",
    meta: "4N / 5D package · The Pink City",
    tagline: "Forts, palaces and bazaars across Rajasthan's capital and nearby towns.",
    heroImg: "1477587458883-47145ed94245",
    gallery: ["1477587458883-47145ed94245", "1600011689032-8b628b8a8747", "1602216056096-3b40cc0c9944"],
    duration: "4 Nights / 5 Days",
    priceType: "person",
    price: 15999,
    priceNote: "per person, twin sharing",
    bestTime: "October to March",
    pickup: "Jaipur airport/station",
    highlights: [
      "Amber Fort with an elephant or jeep ride up",
      "City Palace and the Hawa Mahal facade",
      "Jantar Mantar observatory",
      "Nahargarh Fort at sunset",
      "Bazaar time for block-print textiles and jewellery",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Jaipur", desc: "Pick-up, check-in, evening at Nahargarh Fort for the city view at sunset." },
      { day: "Day 2", title: "Amber Fort & City Palace", desc: "Morning at Amber Fort, afternoon City Palace, Hawa Mahal and Jantar Mantar." },
      { day: "Day 3", title: "Local day trip", desc: "Optional excursion to Abhaneri Stepwell or Samode, or a free bazaar day." },
      { day: "Day 4", title: "Leisure & shopping", desc: "Free morning, afternoon at Johari Bazaar / Bapu Bazaar for shopping." },
      { day: "Day 5", title: "Departure", desc: "Breakfast, check-out, drop to airport/station." },
    ],
    inclusions: ["4 nights hotel stay with breakfast", "AC vehicle throughout", "Driver allowance, tolls & parking"],
    exclusions: ["Monument entry tickets", "Elephant / jeep ride at Amber Fort", "Lunch & dinner"],
  },
  {
    slug: "manali",
    name: "Manali",
    category: "Himalayas",
    meta: "5N / 6D package · Manali · Solang · Kasol",
    tagline: "Snow peaks, river valleys and mountain air, deep in Himachal.",
    heroImg: "1549880338-65ddcdfd017b",
    gallery: ["1549880338-65ddcdfd017b", "1609920658906-8223bd289001", "1506905925346-21bda4d32df4"],
    duration: "5 Nights / 6 Days",
    priceType: "person",
    price: 16999,
    priceNote: "per person, twin sharing",
    bestTime: "March to June, December to February for snow",
    pickup: "Chandigarh airport/station",
    highlights: [
      "Solang Valley cable car & snow activities",
      "Old Manali and the Hidimba Devi Temple",
      "Day trip to Kasol and the Parvati Valley",
      "Rohtang Pass (season-dependent, permit required)",
      "Riverside cafés along the Beas",
    ],
    itinerary: [
      { day: "Day 1", title: "Chandigarh → Manali", desc: "Pick-up, scenic drive through the Kullu valley, check-in at Manali." },
      { day: "Day 2", title: "Solang Valley", desc: "Cable car ride, snow/adventure activities (optional, paid), evening at Mall Road." },
      { day: "Day 3", title: "Old Manali & temples", desc: "Hidimba Devi Temple, Old Manali cafés, Vashisht hot springs." },
      { day: "Day 4", title: "Kasol day trip", desc: "Drive to Kasol and Manikaran, riverside time, return to Manali by evening." },
      { day: "Day 5", title: "Rohtang Pass (seasonal)", desc: "Subject to permit and weather; alternate local sightseeing if closed." },
      { day: "Day 6", title: "Departure", desc: "Breakfast, drive back to Chandigarh for drop-off." },
    ],
    inclusions: ["5 nights hotel stay with breakfast", "AC/non-AC vehicle suited to mountain roads", "Driver allowance, tolls & parking"],
    exclusions: ["Airfare / train fare", "Rohtang permit fee", "Adventure activities", "Lunch & dinner"],
  },
  {
    slug: "ooty",
    name: "Ooty",
    category: "Hill Station",
    meta: "270 km · ~6.5 hrs · 2N / 3D package",
    tagline: "Tea gardens, cool air and the Nilgiri hills, a short way from Bengaluru.",
    heroImg: "1638886540342-240980f60d25",
    gallery: ["1638886540342-240980f60d25", "1600011689032-8b628b8a8747", "1602216056096-3b40cc0c9944"],
    duration: "2 Nights / 3 Days",
    priceType: "person",
    price: 6999,
    priceNote: "per person, twin sharing",
    bestTime: "October to June",
    pickup: "Bengaluru",
    highlights: [
      "Nilgiri Mountain Railway (toy train, seasonal, subject to availability)",
      "Botanical Gardens and Ooty Lake boating",
      "Doddabetta Peak viewpoint",
      "Tea estate visit and tasting",
      "Coonoor day trip (optional)",
    ],
    itinerary: [
      { day: "Day 1", title: "Bengaluru → Ooty", desc: "Drive through Bandipur/Mudumalai forest, check-in, evening at Ooty Lake." },
      { day: "Day 2", title: "Ooty sightseeing", desc: "Botanical Gardens, Doddabetta Peak, a tea estate visit, Rose Garden." },
      { day: "Day 3", title: "Departure", desc: "Breakfast, optional Coonoor stop, drive back to Bengaluru." },
    ],
    inclusions: ["2 nights hotel stay with breakfast", "AC vehicle throughout", "Driver allowance, tolls & parking"],
    exclusions: ["Lunch & dinner", "Boating & toy train tickets", "Tea estate tasting fee"],
  },
];


export function getDestinationBySlug(slug: string): DestinationPackage | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export function getAllSlugs(): string[] {
  return DESTINATIONS.map((d) => d.slug);
}

export function getCategories(): string[] {
  return ["All", ...new Set(DESTINATIONS.map((d) => d.category))];
}

export function getRelated(slug: string, count = 3): DestinationPackage[] {
  return DESTINATIONS.filter((d) => d.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}
