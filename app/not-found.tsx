import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <section className="section" style={{ paddingTop: 170, textAlign: "center" }}>
          <div className="container">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Page not found
            </span>
            <h1 className="display h2">We couldn&apos;t find that page</h1>
            <p className="lead" style={{ marginInline: "auto" }}>
              It may have been renamed or removed. Have a look at everything we currently run, or head back home.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 28 }}>
              <Link href="/destinations" className="btn btnPrimary">
                Browse All Destinations
              </Link>
              <Link href="/" className="btn btnOutline">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
