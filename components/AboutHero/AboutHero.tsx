import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { unsplash } from "@/lib/site";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div
        className={`${styles.dark} onDark`}
        style={{ backgroundImage: `url('${unsplash("1622725859789-8e9ccf920693", 1600)}')` }}
      >
        <div className={`container ${styles.crumb}`}>
          <Link href="/">Home</Link>
          <Icon name="chevron" size={14} />
          <span>About Us</span>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowText}>About Somu Holidays</span>
          </div>
          <h1 className={`display ${styles.title}`}>Who We Are</h1>
          <p className={styles.sub}>
            The fleet, the driver on the other end of the call and the trip plan behind Somu Holidays.
          </p>
        </div>
      </div>

      <div className={styles.light}>
        <div className={`container ${styles.photoRow}`}>
          <Reveal className={styles.photoWrap}>
            <div className={styles.photo}>
              <Image
                src="/about card.jpeg"
                alt="Somu Holidays fleet, Bengaluru"
                fill
                sizes="(min-width: 768px) 640px, 92vw"
                priority
              />
            </div>
            <div className={styles.badge} aria-hidden="true">
              <svg viewBox="0 0 140 140" className={styles.badgeSpin}>
                <circle cx="70" cy="70" r="68" />
                <path id="badgeCircle" d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0" fill="none" />
                <text>
                  <textPath href="#badgeCircle" startOffset="0%">
                    24 × 7 SUPPORT • ALWAYS ON CALL •
                  </textPath>
                </text>
              </svg>
              <span className={styles.badgeCenter}>
                <Icon name="phone" size={18} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
