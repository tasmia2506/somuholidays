"use client";

import { type FormEvent } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { SITE, waLink } from "@/lib/site";
import styles from "./ContactForm.module.css";

const REASONS = [
  "Transparent per-km pricing",
  "Chauffeur-driven, AC fleet",
  "24/7 on-trip support",
  "Tailored itineraries",
  "Verified, safe drivers",
];

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = [
      "Hi Somu Holidays, I have a question.",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      data.get("subject") ? `Subject: ${data.get("subject")}` : null,
      `Message: ${data.get("message")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  }

  return (
    <section className="section" id="book">
      <div className="container">
        <div className={styles.wrap}>
          <Reveal className={styles.mapCol}>
            <iframe
              title="Somu Holidays location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal className={styles.formCard} delay={0.05}>
            <h3>Send Us A Message</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.row}>
                <input name="name" placeholder="Name" required />
                <input name="email" type="email" placeholder="Email" required />
              </div>
              <input name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Message" rows={5} required />
              <button className="btn btnPrimary" type="submit">
                Send Now <Icon name="arrow" size={16} />
              </button>
            </form>
          </Reveal>

          <Reveal className={styles.info} delay={0.1} style={{ height: "100%" }}>
            <span className="eyebrow">Contact Us</span>
            <h2 className="display h2">
              Get In Touch With <span className="accent">Somu Holidays</span>
            </h2>
            <p className="lead">
              Have a question or need help planning your next trip? Reach out and let&apos;s make your travel
              hassle-free.
            </p>
            <div className={styles.divider} />
            <h3 className={styles.sub}>Why Reach Out To Us?</h3>
            <ul className={styles.reasons}>
              {REASONS.map((r) => (
                <li key={r}>
                  <Icon name="check" size={14} />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
