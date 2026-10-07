"use client";

import { useEffect } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import FloatingActions from "@/components/FloatingActions/FloatingActions";
import { SITE } from "@/lib/site";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Logged for diagnostics only — never shown to the visitor, so no internal
    // error detail (message/stack) leaks into the rendered page.
    console.error("Route error boundary caught:", error);
  }, [error]);

  return (
    <>
      <SiteHeader alwaysSolid />
      <main>
        <section className="section" style={{ paddingTop: 170, textAlign: "center" }}>
          <div className="container">
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Something went wrong
            </span>
            <h1 className="display h2">This page hit a snag</h1>
            <p className="lead" style={{ marginInline: "auto" }}>
              We couldn&apos;t load this page right now. Try again, or call us directly and we&apos;ll help with
              your booking over the phone.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 28 }}>
              <button type="button" className="btn btnPrimary" onClick={() => reset()}>
                Try Again
              </button>
              <Link href="/" className="btn btnOutline">
                Back to Home
              </Link>
              <a className="btn btnOutline" href={`tel:${SITE.phonePrimaryTel}`}>
                Call {SITE.phonePrimary}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
