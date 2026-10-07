import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import FleetSection from "@/components/FleetSection/FleetSection";
import CtaSection from "@/components/CtaSection/CtaSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import type { LocationSeo } from "@/lib/seo-locations";
import { waLink } from "@/lib/site";
import styles from "./LocationSeoPage.module.css";

const SERVICE_BLOCKS = (location: LocationSeo) => [
  { icon: "car" as const, title: "Local Cab Service", text: location.localCab },
  { icon: "pin" as const, title: "Airport Taxi", text: location.airportCab },
  { icon: "map" as const, title: "Outstation Cab Service", text: location.outstationCab },
  { icon: "star" as const, title: "Sightseeing Cabs", text: location.sightseeingCab },
];

const WHY_CHOOSE = [
  "Chauffeur-driven, AC-fitted fleet — no self-drive",
  "Transparent per-km pricing, shown before you confirm",
  "24×7 support, directly with the person driving you",
  "Vehicles for every group size, from a sedan to a 25-seater bus",
];

export default function LocationSeoPage({ location }: { location: LocationSeo }) {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <section className="pageBanner">
          <div className="container">
            <div className="crumb">
              <Link href="/">Home</Link>
              <Icon name="chevron" size={14} />
              <span>{location.h1}</span>
            </div>
            <h1 className="display">{location.h1}</h1>
            <p>{location.intro}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.serviceGrid}>
              {SERVICE_BLOCKS(location).map((block, i) => (
                <Reveal key={block.title} delay={i * 0.06} className={styles.serviceCard}>
                  <span className={styles.serviceIcon}>
                    <Icon name={block.icon} size={18} />
                  </span>
                  <h2>{block.title}</h2>
                  <p>{block.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section bgIvory50">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Popular Routes</span>
              <h2 className="display h2">Outstation taxi routes from {location.name}</h2>
              <p className="lead">
                Day trips and multi-day drives out of {location.name}, each with its own route page covering pickup
                points, drop points and places worth the stop.
              </p>
            </Reveal>
            <div className={styles.routeGrid}>
              {location.popularRoutes.map((route) =>
                route.href ? (
                  <Link key={route.label} href={route.href} className={styles.routeChip}>
                    {route.label}
                    <Icon name="arrow" size={14} />
                  </Link>
                ) : (
                  <span key={route.label} className={styles.routeChipStatic}>
                    {route.label}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.whyWrap}>
              <Reveal>
                <span className="eyebrow">Why Choose Somu Holidays</span>
                <h2 className="display h2">Booking a cab shouldn&apos;t feel like guesswork</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <ul className={styles.whyList}>
                  {WHY_CHOOSE.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={16} />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <FleetSection />

        <CtaSection />

        <FaqSection
          items={location.faqs}
          title={`${location.name} taxi service — common questions`}
          lead={`What travellers usually ask before booking a ${location.name.toLowerCase()} taxi. If yours isn't here, message us and we'll answer directly.`}
          id="location-faq"
        />

        <section className={`section ${styles.linksSection}`}>
          <div className={`container ${styles.linksRow}`}>
            <span>Explore more:</span>
            <Link href="/fleet">Our Fleet</Link>
            <Link href="/services">Services</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/contact#book">Book a Vehicle</Link>
            <a href={waLink(`Hi Somu Holidays, I'd like to book a ${location.name} taxi.`)} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
