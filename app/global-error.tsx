"use client";

import { useEffect } from "react";

// Catches errors thrown by the root layout itself. It must render its own
// <html>/<body> (the real layout is what crashed), so it stays minimal and
// inline-styled rather than depending on globals.css or other components.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Root layout error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: 24,
          textAlign: "center",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#0b0b0b",
          color: "#f5f1ea",
        }}
      >
        <h1 style={{ fontSize: "1.75rem", margin: 0 }}>Somu Holidays</h1>
        <p style={{ maxWidth: 440, lineHeight: 1.6, color: "rgba(245,241,234,.8)" }}>
          Something went wrong loading this site. Please try again, or call us directly at{" "}
          <a href="tel:+919380958852" style={{ color: "#f5f1ea" }}>
            +91 93809 58852
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: "12px 24px",
            borderRadius: 999,
            border: "none",
            background: "#c0462c",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
