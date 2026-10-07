import Counter from "@/components/Counter/Counter";
import TrustMarquee from "@/components/TrustMarquee/TrustMarquee";
import styles from "./StatsSection.module.css";

export default function StatsSection() {
  return (
    <>
      <section className={styles.stats} aria-label="Somu Holidays in numbers">
        <div className={`container ${styles.grid}`}>
          <div className={styles.stat}>
            <strong>
              <Counter value={9} />
            </strong>
            <span className={styles.label}>Vehicles in Fleet</span>
          </div>
          <div className={styles.stat}>
            <strong>
              <Counter value={6} />
            </strong>
            <span className={styles.label}>Vehicle Categories</span>
          </div>
          <div className={styles.stat}>
            <strong>
              <Counter value={300} />
            </strong>
            <span className={styles.label}>Km Minimum / Day</span>
          </div>
          <div className={styles.stat}>
            <strong>24×7</strong>
            <span className={styles.label}>On-Trip Support</span>
          </div>
        </div>
      </section>
      <TrustMarquee />
    </>
  );
}
