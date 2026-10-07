# Somu Holidays Tours and Travels — website

Next.js (App Router) + TypeScript + CSS Modules rebuild of the Somu Holidays site.

## Stack

- **Next.js 16 / React 19 / TypeScript** — App Router, static generation for every page including all destination packages (`generateStaticParams`).
- **CSS Modules + modern vanilla CSS** — one `*.module.css` per component; shared tokens, resets and utility classes (`.btn`, `.container`, `.eyebrow`, …) live in `app/globals.css`.
- **Motion** (`motion/react`) — scroll-triggered reveals (`components/Reveal.tsx`), the mobile drawer transition, and the FAQ accordion.
- **GSAP** — the hero's slow background zoom, the infinite trust marquee, and the animated stat counters.
- **Lenis** — smooth scrolling, wired up in `components/SmoothScroll.tsx` (also patches the known "fresh hash-link lands in the wrong place" issue between Lenis and the browser's native anchor jump).
- **Embla Carousel** — the Our Fleet section's carousel/filter.
- Three.js/R3F — not used; nothing on this site needed it.

## Structure

```
app/
  layout.tsx            Root layout: fonts, metadata, SmoothScroll wrapper
  globals.css            Design tokens, reset, shared utility classes
  page.tsx                Home
  not-found.tsx           Branded 404
  destinations/
    page.tsx              Destinations listing (filterable grid)
    [slug]/page.tsx        One package detail page per destination (SSG)
components/               One folder per component, each with its .module.css
lib/
  site.ts                 All real business facts (phone, email, address, socials, WhatsApp helper)
  fleet.ts                Real vehicle inventory & rates
  destinations.ts         Destination/holiday package content (itineraries, pricing — illustrative)
legacy-static/             The pre-migration plain HTML/CSS/JS site, kept for reference only
```

## Running it

```
npm install
npm run dev       # http://localhost:3000
npm run build && npm run start   # production build
```

## Known placeholders

- Destination package itineraries/pricing in `lib/destinations.ts` are illustrative — the business only supplied fleet rental rates, not package pricing.
- `metadataBase` in `app/layout.tsx` points at a placeholder domain; update it once the site has a real one.
