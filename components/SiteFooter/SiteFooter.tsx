import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/site";
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
              Chauffeur-driven Innova, Innova Crysta, Swift and Etios cabs, plus 21 &amp; 25-seater bus rentals — for
              domestic tours, corporate &amp; MICE travel, theme-based trips and airport transport across Bengaluru.
            </p>
            <ul className={styles.contactList}>
              <li>
                <Icon name="phone" />
                <span>
                  <a href={`tel:${SITE.phonePrimaryTel}`}>{SITE.phonePrimary}</a> /{" "}
                  <a href={`tel:${SITE.phoneSecondaryTel}`}>{SITE.phoneSecondary}</a>
                </span>
              </li>
              <li>
                <Icon name="mail" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <Icon name="pin" />
                <span>{SITE.address}</span>
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
            <div className={styles.socialLinksText}>
              <a href={SITE.social.justdial} target="_blank" rel="noopener noreferrer">JustDial</a>
              <a href={SITE.social.googleReview} target="_blank" rel="noopener noreferrer">Google</a>
              <a href={SITE.social.threads} target="_blank" rel="noopener noreferrer">Threads</a>
            </div>
          </div>

          <div>
            <h4>Fleet</h4>
            <ul className={styles.links}>
              <li><Link href="/fleet">Swift &amp; Etios</Link></li>
              <li><Link href="/fleet">Innova</Link></li>
              <li><Link href="/fleet">Innova Crysta</Link></li>
              <li><Link href="/fleet">21 Seater Bus</Link></li>
              <li><Link href="/fleet">25 Seater Bus</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul className={styles.links}>
              <li><Link href="/services">Customised Itineraries</Link></li>
              <li><Link href="/destinations">Domestic Tours</Link></li>
              <li><Link href="/services">Corporate &amp; MICE Travel</Link></li>
              <li><Link href="/services">Theme-Based Tours</Link></li>
              <li><Link href="/contact#book">Cab &amp; Airport Transport</Link></li>
            </ul>
          </div>

          <div>
            <h4>Locations</h4>
            <ul className={styles.links}>
              <li><Link href="/taxi-service-bangalore">Bangalore Taxi Service</Link></li>
              <li><Link href="/contact#book">Rajajinagar</Link></li>
              <li><Link href="/contact#book">Whitefield</Link></li>
              <li><Link href="/contact#book">Koramangala</Link></li>
              <li><Link href="/contact#book">Indiranagar</Link></li>
              <li>
                <a href={SITE.social.googleMaps} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Popular Routes</h4>
            <ul className={styles.links}>
              <li><Link href="/bangalore-to-mysore-cab">Bangalore to Mysore Cab</Link></li>
              <li><Link href="/bangalore-to-coorg-cab">Bangalore to Coorg Cab</Link></li>
              <li><Link href="/bangalore-to-hassan-cab">Bangalore to Hassan Cab</Link></li>
              <li><Link href="/bangalore-to-chikkamagaluru-cab">Bangalore to Chikkamagaluru Cab</Link></li>
              <li><Link href="/bangalore-to-hampi-cab">Bangalore to Hampi Cab</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className={styles.links}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/destinations">Destinations</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Somu Holidays Tours and Travels. All rights reserved.</span>
          <nav className={styles.bottomNav}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </nav>
          <span>Rajajinagar, Bengaluru · Available 24 × 7</span>
          <span>
            Designed and developed by{" "}
            <a href="https://naazailabs.com" target="_blank" rel="noopener noreferrer">
              Naazailabs
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
