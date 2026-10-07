import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/site";
import styles from "./CtaSection.module.css";

export default function CtaSection({ bgImage }: { bgImage?: string } = {}) {
  return (
    <section
      className={`section bgForest onDark ${styles.cta}`}
      style={{ position: "relative", ...(bgImage ? { backgroundImage: `url('${bgImage}')` } : {}) }}
    >
      {bgImage && <span className={styles.overlay} aria-hidden="true" />}
      <span className={`${styles.glow} ${styles.glowA}`} aria-hidden="true" />
      <span className={`${styles.glow} ${styles.glowB}`} aria-hidden="true" />
      <Reveal className="container" style={{ position: "relative" }}>
        <span className="eyebrow">Ready When You Are</span>
        <h2 className={`display h2 ${styles.heading}`}>Your next holiday is one message away</h2>
        <p className={`lead ${styles.lead}`}>
          Tell us your route and headcount. We&apos;ll match the right vehicle and send a fair, upfront price in
          minutes.
        </p>
        <div className={styles.actions}>
          <Link href="/contact#book" className="btn btnPrimary">
            Book Your Ride <Icon name="arrow" size={18} />
          </Link>
          <a className="btn btnGhost" href={waLink()} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
