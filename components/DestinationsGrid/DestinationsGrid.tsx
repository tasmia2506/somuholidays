import PackageCard from "@/components/PackageCard/PackageCard";
import { DESTINATIONS } from "@/lib/destinations";
import styles from "./DestinationsGrid.module.css";

export default function DestinationsGrid() {
  return (
    <div className={styles.grid}>
      {DESTINATIONS.map((d) => (
        <PackageCard key={d.slug} destination={d} />
      ))}
    </div>
  );
}
