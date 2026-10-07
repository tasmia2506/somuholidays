import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import AboutHero from "@/components/AboutHero/AboutHero";
import AboutStory from "@/components/AboutStory/AboutStory";
import AboutFleetBand from "@/components/AboutFleetBand/AboutFleetBand";
import CtaSection from "@/components/CtaSection/CtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Somu Holidays Tours and Travels is a Rajajinagar, Bengaluru-based tour operator specialising in Innova Crysta, bus and cab rentals, domestic tours, corporate & MICE travel and theme-based trips.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutFleetBand />
        <CtaSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
