import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import DestinationsHero from "@/components/DestinationsHero/DestinationsHero";
import DestinationsIntro from "@/components/DestinationsIntro/DestinationsIntro";
import DestinationsGrid from "@/components/DestinationsGrid/DestinationsGrid";
import AdventureBand from "@/components/AdventureBand/AdventureBand";

export const metadata: Metadata = {
  title: "Holiday Packages & Destinations",
  description:
    "Browse every Somu Holidays destination and holiday package — day trips from Bengaluru and multi-day tours across South India, Rajasthan and the Himalayas, each with a full itinerary and upfront price.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <DestinationsHero />
        <DestinationsIntro />

        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">Browse All</span>
                <h2 className="display h2">Every Destination We Run</h2>
              </div>
            </div>
            <DestinationsGrid />
          </div>
        </section>

        <AdventureBand />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
