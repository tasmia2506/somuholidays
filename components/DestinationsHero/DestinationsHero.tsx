import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./DestinationsHero.module.css";

export default function DestinationsHero() {
  return (
    <section className={`${styles.hero} onDark`} style={{ backgroundImage: "url('/destionation hero card2.jpeg')" }}>
      <div className={`container ${styles.content}`}>
        <div className="crumb">
          <Link href="/">Home</Link>
          <Icon name="chevron" size={14} />
          <span>Destinations</span>
        </div>
        <div className={styles.headRow}>
          <h1 className={styles.headline}>Discover</h1>
          <div className={styles.side}>
            <p>
              Day trips and multi-day holidays across Karnataka, Kerala, Rajasthan and the Himalayas — each with
              a full itinerary, a chauffeur-driven vehicle and a price you see upfront.
            </p>
            <Link href="/fleet" className={`btn btnPrimary ${styles.sideBtn}`}>
              Explore Our Fleet <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
