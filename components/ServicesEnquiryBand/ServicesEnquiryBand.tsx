"use client";

import { type FormEvent } from "react";
import Link from "next/link";
import { waLink } from "@/lib/site";
import styles from "./ServicesEnquiryBand.module.css";

export default function ServicesEnquiryBand() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = [
      "Hi Somu Holidays, I have a question about your services.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("comment") ? `Comment: ${data.get("comment")}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  }

  return (
    <section className={styles.band} style={{ backgroundImage: "url('/manali.jpeg')" }}>
      <div className="container">
        <form className={styles.card} onSubmit={handleSubmit}>
          <h3>
            Want to book,
            <br />
            but still have questions?
          </h3>
          <p>Leave a request and we&apos;ll get back to you on WhatsApp.</p>
          <div className={styles.fields}>
            <input name="name" placeholder="Your name" required />
            <input name="phone" type="tel" placeholder="Phone number" required />
            <input name="comment" placeholder="Comment" />
          </div>
          <div className={styles.termsWrap}>
            <label className={styles.termsLabel}>
              <input
                type="checkbox"
                name="terms"
                required
                defaultChecked
                className={styles.termsCheckbox}
              />
              <span>
                I accept the{" "}
                <Link href="/terms" target="_blank" className={styles.termsLink}>
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" target="_blank" className={styles.termsLink}>
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>
          <button className="btn btnPrimary" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
