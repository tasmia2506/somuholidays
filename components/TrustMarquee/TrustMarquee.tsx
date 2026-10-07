"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Icon, { type IconName } from "@/components/Icon";
import styles from "./TrustMarquee.module.css";

const ITEMS: { icon: IconName; title: string; caption: string }[] = [
  { icon: "shield", title: "Verified Drivers", caption: "Experienced & route-trained" },
  { icon: "clock", title: "24 × 7 Support", caption: "Dispatch & on-trip assistance" },
  { icon: "rupee", title: "Transparent Pricing", caption: "Per-km rates, zero hidden fees" },
  { icon: "sparkle", title: "Well-Maintained Fleet", caption: "Clean, sanitised & serviced" },
  { icon: "pin", title: "Custom Itineraries", caption: "Tailored holiday packages" },
];

function Group({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className={styles.group} aria-hidden={ariaHidden}>
      {ITEMS.map((item) => (
        <span className={styles.item} key={item.title}>
          <span className={styles.iconWrap}>
            <Icon name={item.icon} size={14} />
          </span>
          <span className={styles.text}>
            <strong>{item.title}</strong>
            <span className={styles.caption}>— {item.caption}</span>
          </span>
          <span className={styles.dot} aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function TrustMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const ctx = gsap.context(() => {
      // The track renders the item group twice back-to-back; animating exactly
      // half its width (one group) and looping creates a seamless marquee.
      const distance = track.scrollWidth / 2;
      gsap.to(track, {
        x: -distance,
        duration: distance / 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={`${styles.marquee} onDark`} aria-label="Our promises">
      <div className={styles.track} ref={trackRef}>
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
