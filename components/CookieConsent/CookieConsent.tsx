"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getCookie, setCookie } from "@/lib/cookies";
import styles from "./CookieConsent.module.css";

const COOKIE_NAME = "somu_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Must stay false on the server and only flip after mount, or the banner's
    // SSR markup won't match a client that already has the consent cookie.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!getCookie(COOKIE_NAME)) setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.documentElement.style.setProperty("--cookie-banner-offset", "0px");
      return;
    }
    const el = bannerRef.current;
    if (!el) return;
    const sync = () => {
      document.documentElement.style.setProperty("--cookie-banner-offset", `${el.offsetHeight}px`);
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [visible]);

  function handleChoice(choice: "accepted" | "rejected") {
    setCookie(COOKIE_NAME, choice, 180);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div ref={bannerRef} className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className={styles.inner}>
        <p>
          We use cookies to remember your preferences and understand how our site is used. See our{" "}
          <Link href="/privacy">Privacy Policy</Link> for details.
        </p>
        <div className={styles.actions}>
          <button type="button" className={`btn ${styles.reject}`} onClick={() => handleChoice("rejected")}>
            Reject
          </button>
          <button type="button" className="btn btnPrimary" onClick={() => handleChoice("accepted")}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
