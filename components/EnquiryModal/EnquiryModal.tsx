"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Icon from "@/components/Icon";
import { waLink } from "@/lib/site";
import styles from "./EnquiryModal.module.css";

const PAX_OPTIONS = ["1–4", "5–7", "8–21", "22–25"];

export default function EnquiryModal({
  destinationName,
  triggerClassName,
  triggerLabel,
  ariaLabel,
}: {
  destinationName: string;
  triggerClassName?: string;
  triggerLabel: ReactNode;
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    // createPortal needs document.body, which only exists once mounted on the client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = [
      `Hi Somu Holidays, I'd like to book a cab for the ${destinationName} package.`,
      `Pickup: ${data.get("pickup")}`,
      `Date: ${data.get("date")}`,
      `Passengers: ${data.get("pax")}`,
      data.get("phone") ? `Phone: ${data.get("phone")}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className={triggerClassName}
        aria-label={ariaLabel}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      >
        {triggerLabel}
      </button>

      {open &&
        mounted &&
        createPortal(
          <div className={styles.backdrop} onClick={() => setOpen(false)}>
            <div
              className={styles.panel}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Cab booking enquiry for ${destinationName}`}
            >
              <button type="button" className={styles.close} aria-label="Close" onClick={() => setOpen(false)}>
                <Icon name="close" size={18} />
              </button>

              <span className={styles.kicker}>Cab Booking Enquiry</span>
              <h3>{destinationName}</h3>
              <p className={styles.sub}>Share your trip details — we&apos;ll send this straight to our WhatsApp.</p>

              <form onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label htmlFor="eq-pickup">Pickup Location</label>
                  <input id="eq-pickup" name="pickup" placeholder="e.g. Rajajinagar, Bengaluru" required />
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="eq-date">Travel Date</label>
                    <input id="eq-date" name="date" type="date" min={today} required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="eq-pax">Passengers</label>
                    <select id="eq-pax" name="pax" defaultValue={PAX_OPTIONS[0]}>
                      {PAX_OPTIONS.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="eq-phone">Phone Number (optional)</label>
                  <input id="eq-phone" name="phone" type="tel" placeholder="e.g. 98765 43210" />
                </div>
                <button className="btn btnPrimary" type="submit">
                  <Icon name="whatsapp" size={16} />
                  Send on WhatsApp
                </button>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
