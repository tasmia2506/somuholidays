"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import styles from "./ReviewsSection.module.css";

const REVIEWS = [
  {
    author: "Reshma B.H",
    meta: "2 reviews · a month ago",
    text: "Professional drivers and clean cars, they mentioned that the cars are deep cleaned before every ride. Drivers are very friendly and I had a very comfortable ride with them.",
    likes: 1,
  },
  {
    author: "Pavann Kumarr",
    meta: "a month ago",
    text: "On time pickup and drop airport. I like it. Some holidays.",
    likes: 1,
  },
  {
    author: "Madhujeeva Madhujeeva",
    meta: "",
    text: "Good condition vehicle and friendly driver. I like Somu Holidays travels.",
  },
  {
    author: "Anushree R",
    meta: "",
    text: "Experience driver and trustworthy tours and travels...",
  },
  {
    author: "Bhoja Raju",
    meta: "",
    text: "Best rentals in Bangalore.",
  },
  {
    author: "Lohit Kumar",
    meta: "",
    text: "Great ride and kindly person, Madhu.",
  },
  {
    author: "Manoj Kumar",
    meta: "",
    text: "Excellent service and well-maintained vehicles. The driver was polite, professional, and made the journey very comfortable. Highly recommended for travel in Bangalore.",
  },
  {
    author: "Ramya S.B",
    meta: "",
    text: "Very good service and clean, comfortable vehicles. The driver was friendly and arrived on time. Had a smooth and pleasant travel experience.",
  },
  {
    author: "Md Ali",
    meta: "",
    text: "Great service and comfortable ride. The vehicle was clean and well maintained, and the driver was very professional. Would definitely recommend them.",
  },
  {
    author: "Chetan V",
    meta: "",
    text: "Excellent travel experience. The vehicle was in good condition and the driver was friendly and punctual. Very happy with the service.",
  },
];

export default function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className={`section onDark ${styles.section}`}
      style={{ backgroundImage: "url('/contact page background image.jpeg')" }}
    >
      <span className={styles.overlay} aria-hidden="true" />
      <div className="container" style={{ position: "relative" }}>
        <div className={styles.headRow}>
          <Reveal className={styles.wrap}>
            <h2 className="display h2 gradientHeadingRedWhite">See what our customers are saying</h2>
            <p className="lead" style={{ marginInline: "auto" }}>
              Read verified reviews from past travellers on Google and JustDial, or follow our trips on Instagram
              and Facebook.
            </p>
          </Reveal>
        </div>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {REVIEWS.map((r) => (
              <div className={styles.slide} key={r.author}>
                <a
                  className={styles.card}
                  href={SITE.social.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${r.author}'s review on Google`}
                >
                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" size={15} />
                    ))}
                  </div>
                  <p className={styles.quote}>&ldquo;{r.text}&rdquo;</p>
                  <div className={styles.cardFoot}>
                    <div className={styles.author}>
                      <span className={styles.authorName}>
                        {r.author}
                        <span className={styles.verified} title="Verified review">
                          <Icon name="check" size={11} />
                        </span>
                      </span>
                      <span className={styles.meta}>{r.meta ? `${r.meta} · ` : ""}Google</span>
                    </div>
                    {!!r.likes && (
                      <div className={styles.likes} aria-label={`${r.likes} like${r.likes === 1 ? "" : "s"}`}>
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                          <path d="M12 21s-6.7-4.35-9.33-8.2C.9 10.1 1.4 6.6 4.2 5.02a5.4 5.4 0 0 1 7.14 1.5.6.6 0 0 0 1.32 0 5.4 5.4 0 0 1 7.14-1.5c2.8 1.58 3.3 5.08 1.53 7.78C18.7 16.65 12 21 12 21z" />
                        </svg>
                        {r.likes}
                      </div>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollerNav}>
          <button className="iconBtn" aria-label="Previous reviews" onClick={scrollPrev}>
            <Icon name="left" size={18} />
          </button>
          <button className="iconBtn" aria-label="Next reviews" onClick={scrollNext}>
            <Icon name="right" size={18} />
          </button>
        </div>

        <Reveal className={styles.actions}>
          <a className="btn btnPrimary" href={SITE.social.googleReview} target="_blank" rel="noopener noreferrer">
            <Icon name="star" size={18} />
            Read Google Reviews
          </a>
          <a className="btn btnPrimary" href={SITE.social.justdial} target="_blank" rel="noopener noreferrer">
            View on JustDial
          </a>
        </Reveal>
      </div>
    </section>
  );
}
