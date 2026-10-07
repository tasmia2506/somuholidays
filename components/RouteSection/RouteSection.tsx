import Reveal from "@/components/Reveal";
import TravelRoute from "@/components/TravelRoute/TravelRoute";
import styles from "./RouteSection.module.css";

export default function RouteSection() {
  return (
    <section className="section bgIvory50">
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">Our Coverage</span>
          <h2 className="display h2">
            From <span className={styles.accent}>Bengaluru</span> to wherever the road takes you.
          </h2>
          <p className="lead">Local &middot; Outstation &middot; Group Travel</p>
        </Reveal>
        <div className={styles.routeBox}>
          <TravelRoute variant="full" />
        </div>
      </div>
    </section>
  );
}
