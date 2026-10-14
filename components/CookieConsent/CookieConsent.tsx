"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getCookie, setCookie } from "@/lib/cookies";
import styles from "./CookieConsent.module.css";

// Bump to v2 so returning users who dismissed previously see the prompt again
const COOKIE_NAME = "somu_cookie_consent_v2";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if query param requests reset (?cookies=1 or ?cookie-settings=1)
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("cookies") || urlParams.has("cookie-settings")) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true);
        return;
      }
    }

    // Must stay false on server and only flip after mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!getCookie(COOKIE_NAME)) {
      setVisible(true);
    }
  }, []);

  // Listen for global open event from footer or settings buttons
  useEffect(() => {
    const handleOpen = () => setVisible(true);
    window.addEventListener("somu:open-cookie-consent", handleOpen);
    return () => window.removeEventListener("somu:open-cookie-consent", handleOpen);
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
        <div className={styles.textWrap}>
          <span className={styles.cookieBadge}>🍪 Cookies &amp; Privacy</span>
          <p>
            We use cookies to enhance your browsing experience, remember route and fleet preferences, and ensure secure booking.
            Read our <Link href="/privacy">Privacy Policy</Link> for details.
          </p>
        </div>
        <div className={styles.actions}>
          <button type="button" className={`btn ${styles.reject}`} onClick={() => handleChoice("rejected")}>
            Reject Non-Essential
          </button>
          <button type="button" className="btn btnPrimary" onClick={() => handleChoice("accepted")}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
