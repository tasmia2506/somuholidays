import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import styles from "./FeatureBand.module.css";

const FEATURES: { icon: IconName; title: string; desc: string }[] = [
  { icon: "car", title: "Safe & Reliable", desc: "Your safety is our priority" },
  { icon: "bag", title: "Comfortable", desc: "Vehicles designed for relaxed journeys" },
  { icon: "clock", title: "On Time", desc: "Professional and punctual service" },
  { icon: "headset", title: "24/7 Support", desc: "Support throughout your trip" },
];

export default function FeatureBand() {
  return (
    <section className={`bgForest onDark ${styles.band}`}>
      <div className={`container ${styles.wrap}`}>
        <Reveal className={styles.left}>
          <span className="eyebrow">Why Somu Holidays</span>
          <h2 className="display h2">Travel Without the Stress.</h2>
          <div className={styles.grid}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.feature}>
                <span className={styles.icon}>
                  <Icon name={f.icon} size={22} />
                </span>
                <strong>{f.title}</strong>
                <span>{f.desc}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className={styles.right} delay={0.1}>
          <p>
            We take care of the roads, so you can focus on what matters — your journey, your people, your memories.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
