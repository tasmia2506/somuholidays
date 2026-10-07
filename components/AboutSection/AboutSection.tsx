import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/site";
import styles from "./AboutSection.module.css";

const POINTS = [
  "Transparent per-km rate sheets, shared upfront with driver allowances",
  "Chauffeur-driven, AC-fitted fleet for every trip size",
  "Domestic tours, corporate & MICE travel and theme-based trips planned end to end",
];

const STATS = [
  { value: "9+", label: "Vehicles in Fleet" },
  { value: "6", label: "Vehicle Categories" },
  { value: "24×7", label: "On-Trip Support" },
];

export default function AboutSection({ showStoryLink = true }: { showStoryLink?: boolean }) {
  return (
    <section className="section" id="about">
      <div className={`container ${styles.wrap}`}>
        <Reveal className={styles.photoCol}>
          <div className={styles.photo}>
            <Image src="/CRYSTA OUTSIDE.jpeg" alt="Somu Holidays fleet, Bengaluru" fill sizes="(min-width: 1024px) 46vw, 92vw" />
            <div className={styles.photoCaption}>
              <span>Rajajinagar, Bengaluru</span>
              <span>Available 24 × 7</span>
            </div>
          </div>
          <div className={styles.statRow}>
            {STATS.map((s, i) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{String(i + 1).padStart(2, "0")} / {s.label}</span>
                <strong>{s.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className={styles.body} delay={0.1}>
          <h2 className="display h2 gradientHeading">
            A tour operator based in <span className={styles.accent}>Rajajinagar, Bengaluru</span>
          </h2>
          <p className="lead">
            Somu Holidays Tours and Travels is a Bengaluru-based tour operator specialising in Innova Crysta rentals,
            bus rentals and cab services. Along with city and outstation cabs, we plan domestic tours, corporate &amp;
            MICE travel and theme-based trips, including wildlife safaris, for clients across Bengaluru.
          </p>
          <ul className={styles.points}>
            {POINTS.map((point) => (
              <li key={point}>
                <Icon name="check" size={16} />
                {point}
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            {showStoryLink && (
              <Link href="/about" className="btn btnPrimary">
                Read Our Full Story <Icon name="arrow" size={16} />
              </Link>
            )}
            <a className="btn btnOutline" href={waLink()} target="_blank" rel="noopener noreferrer">
              Speak With Our Team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
