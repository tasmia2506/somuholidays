import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import Icon from "@/components/Icon";
import GallerySection from "@/components/GallerySection/GallerySection";
import CtaSection from "@/components/CtaSection/CtaSection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at the Somu Holidays fleet and the destinations we cover — Innova, Innova Crysta, Swift, Etios and bus rentals, plus the tours and holiday packages across South India and beyond.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <section
          className="pageBanner"
          style={{ background: "linear-gradient(135deg, #000 0%, var(--forest-900) 45%, var(--terracotta-600) 100%)" }}
        >
          <div className="container">
            <div className="crumb">
              <Link href="/">Home</Link>
              <Icon name="chevron" size={14} />
              <span>Gallery</span>
            </div>
            <h1 className="display">Our fleet, our journeys</h1>
            <p>A look at the vehicles you&apos;ll travel in and the destinations we take you to.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <GallerySection />
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
