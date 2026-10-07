import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import FleetHero from "@/components/FleetHero/FleetHero";
import FleetSection from "@/components/FleetSection/FleetSection";
import CtaSection from "@/components/CtaSection/CtaSection";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Every vehicle Somu Holidays rents out — Swift and Etios sedans, Innova and Innova Crysta, and 21/25-seater AC buses, all chauffeur-driven with per-km rates.",
  alternates: { canonical: "/fleet" },
};

export default function FleetPage() {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <FleetHero />
        <FleetSection showAll />
        <CtaSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
