"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/components/ServicesSection/ServicesSection";
import { waLink } from "@/lib/site";
import styles from "./ServicesTimeline.module.css";

export default function ServicesTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={`section bgForest onDark ${styles.band}`}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">About Our Services</span>
          <h2 className="display h2">Six ways we get you there</h2>
        </Reveal>

        <div className={styles.timeline} ref={trackRef}>
          <div className={styles.trackBg} aria-hidden="true" />
          <motion.div className={styles.trackFill} style={{ height: lineHeight }} aria-hidden="true" />

          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className={styles.row}>
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.card}>
                <div className={styles.photo}>
                  <Image src={s.img} alt={s.title} fill sizes="(min-width: 640px) 220px, 140px" />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a
                    className={`btn btnPrimary ${styles.enquireBtn}`}
                    href={waLink(`Hi Somu Holidays, I'd like to enquire about ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire Now <Icon name="arrow" size={18} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={SERVICES.length * 0.06} className={styles.row}>
            <div className={`${styles.dot} ${styles.dotFinal}`} aria-hidden="true" />
            <div className={styles.finalCard}>
              <h3>Ready to book your trip?</h3>
              <p>Tell us your route and we&apos;ll match the right vehicle and price.</p>
              <Link href="/contact#book" className={`btn btnPrimary ${styles.enquireBtn}`}>
                Book Now <Icon name="arrow" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
