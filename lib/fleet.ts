export type VehicleType = "sedan" | "suv" | "bus";

export interface Vehicle {
  slug: string;
  name: string;
  type: VehicleType;
  tag: string;
  desc: string;
  seats: number;
  qty: number; // vehicles of this type owned
  price: number; // per-km rate in ₹
  bata: number; // driver allowance per day in ₹
  img: string; // unsplash photo id
}

// Real inventory & rates, from the business's rate sheet.
export const FLEET: Vehicle[] = [
  {
    slug: "swift",
    name: "Maruti Suzuki Swift",
    type: "sedan",
    tag: "Sedan",
    desc: "Perfect for city driving and light highway trips",
    seats: 4,
    qty: 1,
    price: 13,
    bata: 400,
    img: "/SWIFT.jpeg",
  },
  {
    slug: "etios",
    name: "Toyota Etios",
    type: "sedan",
    tag: "Sedan",
    desc: "Best suited for long-distance highway travel, with generous interior and cargo space",
    seats: 4,
    qty: 1,
    price: 13,
    bata: 400,
    img: "/toyota etios.jpeg",
  },
  {
    slug: "innova",
    name: "Toyota Innova",
    type: "suv",
    tag: "MUV",
    desc: "A dependable, comfortable ride for family and group journeys",
    seats: 7,
    qty: 1,
    price: 18,
    bata: 500,
    img: "/INNOVA.jpeg",
  },
  {
    slug: "innova-crysta",
    name: "Toyota Innova Crysta",
    type: "suv",
    tag: "Premium MUV",
    desc: "Our premium multi-utility vehicle, for a more comfortable journey",
    seats: 7,
    qty: 1,
    price: 20,
    bata: 500,
    img: "/crysta hill.jpg",
  },
  {
    slug: "bus-21",
    name: "21 Seater Bus",
    type: "bus",
    tag: "Bus",
    desc: "A luxurious AC bus with spacious storage and pushback seats",
    seats: 21,
    qty: 3,
    price: 37,
    bata: 800,
    img: "/21 SEATER.jpeg",
  },
  {
    slug: "bus-25",
    name: "25 Seater Bus",
    type: "bus",
    tag: "Bus",
    desc: "Seating comfort, ample storage capacity and individual AC vents",
    seats: 25,
    qty: 2,
    price: 38,
    bata: 800,
    img: "/25 seater bus2.jpeg",
  },
];

export const FLEET_FILTERS: { label: string; value: VehicleType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Sedans", value: "sedan" },
  { label: "Innova / Crysta", value: "suv" },
  { label: "Buses", value: "bus" },
];
