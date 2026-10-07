"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import styles from "./HowItWorks.module.css";

const STEPS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "car",
    title: "Search & Choice",
    desc: "Tell us your dates and trip type — local, outstation or a multi-day tour — and pick the vehicle that fits.",
  },
  {
    icon: "map",
    title: "Select Destination",
    desc: "Choose from our curated routes and destinations, or share a custom itinerary and we'll plan it with you.",
  },
  {
    icon: "check",
    title: "Booking",
    desc: "Confirm your trip with a transparent quote — no hidden charges — and we'll have a driver ready on the day.",
  },
];

// Stop positions, left-aligned with each step card's centre (1/6, 1/2, 5/6).
const STOPS = [16.5, 50, 83.5];

export default function HowItWorks() {
  const markerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    gsap.set(marker, { left: `${STOPS[0]}%`, xPercent: -50 });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, delay: 0.3 });
    tl.call(() => setActive(0));
    tl.to(marker, {
      left: `${STOPS[1]}%`,
      duration: 1.6,
      ease: "power1.inOut",
      onComplete: () => setActive(1),
    });
    tl.to(marker, {
      left: `${STOPS[2]}%`,
      duration: 1.6,
      ease: "power1.inOut",
      onComplete: () => setActive(2),
    });
    tl.set(marker, { left: `${STOPS[0]}%` });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className={`section onDark ${styles.section}`}>
      <div className="container">
        <div className="sectionHead">
          <Reveal>
            <h2 className="display h2 gradientHeadingOnRed">Book Your Trip in Three Steps</h2>
          </Reveal>
        </div>

        <div className={styles.timeline} aria-hidden="true">
          <span className={styles.timelineLine} />
          {STOPS.map((pos) => (
            <span key={pos} className={styles.timelineDot} style={{ left: `${pos}%` }} />
          ))}
          <div ref={markerRef} className={styles.timelineMarker}>
            <svg viewBox="0 0 32 20" width="32" height="20">
              <rect x="1" y="3" width="30" height="12" rx="4" className={styles.busBody} />
              <rect x="4" y="5.5" width="24" height="5" rx="1.2" className={styles.busWindow} />
              <circle cx="8" cy="16.5" r="2.6" className={styles.busWheel} />
              <circle cx="24" cy="16.5" r="2.6" className={styles.busWheel} />
            </svg>
          </div>
        </div>

        <div className={styles.grid}>
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className={`${styles.card} ${active === i ? styles.cardActive : ""}`}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.icon}>
                  <Icon name={step.icon} size={24} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < STEPS.length - 1 && (
                  <span className={styles.connector} aria-hidden="true">
                    <Icon name="chevron" size={14} />
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
