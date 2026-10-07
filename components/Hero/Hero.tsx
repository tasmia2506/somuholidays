"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Icon from "@/components/Icon";
import styles from "./Hero.module.css";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 18, ease: "power1.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className={`${styles.hero} onDark`}>
      <div className={styles.media}>
        <video
          ref={videoRef}
          src="/landing-page-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      </div>

      <div className="container">
        <div className={styles.content}>
          <h1 className={`display ${styles.heading}`}>
            Your Journey.
            <br />
            Our Priority.
          </h1>
          <p>
            Somu Holidays provides reliable cab and bus transportation services — Innova, Innova Crysta, sedans,
            and 21 &amp; 25 seater AC buses — for comfortable, chauffeur-driven travel across Bengaluru and beyond.
          </p>
          <div className={styles.actions}>
            <Link href="/contact#book" className="btn btnPrimary">
              Book Your Ride <Icon name="arrow" size={18} />
            </Link>
            <Link href="/#fleet" className="btn btnGhost">
              Explore Our Fleet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
