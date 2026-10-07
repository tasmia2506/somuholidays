"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import FleetCard from "@/components/FleetCard/FleetCard";
import { FLEET, FLEET_FILTERS, type VehicleType } from "@/lib/fleet";
import styles from "./FleetSection.module.css";

export default function FleetSection({ showAll = false }: { showAll?: boolean }) {
  const [filter, setFilter] = useState<VehicleType | "all">("all");
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true });

  const vehicles = filter === "all" ? FLEET : FLEET.filter((v) => v.type === filter);

  useEffect(() => {
    emblaApi?.reInit();
    emblaApi?.scrollTo(0);
  }, [emblaApi, filter]);

  return (
    <section className="section" id="fleet">
      <div className="container">
        <div className={styles.headWrap}>
          <Reveal className={styles.heading}>
            <span className={styles.kicker}>Our Fleet</span>
            <h2 className={`display ${styles.title}`}>Which vehicles can you book with Somu Holidays?</h2>
            {!showAll && (
              <div className={styles.headActions}>
                <Link href="/fleet" className="btn btnForest">
                  View More Vehicles <Icon name="arrow" size={16} />
                </Link>
              </div>
            )}
          </Reveal>

          <Reveal className={styles.headBody} delay={0.1}>
            <p className={styles.blurb}>
              Sedans for a quick city run, Innova and Innova Crysta for the family, and 21-seater &amp; 25-seater AC
              buses for corporate offsites, college trips and pilgrimage groups — every vehicle is serviced,
              AC-fitted and chauffeur-driven.
            </p>
          </Reveal>
        </div>

        <Reveal className={styles.filters}>
          {FLEET_FILTERS.map((f) => (
            <button
              key={f.value}
              className={`chip ${filter === f.value ? "chipActive" : ""}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {showAll ? (
          <div className={styles.grid}>
            {vehicles.map((v) => (
              <FleetCard key={v.slug} vehicle={v} />
            ))}
          </div>
        ) : (
          <div className={styles.viewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {vehicles.map((v) => (
                <div className={styles.slide} key={v.slug}>
                  <FleetCard vehicle={v} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
