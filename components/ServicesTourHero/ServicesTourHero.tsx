import Link from "next/link";
import Icon from "@/components/Icon";
import styles from "./ServicesTourHero.module.css";

export default function ServicesTourHero() {
  return (
    <section className={`${styles.hero} onDark`} style={{ backgroundImage: "url('/our service hero card.jpeg')" }}>
      <div className={`container ${styles.content}`}>
        <div className={styles.crumb}>
          <Link href="/">Home</Link>
          <Icon name="chevron" size={14} />
          <span>Services</span>
        </div>
        <div className={styles.headRow}>
          <h1 className={styles.headline}>Services</h1>
          <div className={styles.side}>
            <p>
              Local cabs, airport transfers, outstation drives and planned holiday tours — every vehicle
              chauffeur-driven, AC-fitted and booked with a price you see upfront.
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
