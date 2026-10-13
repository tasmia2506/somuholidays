import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GALLERY_ITEMS } from "@/lib/gallery";
import styles from "./GallerySection.module.css";

export default function GallerySection() {
  const items = GALLERY_ITEMS;

  return (
    <>
      <div className={styles.grid}>
        {items.map((item, i) => {
          const title = `${item.caption} - Somu Holidays Bangalore Fleet & Tours`;
          const alt = `${item.caption} chauffeur-driven tour and rental vehicle in Bengaluru`;
          return (
            <Reveal key={`${item.src}-${i}`} delay={(i % 4) * 0.05} className={item.tall ? styles.tall : undefined} style={{ height: "100%" }}>
              <figure className={styles.tile}>
                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                  aria-label={`View full resolution: ${title}`}
                  style={{ display: "contents" }}
                >
                  <Image
                    src={item.src}
                    alt={alt}
                    title={title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                </a>
                <figcaption>
                  <span className={styles.cat}>{item.category}</span>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
