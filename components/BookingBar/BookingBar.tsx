"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import TrustMarquee from "@/components/TrustMarquee/TrustMarquee";
import { waLink } from "@/lib/site";
import styles from "./BookingBar.module.css";

const TRIP_TYPES = ["Outstation", "Local Rental", "Airport Transfer", "Holiday Package"];

export default function BookingBar() {
  const [trip, setTrip] = useState(TRIP_TYPES[0]);
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const to = data.get("to") as string;
    const msg = [
      "Hi Somu Holidays, I'd like to book a trip.",
      `Trip type: ${trip}`,
      `Pickup: ${data.get("from")}`,
      to ? `Destination: ${to}` : null,
      `Date: ${data.get("date")}`,
      `Passengers: ${data.get("pax")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  }

  return (
    <section className={styles.section} id="book" aria-label="Quick booking">
      <div className="container">
        <form className={styles.card} onSubmit={handleSubmit}>
          <div className={styles.tabs} role="radiogroup" aria-label="Trip type">
            {TRIP_TYPES.map((type) => {
              const id = `trip-${type.replace(/\s+/g, "-").toLowerCase()}`;
              return (
                <div key={type} style={{ display: "contents" }}>
                  <input
                    type="radio"
                    name="trip"
                    id={id}
                    value={type}
                    checked={trip === type}
                    onChange={() => setTrip(type)}
                  />
                  <label htmlFor={id}>{type}</label>
                </div>
              );
            })}
          </div>

          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="f-from">Pickup Location</label>
              <input id="f-from" name="from" placeholder="e.g. Rajajinagar" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="f-to">Drop / Destination</label>
              <input id="f-to" name="to" placeholder="e.g. Coorg" />
            </div>
            <div className={styles.field}>
              <label htmlFor="f-date">Pickup Date</label>
              <input id="f-date" name="date" type="date" min={today} required />
            </div>
            <div className={styles.field}>
              <label htmlFor="f-pax">Passengers</label>
              <select id="f-pax" name="pax" defaultValue="1–4">
                <option>1–4</option>
                <option>5–7</option>
                <option>8–21</option>
                <option>22–25</option>
              </select>
            </div>
            <button className="btn btnForest" type="submit">
              Search <Icon name="arrow" size={18} />
            </button>
          </div>
        </form>

        <TrustMarquee />
      </div>
    </section>
  );
}
