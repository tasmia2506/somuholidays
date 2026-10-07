import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import FleetSection from "@/components/FleetSection/FleetSection";
import CtaSection from "@/components/CtaSection/CtaSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import type { RouteSeo } from "@/lib/seo-routes";
import { waLink } from "@/lib/site";
import styles from "./RouteSeoPage.module.css";

export default function RouteSeoPage({ route }: { route: RouteSeo }) {
  const waMessage = `Hi Somu Holidays, I'd like to book a ${route.origin} to ${route.destination} cab. Please share availability and pricing.`;

  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <section className="pageBanner">
          <div className="container">
            <div className="crumb">
              <Link href="/">Home</Link>
              <Icon name="chevron" size={14} />
              <Link href="/taxi-service-bangalore">{route.origin} Taxi Service</Link>
              <Icon name="chevron" size={14} />
              <span>{route.destination}</span>
            </div>
            <h1 className="display">{route.h1}</h1>
            <p>{route.intro}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.optionGrid}>
              <Reveal className={styles.optionCard}>
                <span className={styles.optionIcon}>
                  <Icon name="arrow" size={18} />
                </span>
                <h2>One-Way Cab</h2>
                <p>{route.oneWay}</p>
              </Reveal>
              <Reveal delay={0.06} className={styles.optionCard}>
                <span className={styles.optionIcon}>
                  <Icon name="repeat" size={18} />
                </span>
                <h2>Round-Trip Cab</h2>
                <p>{route.roundTrip}</p>
              </Reveal>
              <Reveal delay={0.12} className={styles.optionCard}>
                <span className={styles.optionIcon}>
                  <Icon name="rupee" size={18} />
                </span>
                <h2>Outstation Pricing</h2>
                <p>{route.outstationInfo}</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section bgIvory50">
          <div className="container">
            <div className={styles.pointsGrid}>
              <Reveal>
                <span className="eyebrow">Pickup Points</span>
                <h2 className="display h2">Where we pick up in {route.origin}</h2>
                <ul className={styles.pointList}>
                  {route.pickupPoints.map((p) => (
                    <li key={p}>
                      <Icon name="pin" size={14} />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.08}>
                <span className="eyebrow">Drop Points</span>
                <h2 className="display h2">Where we drop in {route.destination}</h2>
                <ul className={styles.pointList}>
                  {route.dropPoints.map((p) => (
                    <li key={p}>
                      <Icon name="pin" size={14} />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Places To Visit</span>
              <h2 className="display h2">
                Worth the stop on the {route.origin} to {route.destination} route
              </h2>
            </Reveal>
            <ul className={styles.placesList}>
              {route.placesToVisit.map((place) => (
                <li key={place}>
                  <Icon name="check" size={16} />
                  {place}
                </li>
              ))}
            </ul>
            {route.destinationSlug && (
              <p className={styles.packageLink}>
                Planning a full itinerary instead of just the cab?{" "}
                <Link href={`/destinations/${route.destinationSlug}`} className="linkArrow">
                  See our {route.destination} holiday package <Icon name="arrow" size={14} />
                </Link>
              </p>
            )}
          </div>
        </section>

        <FleetSection />

        <CtaSection />

        <FaqSection
          items={route.faqs}
          title={`${route.origin} to ${route.destination} cab — common questions`}
          lead="What travellers usually ask before booking this route. If yours isn't here, message us and we'll answer directly."
          id="route-faq"
        />

        <section className={`section ${styles.linksSection}`}>
          <div className={`container ${styles.linksRow}`}>
            <span>Explore more:</span>
            <Link href="/taxi-service-bangalore">{route.origin} Taxi Service</Link>
            {route.destinationSlug && <Link href={`/destinations/${route.destinationSlug}`}>{route.destination} Package</Link>}
            <Link href="/fleet">Our Fleet</Link>
            <Link href="/contact#book">Book a Vehicle</Link>
            <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer">
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
