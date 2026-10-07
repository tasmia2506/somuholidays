import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";
import { GALLERY_ITEMS } from "@/lib/gallery";
import styles from "./GalleryPreview.module.css";

const PREVIEW = GALLERY_ITEMS.slice(0, 6);

export default function GalleryPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHead">
          <Reveal>
            <span className="eyebrow">Our Gallery</span>
            <h2 className="display h2">On the road with Somu</h2>
          </Reveal>
          <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="linkArrow">
            Follow us on Instagram <Icon name="arrowUpRight" size={16} />
          </a>
        </div>

        <div className={styles.grid}>
          {PREVIEW.map((item, i) => (
            <Reveal key={`${item.src}-${i}`} delay={(i % 3) * 0.06} style={{ height: "100%" }}>
              <div className={styles.tile}>
                <Image src={item.src} alt={item.caption} fill sizes="(min-width: 1024px) 16vw, 33vw" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className={styles.more}>
          <Link href="/gallery" className="btn btnForest">
            View Full Gallery <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
