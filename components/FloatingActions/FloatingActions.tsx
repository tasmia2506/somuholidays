import Icon from "@/components/Icon";
import { SITE, waLink } from "@/lib/site";
import styles from "./FloatingActions.module.css";

export default function FloatingActions() {
  return (
    <div className={styles.wrap}>
      <a className={`${styles.fab} ${styles.wa}`} href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" size={26} />
      </a>
      <a className={`${styles.fab} ${styles.call}`} href={`tel:${SITE.phonePrimaryTel}`} aria-label="Call Somu Holidays">
        <Icon name="phone" size={26} />
      </a>
    </div>
  );
}
