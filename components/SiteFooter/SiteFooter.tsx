import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SITE, waLink } from "@/lib/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.about}>
            <Link href="/" className={styles.brand}>
              <Image src="/logo.jpeg" alt="" width={44} height={44} className={styles.brandMark} />
              <span className={styles.brandText}>
                <strong>SOMU HOLIDAYS</strong>
                <span>Tours &amp; Travels</span>
              </span>
            </Link>
            <p>
              Chauffeur-driven Innova, Innova Crysta, Swift and Etios cabs, plus 21 &amp; 25-seater bus rentals for
              domestic tours, corporate &amp; MICE travel, theme-based trips and airport transport across Bengaluru.
            </p>
            <div className={styles.ctaRow}>
              <a href={`tel:${SITE.phonePrimaryTel}`} className={styles.ctaBtn}>
                <Icon name="phone" size={16} />
                Call Us
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                <Icon name="whatsapp" size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/fleet">Our Fleet</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/destinations">Destinations</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Core Services</h4>
            <ul className={styles.links}>
              <li><Link href="/contact#book">Cab &amp; Airport Transport</Link></li>
              <li><Link href="/destinations">Domestic Tours</Link></li>
              <li><Link href="/services">Customised Itineraries</Link></li>
              <li><Link href="/services">Corporate &amp; MICE Travel</Link></li>
              <li><Link href="/services">Theme-Based Tours</Link></li>
              <li><Link href="/taxi-service-bangalore">Bangalore Taxi Service</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact Desk</h4>
            <ul className={styles.contactList}>
              <li>
                <Icon name="pin" size={18} />
                <span>{SITE.address}</span>
              </li>
              <li>
                <Icon name="phone" size={18} />
                <span>
                  <a href={`tel:${SITE.phonePrimaryTel}`}>{SITE.phonePrimary}</a>
                </span>
              </li>
              <li>
                <Icon name="clock" size={18} />
                <span>24 Hours · 7 Days a Week</span>
              </li>
            </ul>
            <div className={styles.socialRow}>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Somu Holidays on Instagram">
                <Icon name="instagram" size={16} />
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Somu Holidays on Facebook">
                <Icon name="facebook" size={16} />
              </a>
              <a href={SITE.social.googleMaps} target="_blank" rel="noopener noreferrer" aria-label="Somu Holidays on Google Maps">
                <Icon name="pin" size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomRow}>
            <div className={styles.bottomLeft}>
              <span>© {year} Somu Holidays Tours &amp; Travels. All rights reserved.</span>
              <span className={styles.dot}>·</span>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
            <div className={styles.bottomRight}>
              <span>Rajajinagar, Bengaluru · Available 24 × 7</span>
              <a href="#top" className={styles.toTop} aria-label="Back to top">
                <Icon name="arrow" size={16} className={styles.toTopIcon} />
              </a>
            </div>
          </div>
          <div className={styles.bottomCenter}>
            Designed &amp; Developed by{" "}
            <a href="https://naazailabs.com" target="_blank" rel="noopener noreferrer">
              <strong>Naazailabs</strong>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
