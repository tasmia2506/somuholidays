import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { FLEET } from "@/lib/fleet";
import { unsplash } from "@/lib/site";
import styles from "./AboutFleetBand.module.css";

const FEATURED_SLUGS = ["innova-crysta", "bus-21"];

export default function AboutFleetBand() {
  const vehicles = FEATURED_SLUGS.map((slug) => FLEET.find((v) => v.slug === slug)!).filter(Boolean);

  return (
    <section
      className={`section bgForest onDark ${styles.band}`}
      style={{ backgroundImage: "url('/theme based.jpeg')" }}
    >
      <div className={`container ${styles.wrap}`}>
        <Reveal className={styles.copy}>
          <span className="eyebrow">Our Fleet</span>
          <h2 className="display h2">The fleet behind every trip</h2>
          <p className="lead">
            Chauffeur-driven and AC-fitted, serviced on a schedule — not just before a photo gets taken.
          </p>
          <Link href="/fleet" className="btn btnPrimary">
            View Full Fleet <Icon name="arrow" size={16} />
          </Link>
        </Reveal>

        <div className={styles.grid}>
          {vehicles.map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.08} className={styles.item}>
              <div className={styles.photo}>
                <Image
                  src={v.img.startsWith("/") ? v.img : unsplash(v.img, 700)}
                  alt={v.name}
                  fill
                  sizes="(min-width: 768px) 220px, 44vw"
                />
              </div>
              <span>{v.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
