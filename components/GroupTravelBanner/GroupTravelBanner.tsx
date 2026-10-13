import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { FLEET } from "@/lib/fleet";
import styles from "./GroupTravelBanner.module.css";

const BUS_POINTS = [
  "21-seater & 25-seater AC buses with pushback seats",
  "Individual AC vents and ample luggage storage",
  "Chauffeur-driven for corporate offsites, college trips & pilgrimage groups",
];

export default function GroupTravelBanner() {
  const buses = FLEET.filter((v) => v.type === "bus");
  const totalBuses = buses.reduce((sum, v) => sum + v.qty, 0);

  return (
    <section className={`onDark ${styles.band}`}>
      <div className={`container ${styles.content}`}>
        <Reveal>
          <span className="eyebrow">Group &amp; Bus Travel</span>
          <h2 className="display h2">21 &amp; 25 Seater Bus Rental in Bengaluru</h2>
          <p className="lead">
            Travelling as a group? Somu Holidays runs a fleet of {totalBuses} AC buses — 21-seater and 25-seater —
            for corporate offsites, college trips, family functions and pilgrimage tours across Karnataka and
            beyond, with a dedicated chauffeur on every trip.
          </p>
          <ul className={styles.points}>
            {BUS_POINTS.map((point) => (
              <li key={point}>
                <Icon name="check" size={16} />
                {point}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
            <Link
              href="/21-seater-bus-rental-bangalore"
              className="btn btnPrimary"
              title="21 Seater Bus Rental Rates & Specifications"
            >
              21-Seater Bus Rates <Icon name="arrow" size={18} />
            </Link>
            <Link
              href="/contact#book"
              className="btn btnGhost"
              title="Book a Bus with Somu Holidays"
            >
              Book a Bus
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
