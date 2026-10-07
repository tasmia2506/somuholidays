import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { SITE, waLink } from "@/lib/site";
import styles from "./AdventureBand.module.css";

export default function AdventureBand() {
  return (
    <section className={`section ${styles.band}`}>
      <Reveal className="container" style={{ position: "relative", zIndex: 1 }}>
        <span className={styles.kicker}>Don&apos;t See Your Destination?</span>
        <h2 className={styles.headline}>Explore</h2>

        <div className={styles.foot}>
          <p className={styles.sub}>
            Tell us where you want to go and for how long — we&apos;ll put together a vehicle, route and price to
            match.
          </p>
          <div className={styles.contact}>
            <div className={styles.photo}>
              <Image src="/about card.jpeg" alt="" fill sizes="64px" />
            </div>
            <div>
              <Link href="/contact#book" className={`btn btnPrimary ${styles.btn}`}>
                Enquire Now <Icon name="arrow" size={16} />
              </Link>
              <a className={styles.phone} href={`tel:${SITE.phonePrimaryTel}`}>
                {SITE.phonePrimary}
              </a>
            </div>
          </div>
        </div>

        <a className={styles.waLink} href={waLink()} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={16} /> Chat on WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
