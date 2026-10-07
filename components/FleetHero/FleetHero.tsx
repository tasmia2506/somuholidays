import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { unsplash } from "@/lib/site";
import styles from "./FleetHero.module.css";

export default function FleetHero() {
  return (
    <section className={styles.hero}>
      <div
        className={`${styles.dark} onDark`}
        style={{ backgroundImage: `url('${unsplash("1472214103451-9374bd1c798e", 1600)}')` }}
      >
        <div className={`container ${styles.crumb}`}>
          <Link href="/">Home</Link>
          <Icon name="chevron" size={14} />
          <span>Our Fleet</span>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowText}>Our Fleet</span>
          </div>
          <h1 className={`display h2 ${styles.heading}`}>Every Vehicle We Run</h1>
          <p className={styles.sub}>
            Sedans for a quick city run, Innova and Innova Crysta for the family, and 21/25-seater buses for the
            whole group — every vehicle is serviced, AC-fitted and chauffeur-driven.
          </p>
        </div>
      </div>

      <div className={styles.light}>
        <div className={`container ${styles.photoRow}`}>
          <Reveal className={styles.photoWrap}>
            <div className={styles.photo}>
              <Image
                src="/our fleet card.jpeg"
                alt="Somu Holidays fleet, Bengaluru"
                fill
                sizes="(min-width: 768px) 640px, 92vw"
                priority
              />
            </div>
            <div className={styles.badge} aria-hidden="true">
              <svg viewBox="0 0 140 140" className={styles.badgeSpin}>
                <circle cx="70" cy="70" r="68" />
                <path id="fleetBadgeCircle" d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0" fill="none" />
                <text>
                  <textPath href="#fleetBadgeCircle" startOffset="0%">
                    SERVICED REGULARLY • AC FITTED •
                  </textPath>
                </text>
              </svg>
              <span className={styles.badgeCenter}>
                <Icon name="car" size={18} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
