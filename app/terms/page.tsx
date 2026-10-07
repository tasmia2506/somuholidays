import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/site";
import styles from "../privacy/page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that apply when you enquire about, book or travel with Somu Holidays Tours and Travels.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "6 October 2026";

export default function TermsPage() {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <section className="pageBanner">
          <div className="container">
            <div className="crumb">
              <Link href="/">Home</Link>
              <Icon name="chevron" size={14} />
              <span>Terms of Service</span>
            </div>
            <h1 className="display">Terms of Service</h1>
            <p>The terms and conditions that apply when you enquire, book or travel with us.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.wrap}>
              <p className={styles.updated}>Last updated: {LAST_UPDATED}.</p>

              <div className={styles.block}>
                <h2><span className={styles.num}>01</span> Who these terms apply to</h2>
                <p>
                  These terms apply to anyone who enquires about, books or travels using the cab, tempo traveller,
                  bus rental or tour services offered by <strong>{SITE.name}</strong> (&quot;Somu Holidays&quot;,
                  &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By sending an enquiry, confirming a booking or
                  boarding one of our vehicles, you accept these terms.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>02</span> Enquiries &amp; bookings</h2>
                <ul>
                  <li>Quotes shared over call, WhatsApp or the website are estimates based on the trip details you provide (route, dates, passenger count, vehicle type).</li>
                  <li>A booking is confirmed only once we verbally or in writing confirm the vehicle, driver and fare for your trip.</li>
                  <li>Fares may change if the actual route, distance, waiting time or duration differs from what was originally booked.</li>
                </ul>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>03</span> Payments</h2>
                <p>
                  Payment terms (advance, balance on trip completion, or full payment in advance) are agreed with
                  you at the time of booking. Tolls, parking, state permits and driver allowances/night halt charges
                  for outstation trips are charged separately unless explicitly included in your quote.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>04</span> Cancellations &amp; rescheduling</h2>
                <p>
                  Cancellations or date changes should be communicated to us as early as possible by phone or
                  WhatsApp. Trips cancelled with little or no notice before the scheduled pickup may be subject to
                  a cancellation charge to cover driver and vehicle allocation already made for your trip.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>05</span> During the trip</h2>
                <ul>
                  <li>Passengers are responsible for their own luggage and personal belongings.</li>
                  <li>Reasonable care of the vehicle is expected; charges apply for damage caused by passenger negligence or misuse.</li>
                  <li>Our drivers follow applicable traffic and safety rules; requests that compromise safety or legality may be declined.</li>
                  <li>Seating and luggage capacity are limited to what the booked vehicle can safely carry.</li>
                </ul>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>06</span> Liability</h2>
                <p>
                  We take reasonable care to provide safe, well-maintained vehicles and licensed drivers. We are not
                  liable for delays or changes caused by circumstances outside our control, including traffic,
                  weather, road closures, natural events or government restrictions.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>07</span> Changes to these terms</h2>
                <p>
                  We may update these terms from time to time. The &quot;Last updated&quot; date at the top of this
                  page will always reflect the latest version.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>08</span> Contact</h2>
                <p>For any question about these terms, contact:</p>
                <div className={styles.contactCard}>
                  <p><strong>{SITE.contactPerson}</strong> — {SITE.name}</p>
                  <p>{SITE.address}</p>
                  <p>Phone / WhatsApp: {SITE.phonePrimary}</p>
                  <p>Email: {SITE.email}</p>
                </div>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>09</span> Governing law</h2>
                <p>
                  These terms are governed by the laws of India. Any disputes are subject to the exclusive
                  jurisdiction of the courts in Bengaluru, Karnataka.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
