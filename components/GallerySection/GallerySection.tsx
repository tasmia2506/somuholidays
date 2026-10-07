import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GALLERY_ITEMS } from "@/lib/gallery";
import styles from "./GallerySection.module.css";

export default function GallerySection() {
  const items = GALLERY_ITEMS;

  return (
    <>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <Reveal key={`${item.src}-${i}`} delay={(i % 4) * 0.05} className={item.tall ? styles.tall : undefined} style={{ height: "100%" }}>
            <figure className={styles.tile}>
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
              <figcaption>
                <span className={styles.cat}>{item.category}</span>
                <span>{item.caption}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </>
  );
}
