import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import type { Vehicle } from "@/lib/fleet";
import { unsplash } from "@/lib/site";
import styles from "./FleetCard.module.css";

export default function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  const src = vehicle.img.startsWith("/") ? vehicle.img : unsplash(vehicle.img, 700);
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image src={src} alt={vehicle.name} fill sizes="(min-width: 1024px) 25vw, 80vw" />
        <span className={styles.tag}>{vehicle.tag}</span>
        <span className={styles.priceChip}>
          ₹{vehicle.price}
          <small>/km</small>
        </span>
      </div>
      <div className={styles.body}>
        <h3>{vehicle.name}</h3>
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
          <Link className="btn btnForest" href="/contact#book">
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
