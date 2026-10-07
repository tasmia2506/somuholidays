import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { DESTINATIONS } from "@/lib/destinations";
import { unsplash } from "@/lib/site";
import styles from "./TopDestinations.module.css";

const FEATURED_SLUGS = ["mysuru", "coorg", "hampi", "gokarna"];

export default function TopDestinations() {
  const items = FEATURED_SLUGS.map((slug) => DESTINATIONS.find((d) => d.slug === slug)!).filter(Boolean);

  return (
    <section className="section bgIvory50">
      <div className={`container ${styles.head}`}>
        <span className="eyebrow">Choose Your Experience</span>
        <h2 className="display h2">Top Attraction Destinations</h2>
        <p className="lead" style={{ marginInline: "auto" }}>
          A few of the routes we drive most — each one matched with a vehicle, a plan and a price.
        </p>
      </div>

      <div className={`container ${styles.row}`}>
        {items.map((d, i) => (
          <Reveal key={d.slug} delay={i * 0.08} className={`${styles.item} ${i % 2 === 1 ? styles.down : ""}`}>
            <Link href={`/destinations/${d.slug}`} className={styles.card}>
              <Image src={unsplash(d.heroImg, 500)} alt={d.name} fill sizes="(min-width: 1024px) 23vw, 45vw" />
              <span className={styles.name}>{d.name}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
