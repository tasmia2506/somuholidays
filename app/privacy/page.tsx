import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Somu Holidays Tours and Travels collects, uses, stores and protects your personal data, in line with India's Digital Personal Data Protection Act, 2023 and the IT Act, 2000.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "6 October 2026";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <section className="pageBanner">
          <div className="container">
            <div className="crumb">
              <Link href="/">Home</Link>
              <Icon name="chevron" size={14} />
              <span>Privacy Policy</span>
            </div>
            <h1 className="display">Privacy Policy</h1>
            <p>
              How we collect, use, store and protect your personal data when you enquire about or book a trip
              with us.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.wrap}>
              <p className={styles.updated}>
                Last updated: {LAST_UPDATED}. This policy is written to comply with India&apos;s Digital Personal
                Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000 together with the IT
                (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules,
                2011 (SPDI Rules).
              </p>

              <div className={styles.block}>
                <h2><span className={styles.num}>01</span> Who we are</h2>
                <p>
                  This website is owned and operated by <strong>{SITE.name}</strong> (&quot;Somu Holidays&quot;,
                  &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), the Data Fiduciary for the personal data
                  described in this policy.
                </p>
                <p>Registered / business address: {SITE.address}.</p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>02</span> What we collect</h2>
                <p>We collect personal data you give us directly, including:</p>
                <ul>
                  <li>Enquiry form submissions — name, phone number, pickup/drop location, travel dates, passenger count</li>
                  <li>WhatsApp messages you send us to enquire, book or confirm a trip</li>
                  <li>Call details when you phone us for a booking or support</li>
                </ul>
                <p>
                  We only collect analytics / usage data (such as pages visited or device type) if you accept
                  cookies — see Section 5.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>03</span> How we use it</h2>
                <ul>
                  <li>To prepare quotes, confirm bookings and assign a driver and vehicle to your trip</li>
                  <li>To contact you about pickup timing, route changes or on-trip support</li>
                  <li>To keep financial and legal records required under Indian law</li>
                  <li>To understand how our website is used, only with cookie consent (Section 5)</li>
                </ul>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>04</span> Consent basis &amp; right to withdraw</h2>
                <p>
                  We process your personal data on the basis of the consent you give when you submit an enquiry
                  form, message us on WhatsApp or call us. You may withdraw consent at any time by contacting the
                  Grievance Officer in Section 10 — this does not affect the lawfulness of anything already done
                  with your consent, and may mean we can no longer action an active booking.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>05</span> Cookies</h2>
                <p>
                  Essential cookies required for the site to function (e.g. remembering your cookie choice) are
                  always on. Analytics cookies are only set after you click &quot;Accept&quot; on our cookie
                  banner, and you can change your choice at any time.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>06</span> Sharing</h2>
                <p>We share personal data only where needed to deliver your trip or run our business:</p>
                <ul>
                  <li>With the driver assigned to your booking, so they can reach you</li>
                  <li>With our website hosting and infrastructure providers</li>
                  <li>With WhatsApp / Meta, when you choose to message us there</li>
                  <li>With legal authorities, where required by law</li>
                </ul>
                <p>We do not sell your personal data to anyone.</p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>07</span> Retention</h2>
                <p>
                  Booking and financial records are kept for up to 8 years, in line with Indian tax and accounting
                  record-keeping requirements. Data from enquiries that do not turn into a booking is kept for a
                  shorter period and deleted once it is no longer needed.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>08</span> Security</h2>
                <p>
                  This site is served over HTTPS. Access to your personal data is limited to the people who need
                  it to run your booking, and we follow the &quot;reasonable security practices&quot; standard
                  under the SPDI Rules, 2011 for any sensitive personal data we hold.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>09</span> Your rights as a Data Principal</h2>
                <p>Under the DPDP Act, you have the right to:</p>
                <ul>
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request erasure of your data, where it is no longer needed</li>
                  <li>Withdraw consent at any time</li>
                  <li>Nominate another individual to exercise these rights on your behalf in the event of death or incapacity</li>
                  <li>Register a grievance, and escalate it to the Data Protection Board of India if unresolved</li>
                </ul>
                <p>To exercise any of these rights, contact our Grievance Officer below.</p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>10</span> Grievance Officer</h2>
                <p>For any privacy question, complaint or data request, contact:</p>
                <div className={styles.contactCard}>
                  <p><strong>{SITE.contactPerson}</strong> — {SITE.name}</p>
                  <p>{SITE.address}</p>
                  <p>Phone / WhatsApp: {SITE.phonePrimary}</p>
                  <p>Email: {SITE.email}</p>
                </div>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>11</span> Children</h2>
                <p>
                  Our services are intended for use by adults booking travel. We do not knowingly collect personal
                  data from children under 18 except where provided by a parent or guardian as part of a booking
                  (e.g. a child&apos;s name for passenger count).
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>12</span> Changes to this policy</h2>
                <p>
                  We may update this policy from time to time to reflect changes in our practices or the law. The
                  &quot;Last updated&quot; date at the top of this page will always show the latest revision.
                </p>
              </div>

              <div className={styles.block}>
                <h2><span className={styles.num}>13</span> Governing law</h2>
                <p>
                  This policy is governed by the laws of India. Any disputes are subject to the exclusive
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
