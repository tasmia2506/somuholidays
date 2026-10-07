"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useLayoutEffect } from "react";
import type { ReactNode } from "react";

const HEADER_OFFSET = -90;

// Jumping straight to a URL with a #hash (a fresh load, or a cross-page
// Link to "/#fleet") races two uncoordinated scrollers: the browser's native,
// instant anchor jump fires before Lenis has measured the page (images and
// fonts still loading), and Lenis then starts smoothing from scroll 0 —
// leaving the viewport in whatever stale position the native jump left it.
// This suppresses the native jump and asks Lenis to do the one scroll, once
// it's actually ready to measure the real layout.
function HashScrollFix() {
  const lenis = useLenis();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useLayoutEffect(() => {
    if (!lenis || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    const raf = requestAnimationFrame(() => {
      lenis.scrollTo(target, { offset: HEADER_OFFSET, immediate: true });
    });
    return () => cancelAnimationFrame(raf);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <HashScrollFix />
      {children}
    </ReactLenis>
  );
}
