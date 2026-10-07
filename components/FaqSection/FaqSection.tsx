"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/site";
import styles from "./FaqSection.module.css";

export interface FaqItem {
  q: string;
  a: string;
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    q: "How is pricing calculated?",
    a: "Every trip is billed per kilometre with a minimum of 300 km per day: Swift and Etios from ₹13/km, Innova from ₹18/km, Innova Crysta from ₹20/km, and our 21/25-seater buses from ₹37–38/km. A driver bata (allowance) of ₹400–₹800/day applies by vehicle, and toll, parking and any state permit are charged at actuals — all shown before you confirm.",
  },
  {
    q: "Do your vehicles come with a driver?",
    a: "Yes. Every vehicle is chauffeur-driven. We don't offer self-drive rentals.",
  },
  {
    q: "What types of vehicles do you have?",
    a: "Swift and Etios sedans (4 seats), Innova and Innova Crysta (7 seats), and 21 & 25-seater AC buses with pushback seating — a fit for a solo airport run or a large group tour.",
  },
  {
    q: "How do I book a ride or a holiday package?",
    a: "Use the booking bar at the top of this page or message us on WhatsApp with your pickup, destination, date and group size. We confirm the vehicle, price and pickup time directly with you.",
  },
  {
    q: "Do you handle corporate, MICE and theme-based tours?",
    a: "Yes — corporate & MICE travel, domestic tours and theme-based trips including wildlife safaris are all part of what we arrange, alongside everyday cab and airport transport.",
  },
  {
    q: "Which areas do you pick up from?",
    a: "We're based in Rajajinagar and pick up across Bengaluru, including Kempegowda International Airport.",
  },
];

export default function FaqSection({
  items = DEFAULT_FAQS,
  title = "Common questions, answered",
  lead = "What travellers usually ask before booking. If yours isn't here, message us and we'll answer directly.",
  id = "faq",
}: {
  items?: FaqItem[];
  title?: string;
  lead?: string;
  id?: string;
} = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id={id}>
      <div className={`container ${styles.wrap}`}>
        <Reveal style={{ alignSelf: "start" }}>
          <h2 className="display h2 gradientHeading">{title}</h2>
          <p className="lead">{lead}</p>
          <p style={{ marginTop: 24 }}>
            <a className="btn btnForest" href={waLink()} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} />
              Ask on WhatsApp
            </a>
          </p>
        </Reveal>

        <div>
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={styles.item} key={item.q}>
                <button
                  className={styles.summary}
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  {item.q}
                  <span className={`${styles.plus} ${open ? styles.plusOpen : ""}`}>
                    <Icon name="plus" size={14} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className={styles.answer}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 0.8, 0.24, 1] }}
                    >
                      <p className={styles.answerInner}>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
