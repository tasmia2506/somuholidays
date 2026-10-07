import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import styles from "./DestinationsIntro.module.css";

const POINTS_LEFT = ["Transparent per-km pricing", "Chauffeur-driven, AC-fitted fleet"];
const POINTS_RIGHT = ["Routes planned for every family size", "24×7 on-trip support"];

export default function DestinationsIntro() {
  return (
    <section className="section" style={{ paddingBottom: 0 }}>
      <div className={`container ${styles.wrap}`}>
        <Reveal className={styles.left}>
          <span className={styles.kicker}>Somu Holidays</span>
          <h2 className={`display ${styles.title}`}>
            The perfect travel
            <br />
            plan for you &amp; your family
          </h2>
          <p className={styles.sub}>9+ vehicles across 6 categories, ready out of Rajajinagar, Bengaluru.</p>
        </Reveal>

        <Reveal className={styles.photoCol} delay={0.1}>
          <div className={styles.photo}>
            <Image src="/heritaage background image.jpeg" alt="Karnataka heritage site" fill sizes="320px" />
          </div>
          <div className={styles.badge} aria-hidden="true">
            <svg viewBox="0 0 140 140" className={styles.badgeSpin}>
              <circle cx="70" cy="70" r="68" />
              <path id="destBadgeCircle" d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0" fill="none" />
              <text>
                <textPath href="#destBadgeCircle" startOffset="0%">
                  TRUSTED OPERATOR • BENGALURU •
                </textPath>
              </text>
            </svg>
            <span className={styles.badgeCenter}>
              <Icon name="shield" size={18} />
            </span>
          </div>
        </Reveal>

        <Reveal className={styles.right} delay={0.15}>
          <h3 className={styles.rightHead}>Waiting for adventure? Don&apos;t miss them</h3>
          <p className={styles.sub}>
            Every route comes with a matched vehicle, a full itinerary and a price with no hidden lines.
          </p>
          <div className={styles.points}>
            <ul>
              {POINTS_LEFT.map((p) => (
                <li key={p}>
                  <Icon name="check" size={14} />
                  {p}
                </li>
              ))}
            </ul>
            <ul>
              {POINTS_RIGHT.map((p) => (
                <li key={p}>
                  <Icon name="check" size={14} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
