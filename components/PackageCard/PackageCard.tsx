import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import EnquiryModal from "@/components/EnquiryModal/EnquiryModal";
import type { DestinationPackage } from "@/lib/destinations";
import { unsplash } from "@/lib/site";
import styles from "./PackageCard.module.css";

export default function PackageCard({ destination }: { destination: DestinationPackage }) {
  const metaParts = destination.meta.split("·").map((s) => s.trim());
  const hasDistance = /km/i.test(metaParts[0]);
  const distance = hasDistance ? metaParts[0] : undefined;
  const duration = hasDistance ? metaParts[1] : metaParts[0];

  return (
    <div className={styles.card}>
      <Image
        src={unsplash(destination.heroImg)}
        alt={destination.name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={styles.img}
      />
      <Link href={`/destinations/${destination.slug}`} className={styles.clickArea} aria-label={`View ${destination.name} details`}>
        <div className={styles.badges}>
          <span className={styles.tag}>{destination.category}</span>
          {distance && (
            <span className={styles.distance}>
              <Icon name="pin" size={12} />
              {distance} from Bengaluru
            </span>
          )}
        </div>
        <div className={styles.text}>
          <h3>{destination.name}</h3>
          <p className={styles.tagline}>{destination.tagline}</p>
        </div>
      </Link>
      <div className={styles.foot}>
        <span className={styles.time}>
          <Icon name="clock" size={14} />
          {duration}
        </span>
        <EnquiryModal
          destinationName={destination.name}
          triggerClassName={styles.enquire}
          ariaLabel={`Enquire about a cab to ${destination.name}`}
          triggerLabel={
            <>
              Enquire Cab <Icon name="arrow" size={14} />
            </>
          }
        />
      </div>
    </div>
  );
}
