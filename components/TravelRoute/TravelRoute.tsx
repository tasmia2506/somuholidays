"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MOBILE_STOP_COUNT, ROUTE_STOPS, type RouteStop } from "@/lib/route";
import styles from "./TravelRoute.module.css";

// Rescales a subset of stops to fill the 0–100 canvas, so dropping stops
// (e.g. on mobile) doesn't leave the route crowded into one corner.
function normalize(stops: RouteStop[]): RouteStop[] {
  const pad = 8;
  const xs = stops.map((s) => s.x);
  const ys = stops.map((s) => s.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const spanX = maxX - minX || 1;
  const spanY = maxY - minY || 1;
  return stops.map((s) => ({
    name: s.name,
    x: pad + ((s.x - minX) / spanX) * (100 - pad * 2),
    y: pad + ((s.y - minY) / spanY) * (100 - pad * 2),
  }));
}

// A smooth Catmull-Rom curve converted to a cubic bezier, one segment at a time,
// so each leg of the journey can be drawn and revealed independently.
function segmentPath(points: RouteStop[], i: number): string {
  const p0 = points[i - 1] ?? points[i];
  const p1 = points[i];
  const p2 = points[i + 1];
  const p3 = points[i + 2] ?? p2;
  const cp1x = p1.x + (p2.x - p0.x) / 6;
  const cp1y = p1.y + (p2.y - p0.y) / 6;
  const cp2x = p2.x - (p3.x - p1.x) / 6;
  const cp2y = p2.y - (p3.y - p1.y) / 6;
  return `M ${p1.x} ${p1.y} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2.x} ${p2.y}`;
}

function fullPath(points: RouteStop[]): string {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const seg = segmentPath(points, i);
    d += seg.slice(seg.indexOf("C") - 1);
  }
  return d;
}

function labelAnchor(p: RouteStop): "start" | "middle" | "end" {
  if (p.x > 82) return "end";
  if (p.x < 18) return "start";
  return "middle";
}

function labelDy(p: RouteStop): number {
  return p.y > 55 ? -10 : 14;
}

export default function TravelRoute({ variant = "corner" }: { variant?: "corner" | "full" }) {
  const glowId = useId();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const stops = useMemo(
    () => normalize(isMobile ? ROUTE_STOPS.slice(0, MOBILE_STOP_COUNT) : ROUTE_STOPS),
    [isMobile]
  );
  const full = useMemo(() => fullPath(stops), [stops]);

  const segmentRefs = useRef<(SVGPathElement | null)[]>([]);
  const pinRefs = useRef<(SVGGElement | null)[]>([]);
  const markerRef = useRef<SVGGElement>(null);
  const fullPathRef = useRef<SVGPathElement>(null);

  // Reset before this render's callback refs repopulate them below — the documented
  // pattern for collecting a ref list (react.dev: "How to manage a list of refs").
  // eslint-disable-next-line react-hooks/refs
  segmentRefs.current = [];
  // eslint-disable-next-line react-hooks/refs
  pinRefs.current = [];

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

    const segments = segmentRefs.current.filter(Boolean) as SVGPathElement[];
    const pins = pinRefs.current.filter(Boolean) as SVGGElement[];
    const marker = markerRef.current;
    const path = fullPathRef.current;
    if (!segments.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(segments, { drawSVG: "100%" });
      gsap.set(pins, { opacity: 1, scale: 1 });
      if (marker) gsap.set(marker, { opacity: 0 });
      return;
    }

    gsap.set(segments, { drawSVG: "0%" });
    gsap.set(pins, { opacity: 0, scale: 0.4, transformOrigin: "50% 50%" });
    if (pins[0]) gsap.set(pins[0], { opacity: 1, scale: 1 });

    if (marker && path) {
      gsap.set(marker, { opacity: 1 });
      gsap.set(marker, {
        motionPath: { path, align: path, alignOrigin: [0.5, 0.5], autoRotate: true, start: 0, end: 0 },
      });
    }

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.3, delay: 0.4 });

    segments.forEach((seg, i) => {
      const duration = 0.95;
      tl.to(seg, { drawSVG: "100%", duration, ease: "power2.inOut" });
      if (marker && path) {
        tl.to(
          marker,
          {
            motionPath: {
              path,
              align: path,
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              start: i / segments.length,
              end: (i + 1) / segments.length,
            },
            duration,
            ease: "power2.inOut",
          },
          "<"
        );
      }
      if (pins[i + 1]) {
        tl.to(pins[i + 1], { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }, "-=0.25");
      }
    });

    return () => {
      tl.kill();
    };
  }, [stops, full]);

  return (
    <div className={`${styles.wrap} ${variant === "full" ? styles.wrapFull : ""}`} aria-hidden="true">
      <div className={`${styles.canvas} ${variant === "full" ? styles.canvasFull : ""}`}>
        <svg key={stops.length} className={styles.svg} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="1.6" />
            </filter>
          </defs>

          <path ref={fullPathRef} d={full} className={styles.hiddenPath} />

          {stops.slice(0, -1).map((_, i) => (
            <path key={`glow-${i}`} d={segmentPath(stops, i)} className={styles.glow} filter={`url(#${glowId})`} />
          ))}
          {stops.slice(0, -1).map((_, i) => (
            <path
              key={`seg-${i}`}
              ref={(el) => {
                segmentRefs.current[i] = el;
              }}
              d={segmentPath(stops, i)}
              className={styles.segment}
            />
          ))}

          <g ref={markerRef} className={styles.marker}>
            <rect x="-4.1" y="-2.7" width="8.3" height="4.7" rx="1.3" className={styles.busBody} />
            <rect x="-3.4" y="-2.0" width="6.8" height="1.5" rx="0.3" className={styles.busWindow} />
            <circle cx="-2.25" cy="2.25" r="1.05" className={styles.busWheel} />
            <circle cx="2.25" cy="2.25" r="1.05" className={styles.busWheel} />
          </g>

          {stops.map((stop, i) => (
            <g
              key={stop.name}
              ref={(el) => {
                pinRefs.current[i] = el;
              }}
              className={styles.pin}
            >
              {i === 0 && <circle cx={stop.x} cy={stop.y} r="4.4" className={styles.pinRing} />}
              <circle cx={stop.x} cy={stop.y} r="1.7" className={styles.pinDot} />
              <text
                x={stop.x}
                y={stop.y + labelDy(stop)}
                textAnchor={labelAnchor(stop)}
                className={`${styles.label} ${variant === "full" ? styles.labelDark : ""}`}
              >
                {stop.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
