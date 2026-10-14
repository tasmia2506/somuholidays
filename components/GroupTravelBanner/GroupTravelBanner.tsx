import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { FLEET } from "@/lib/fleet";
import styles from "./GroupTravelBanner.module.css";

const BUS_POINTS = [
  "21-seater & 25-seater luxury AC buses with 2x1 & 2x2 pushback seats",
  "Individual AC cooling vents, USB charging points & ample luggage boot",
  "RTO & AIS-052 certified chauffeur for corporate offsites, college trips & pilgrimage",
];

const BUS_SPECS = [
  { label: "Fleet Capacity", val: "21 & 25 Seater" },
  { label: "Transparent Rate", val: "From ₹37 / km" },
  { label: "Chauffeur", val: "Verified & Insured" },
];

export default function GroupTravelBanner() {
  const buses = FLEET.filter((v) => v.type === "bus");
  const totalBuses = buses.reduce((sum, v) => sum + v.qty, 0);

  return (
    <section className={`onDark ${styles.band}`} aria-label="Group and bus travel banner">
      <div className="container">
        <Reveal>
          <div className={styles.card}>
            <span className={styles.eyebrowBadge}>
              <Icon name="sparkle" size={14} /> Group &amp; Bus Travel
            </span>
            <h2 className={`display ${styles.heading}`}>21 &amp; 25 SEATER BUS RENTAL IN BENGALURU</h2>
            <p className={styles.lead}>
              Travelling as a group? Somu Holidays runs a fleet of {totalBuses} luxury AC buses — 21-seater and 25-seater —
              for corporate offsites, college trips, family functions and pilgrimage tours across Karnataka and beyond,
              with a dedicated chauffeur on every trip.
            </p>

            <div className={styles.specsRow}>
              {BUS_SPECS.map((spec) => (
                <div key={spec.label} className={styles.specItem}>
                  <span className={styles.specLabel}>{spec.label}</span>
                  <strong className={styles.specVal}>{spec.val}</strong>
                </div>
              ))}
            </div>

            <ul className={styles.points}>
              {BUS_POINTS.map((point) => (
                <li key={point}>
                  <span className={styles.iconCircle}>
                    <Icon name="check" size={14} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className={styles.btnRow}>
              <Link
                href="/21-seater-bus-rental-bangalore"
                className="btn btnPrimary"
                title="21 Seater Bus Rental Rates & Specifications"
              >
                21-Seater Bus Rates <Icon name="arrow" size={18} />
              </Link>
              <Link
                href="/contact#book"
                className={`btn ${styles.ghostBtn}`}
                title="Book a Bus with Somu Holidays"
              >
                Book a Bus
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
