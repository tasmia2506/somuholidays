import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm/ContactForm";
import CtaSection from "@/components/CtaSection/CtaSection";
import { SITE } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, WhatsApp or visit Somu Holidays Tours and Travels in Rajajinagar, Bengaluru — available 24×7 for bookings, enquiries and on-trip support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <div className={styles.photoWrap} style={{ backgroundImage: "url('/kurakoram.jpeg')" }}>
          <section className={styles.heroInner}>
            <div className="container">
              <div className="crumb">
                <Link href="/">Home</Link>
                <Icon name="chevron" size={14} />
                <span>Contact</span>
              </div>
              <span className="eyebrow">Contact Us</span>
              <h1 className="display">Get In Touch With Us</h1>
              <p>
                Call, WhatsApp or write to us — we&apos;ll help you plan the right vehicle, route and price for your
                trip.
              </p>
            </div>
          </section>

          <ContactForm />

          <section className="section" style={{ paddingTop: 0 }}>
            <div className="container">
              <div className={styles.infoGrid}>
                <Reveal className={styles.infoCard}>
                  <span className={styles.infoIcon}>
                    <Icon name="pin" size={18} />
                  </span>
                  <h3>Office Address</h3>
                  <p>Prefer to visit? Our team is ready to assist you in Rajajinagar, Bengaluru.</p>
                  <a href={SITE.social.googleMaps} target="_blank" rel="noopener noreferrer">
                    {SITE.address}
                  </a>
                </Reveal>

                <Reveal className={styles.infoCard} delay={0.07}>
                  <span className={styles.infoIcon}>
                    <Icon name="mail" size={18} />
                  </span>
                  <h3>Message Us</h3>
                  <p>Send us your travel queries and we&apos;ll reply as soon as possible.</p>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </Reveal>

                <Reveal className={styles.infoCard} delay={0.14}>
                  <span className={styles.infoIcon}>
                    <Icon name="phone" size={18} />
                  </span>
                  <h3>Call Us Now</h3>
                  <p>Need assistance? Call us and we&apos;ll make your travel planning hassle-free.</p>
                  <a href={`tel:${SITE.phonePrimaryTel}`}>{SITE.phonePrimary}</a>
                </Reveal>
              </div>

              <div className={styles.socialRow}>
                <a className="btn btnOutline" href={SITE.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon name="instagram" size={18} />
                  Instagram
                </a>
                <a className="btn btnOutline" href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon name="facebook" size={18} />
                  Facebook
                </a>
                <a className="btn btnOutline" href={SITE.social.googleReview} target="_blank" rel="noopener noreferrer">
                  <Icon name="star" size={18} />
                  Google Reviews
                </a>
                <a className="btn btnOutline" href={SITE.social.justdial} target="_blank" rel="noopener noreferrer">
                  JustDial
                </a>
                <a className="btn btnOutline" href={SITE.social.threads} target="_blank" rel="noopener noreferrer">
                  Threads
                </a>
              </div>
            </div>
          </section>
        </div>

        <CtaSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
