"use client";

import { type FormEvent } from "react";
import Icon from "@/components/Icon";
import { waLink } from "@/lib/site";
import { DESTINATIONS } from "@/lib/destinations";
import styles from "./DestinationSearchBar.module.css";

export default function DestinationSearchBar() {
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = [
      "Hi Somu Holidays, I'd like to plan a trip.",
      `Destination: ${data.get("where")}`,
      `Trip type: ${data.get("type")}`,
      data.get("when") ? `Date: ${data.get("when")}` : null,
      `Guests: ${data.get("guests")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  }

  return (
    <div className={styles.wrap}>
      <div className="container">
        <form className={styles.card} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="d-where">Where to?</label>
            <select id="d-where" name="where" defaultValue="">
              <option value="" disabled>
                Where are you going?
              </option>
              {DESTINATIONS.map((d) => (
                <option key={d.slug} value={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="d-type">Trip Type</label>
            <select id="d-type" name="type" defaultValue="Day Trip">
              <option>Day Trip</option>
              <option>Multi-Day Package</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="d-when">When</label>
            <input id="d-when" name="when" type="date" min={today} />
          </div>
          <div className={styles.field}>
            <label htmlFor="d-guests">Guests</label>
            <input id="d-guests" name="guests" type="number" min={1} defaultValue={2} />
          </div>
          <button className={styles.submit} type="submit" aria-label="Search trips">
            <Icon name="arrow" size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
