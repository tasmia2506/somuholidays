import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import Hero from "@/components/Hero/Hero";
import TrustMarquee from "@/components/TrustMarquee/TrustMarquee";
import FleetSection from "@/components/FleetSection/FleetSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import DestinationsPreview from "@/components/DestinationsPreview/DestinationsPreview";
import AboutSection from "@/components/AboutSection/AboutSection";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import CtaSection from "@/components/CtaSection/CtaSection";
import FaqSection from "@/components/FaqSection/FaqSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustMarquee />
        <FleetSection />
        <AboutSection />
        <ServicesSection limit={3} />
        <HowItWorks />
        <DestinationsPreview limit={6} />
        <ReviewsSection />
        <FaqSection />
        <CtaSection bgImage="/cta background image 2.jpeg" />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
