import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import type { Vehicle } from "@/lib/fleet";
import { unsplash } from "@/lib/site";
import styles from "./FleetCard.module.css";

export default function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  const src = vehicle.img.startsWith("/") ? vehicle.img : unsplash(vehicle.img, 700);
  const detailLink =
    vehicle.slug === "bus-21" ? "/21-seater-bus-rental-bangalore" : `/contact#book`;
  const imgAlt = `${vehicle.name} rental in Bangalore - ${vehicle.seats} seater ${vehicle.tag}`;
  const imgTitle = `${vehicle.name} (${vehicle.seats} Seater) - Somu Holidays Bangalore`;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Link
          href={detailLink}
          title={imgTitle}
          aria-label={`View details or book ${vehicle.name}`}
          style={{ display: "contents" }}
        >
          <Image
            src={src}
            alt={imgAlt}
            title={imgTitle}
            fill
            sizes="(min-width: 1024px) 25vw, 80vw"
          />
        </Link>
        <span className={styles.tag}>{vehicle.tag}</span>
        {vehicle.badge && (
          <span
            className={styles.tag}
            style={{
              left: "auto",
              right: 12,
              background: "var(--forest-800)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {vehicle.badge}
          </span>
        )}
        <span className={styles.priceChip}>
          ₹{vehicle.price}
          <small>/km</small>
        </span>
      </div>
      <div className={styles.body}>
        <h3>
          <Link href={detailLink} title={vehicle.name}>
            {vehicle.name}
          </Link>
        </h3>
        <p>{vehicle.desc}</p>
        <div className={styles.specs}>
          <span className={styles.spec}>
            <Icon name="seat" size={14} />
            {vehicle.seats} Seats
          </span>
          <span className={styles.spec}>
            <Icon name="snow" size={14} />
            AC
          </span>
          {vehicle.qty > 1 && (
            <span className={styles.spec}>
              <Icon name="car" size={14} />
              {vehicle.qty} in fleet
            </span>
          )}
        </div>
        <div className={styles.foot}>
          <div className={styles.priceNotes}>
            <div className={styles.priceNote}>
              <Icon name="rupee" size={13} />
              <span>Min 300 km/day · ₹{vehicle.bata} driver bata</span>
            </div>
            <div className={styles.priceNote}>
              <Icon name="map" size={13} />
              <span>+ toll, parking &amp; permit at actuals</span>
            </div>
          </div>
          <Link
            className="btn btnForest"
            href={detailLink}
            title={`Book ${vehicle.name} with Somu Holidays`}
          >
            {vehicle.slug === "bus-21" ? "Rates & Details" : "Book Now"}
          </Link>
        </div>
      </div>
    </article>
  );
}
