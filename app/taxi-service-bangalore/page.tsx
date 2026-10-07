import type { Metadata } from "next";
import LocationSeoPage from "@/components/LocationSeoPage/LocationSeoPage";
import { getLocationBySlug } from "@/lib/seo-locations";

const location = getLocationBySlug("taxi-service-bangalore")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: { canonical: "/taxi-service-bangalore" },
};

export default function TaxiServiceBangalorePage() {
  return <LocationSeoPage location={location} />;
}
