import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import ServicesTourHero from "@/components/ServicesTourHero/ServicesTourHero";
import ServicesTimeline from "@/components/ServicesTimeline/ServicesTimeline";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "What Somu Holidays Tours and Travels covers — tailor-made itineraries, domestic tours, corporate & MICE travel, theme-based tours, cab & airport transport, and 24/7 on-trip support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <ServicesTourHero />
        <ServicesTimeline />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
