"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/site";
import styles from "./SiteHeader.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fleet", href: "/fleet" },
  { label: "Destinations", href: "/destinations" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(alwaysSolid);
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  function readSectionTheme() {
    const probeY = 80;
    const el = document.elementFromPoint(window.innerWidth / 2, probeY);
    const isDarkSection = Boolean(el?.closest(".onDark, .pageBanner, .pageBannerPhoto, .bgForest"));
    setDark(isDarkSection);
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!alwaysSolid) setScrolled(latest > 40);
    readSectionTheme();
  });

  useEffect(() => {
    // Sync the nav theme to whatever section is under it on first paint, before any scroll.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    readSectionTheme();
    window.addEventListener("resize", readSectionTheme);
    return () => window.removeEventListener("resize", readSectionTheme);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? (dark ? styles.scrolled : styles.scrolledLight) : ""}`}
      >
        <div className={`container ${styles.nav}`}>
          <Link href="/" className={styles.brand} aria-label="Somu Holidays home">
            <Image src="/logo.jpeg" alt="" width={44} height={44} className={styles.brandMark} priority />
            <span className={styles.brandText}>
              <strong>SOMU HOLIDAYS</strong>
              <span>Tours &amp; Travels</span>
            </span>
          </Link>

          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className={styles.navCta}>
            <a className={styles.navPhone} href={`tel:${SITE.phonePrimaryTel}`}>
              <Icon name="phone" size={16} />
              {SITE.phonePrimary}
            </a>
            <a className={styles.navPhoneIcon} href={`tel:${SITE.phonePrimaryTel}`} aria-label={`Call ${SITE.phonePrimary}`}>
              <Icon name="phone" size={18} />
            </a>
            <Link href="/contact#book" className={`btn btnPrimary ${styles.navCtaBtn}`}>
              Book a Vehicle <Icon name="arrow" size={16} />
            </Link>
            <button
              className={styles.menuToggle}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            className={styles.drawer}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 0.8, 0.24, 1] }}
          >
            <div className={styles.drawerHead}>
              <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
                <Image src="/logo.jpeg" alt="" width={44} height={44} className={styles.brandMark} />
                <span className={styles.brandText}>
                  <strong>SOMU HOLIDAYS</strong>
                  <span>Tours &amp; Travels</span>
                </span>
              </Link>
              <button className={styles.menuToggle} aria-label="Close menu" onClick={() => setOpen(false)}>
                <Icon name="close" size={22} />
              </button>
            </div>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.drawerFoot}>
              <Link href="/contact#book" className="btn btnPrimary" onClick={() => setOpen(false)}>
                Book a Vehicle <Icon name="arrow" size={16} />
              </Link>
              <a className="btn btnGhost" href={`tel:${SITE.phonePrimaryTel}`}>
                <Icon name="phone" size={16} />
                {SITE.phonePrimary}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
