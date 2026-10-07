import Reveal from "@/components/Reveal";
import styles from "./AboutStory.module.css";

export default function AboutStory() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <Reveal className={styles.heading}>
          <span className={styles.kicker}>Booking a cab shouldn&apos;t feel like guesswork</span>
          <h2 className={`display ${styles.title}`}>
            We want every trip to start with a price and a plan — not a guess
          </h2>
        </Reveal>

        <Reveal className={styles.body} delay={0.1}>
          <p className={styles.lede}>
            Somu Holidays started the way most small fleets do — a couple of vehicles, a phone that never stopped
            ringing, and trust built one trip at a time out of Rajajinagar, Bengaluru.
          </p>
          <p>
            Today that has grown into a chauffeur-driven fleet covering city cabs, outstation drives and multi-day
            holiday packages — still run the same way: a rate shared upfront, a driver you can call directly, and a
            route planned before you ever leave home.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
