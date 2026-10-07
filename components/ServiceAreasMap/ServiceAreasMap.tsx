import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { unsplash } from "@/lib/site";
import styles from "./ServiceAreasMap.module.css";

const CITIES = [
  {
    slug: "mysuru",
    name: "Mysuru",
    img: "1590766940554-634a7ed41450",
    points: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "St. Philomena's Church"],
  },
  {
    slug: "coorg",
    name: "Coorg",
    img: "1757702328394-a71ad4c417c2",
    points: ["Raja's Seat, Madikeri", "Abbey Falls", "Dubare Elephant Camp", "Golden Temple, Bylakuppe"],
  },
  {
    slug: "hampi",
    name: "Hampi",
    img: "1651569213711-b29d1fc3f995",
    points: ["Vittala Temple & stone chariot", "Virupaksha Temple", "Matanga Hill viewpoint", "Lotus Mahal"],
  },
  {
    slug: "gokarna",
    name: "Gokarna",
    img: "1617467053978-276d9d4d5d11",
    points: ["Om Beach & Kudle Beach", "Mahabaleshwar Temple", "Half Moon & Paradise Beach", "Sunset point"],
  },
  {
    slug: "chikmagalur",
    name: "Chikmagalur",
    img: "1622725859789-8e9ccf920693",
    points: ["Mullayanagiri peak", "Hebbe Falls", "Baba Budangiri range", "Coffee estate stays"],
  },
];

export default function ServiceAreasMap() {
  return (
    <section className="section bgIvory50">
      <div className="container">
        <div className="sectionHead">
          <Reveal>
            <span className="eyebrow">Where We Drive</span>
            <h2 className="display h2">Bengaluru outward, across Karnataka</h2>
            <p className="lead">
              Based in Rajajinagar, Bengaluru — with routes planned to the state&apos;s heritage towns, hill stations
              and coastline.
            </p>
          </Reveal>
          <Link href="/destinations" className="btn btnForest">
            View All Destinations <Icon name="arrow" size={16} />
          </Link>
        </div>

        <div className={styles.layout}>
          <Reveal className={styles.mapCol}>
            <iframe
              title="Somu Holidays service area — Karnataka"
              src="https://www.google.com/maps?q=Karnataka,India&z=6&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <div className={styles.cityGrid}>
            {CITIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06} className={styles.cityCard}>
                <div className={styles.cityPhoto}>
                  <Image src={unsplash(c.img, 400)} alt={c.name} fill sizes="88px" />
                </div>
                <div>
                  <Link href={`/destinations/${c.slug}`} className={styles.cityName}>
                    {c.name}
                  </Link>
                  <ul>
                    {c.points.map((p) => (
                      <li key={p}>
                        <Icon name="pin" size={11} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
