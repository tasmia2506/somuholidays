import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { unsplash } from "@/lib/site";
import styles from "./ServicesHero.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div
        className={`${styles.dark} onDark`}
        style={{ backgroundImage: `url('${unsplash("1469854523086-cc02fe5d8800", 1600)}')` }}
      >
        <div className={`container ${styles.crumb}`}>
          <Link href="/">Home</Link>
          <Icon name="chevron" size={14} />
          <span>Services</span>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">Tailored Transportation</span>
          <h1 className="display h2">What We Cover</h1>
          <p className="lead" style={{ marginInline: "auto" }}>
            From a one-off airport run to a company&apos;s annual offsite — here&apos;s where Somu Holidays helps.
          </p>
        </div>
      </div>

      <div className={styles.light}>
        <div className={`container ${styles.photoRow}`}>
          <Reveal className={styles.photoWrap}>
            <div className={styles.photo}>
              <Image
                src="/CRYSTA INTERIOR.jpeg"
                alt="Somu Holidays vehicle interior"
                fill
                sizes="(min-width: 768px) 640px, 92vw"
                priority
              />
            </div>
            <div className={styles.badge} aria-hidden="true">
              <svg viewBox="0 0 140 140" className={styles.badgeSpin}>
                <circle cx="70" cy="70" r="68" />
                <path id="servicesBadgeCircle" d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0" fill="none" />
                <text>
                  <textPath href="#servicesBadgeCircle" startOffset="0%">
                    TRANSPARENT PRICING • NO HIDDEN FEES •
                  </textPath>
                </text>
              </svg>
              <span className={styles.badgeCenter}>
                <Icon name="rupee" size={18} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
