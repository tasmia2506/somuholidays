import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import EnquiryModal from "@/components/EnquiryModal/EnquiryModal";
import { DESTINATIONS } from "@/lib/destinations";
import { unsplash } from "@/lib/site";
import styles from "./DestinationsPreview.module.css";

// These headline the homepage bento grid; the full set lives on /destinations.
const PREVIEW_SLUGS = [
  "mysuru",
  "coorg",
  "chikmagalur",
  "hampi",
  "gokarna",
  "goa",
  "alleppey",
  "madurai",
  "kumarakom",
  "agra",
  "jaipur",
  "manali",
];

export default function DestinationsPreview({ limit }: { limit?: number }) {
  const slugs = limit ? PREVIEW_SLUGS.slice(0, limit) : PREVIEW_SLUGS;
  const items = slugs.map((slug) => DESTINATIONS.find((d) => d.slug === slug)!).filter(Boolean);

  return (
    <section className="section" id="destinations">
      <div className="container">
        <div className="sectionHead">
          <Reveal>
            <h2 className="display h2 gradientHeading">Where can Somu Holidays take you next?</h2>
            <p className="lead">
              Weekend road trips from Bengaluru and week-long holiday packages across India, each matched with the
              right vehicle and a pre-calculated estimate.
            </p>
          </Reveal>
          <Link href="/destinations" className="btn btnForest">
            View All Destinations <Icon name="arrow" size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {items.map((d, i) => (
            <Reveal
              key={d.slug}
              delay={(i % 3) * 0.06}
              className={i === 0 ? styles.tall : undefined}
              style={{ height: "100%" }}
            >
              <EnquiryModal
                destinationName={d.name}
                triggerClassName={styles.card}
                ariaLabel={`Book a cab to ${d.name}`}
                triggerLabel={
                  <>
                    <Image
                      src={unsplash(d.heroImg, i === 0 ? 1000 : 900)}
                      alt={d.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className={styles.info}>
                      <div>
                        <span className={styles.cat}>{d.category}</span>
                        <h3>{d.name}</h3>
                        <div className={styles.meta}>{d.meta}</div>
                      </div>
                      <span className={styles.go}>
                        <Icon name="arrowUpRight" size={18} />
                      </span>
                    </div>
                  </>
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
