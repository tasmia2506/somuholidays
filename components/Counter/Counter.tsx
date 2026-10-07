"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) =>
      prefix + n.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;

    el.textContent = format(0);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      el.textContent = format(value);
      return;
    }

    const obj = { val: 0 };
    let tween: gsap.core.Tween | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        tween = gsap.to(obj, {
          val: value,
          duration: 1.6,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = format(obj.val);
          },
        });
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      tween?.kill();
    };
  }, [value, decimals, prefix, suffix]);

  return <span ref={ref}>{prefix + "0" + suffix}</span>;
}
