// Central place for every real business fact used across the site.
// Update here and it propagates everywhere.

export const SITE = {
  // Placeholder — replace with the live domain before launch. Every canonical URL,
  // the sitemap and the JSON-LD business schema are derived from this one value.
  url: "https://www.somuholidays.example",
  name: "Somu Holidays Tours and Travels",
  shortName: "Somu Holidays",
  tagline: "Luxury Innova Crysta, cab & bus rentals, planned end to end.",
  contactPerson: "Somashekhar B H",
  phonePrimary: "+91 93809 58852",
  phonePrimaryTel: "+919380958852",
  phoneSecondary: "+91 81055 23410",
  phoneSecondaryTel: "+918105523410",
  email: "somuholidaysrajajinagar@gmail.com",
  address: "#1406, 5th Main Rd, D-Block, 2nd Stage, Rajajinagar, Bengaluru, Karnataka 560010",
  whatsappNumber: "919380958852", // country code + number, no "+" or spaces
  whatsappDefaultMessage: "Hi, I'm interested in your services.",
  social: {
    instagram: "https://www.instagram.com/somuholidays04/",
    facebook: "https://www.facebook.com/share/1EkqNvrcoyf/",
    threads: "https://www.threads.com/@somuholidays04",
    // Built from the business name + address (no verified Place ID on file yet) —
    // replace with the real Google Business Profile share links once available.
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Somu+Holidays+Tours+and+Travels%2C+%231406%2C+5th+Main+Rd%2C+D-Block%2C+2nd+Stage%2C+Rajajinagar%2C+Bengaluru%2C+Karnataka+560010",
    googleReview:
      "https://www.google.com/maps/search/?api=1&query=Somu+Holidays+Tours+and+Travels%2C+%231406%2C+5th+Main+Rd%2C+D-Block%2C+2nd+Stage%2C+Rajajinagar%2C+Bengaluru%2C+Karnataka+560010",
    justdial: "https://jsdl.in/DT-152VOP1KURV",
  },
} as const;

export function waLink(message: string = SITE.whatsappDefaultMessage): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function unsplash(id: string, width = 900, quality = 70): string {
  if (id.startsWith("/")) return id;
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=${quality}&auto=format&fit=crop`;
}
