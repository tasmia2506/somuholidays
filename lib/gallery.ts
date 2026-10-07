import { FLEET } from "@/lib/fleet";
import { unsplash } from "@/lib/site";

export type GalleryCategory = "Fleet";

export interface GalleryItem {
  src: string;
  caption: string;
  category: GalleryCategory;
  tall?: boolean;
}

const GALLERY_FILES = [
  "/gallery.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
  "/gallery6.jpeg",
  "/gallery7.jpeg",
  "/gallery8.jpeg",
  "/gallery9.jpeg",
  "/gallery10.jpeg",
  "/gallery11.jpeg",
  "/gallery12.jpeg",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  ...FLEET.map((v, i): GalleryItem => ({
    src: v.img.startsWith("/") ? v.img : unsplash(v.img, 900),
    caption: v.name,
    category: "Fleet",
    tall: i % 5 === 0,
  })),
  ...GALLERY_FILES.map((src, i): GalleryItem => ({
    src,
    caption: "Somu Holidays",
    category: "Fleet",
    tall: i % 5 === 2,
  })),
];
