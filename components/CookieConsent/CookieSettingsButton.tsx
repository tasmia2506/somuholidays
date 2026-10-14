"use client";

export default function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("somu:open-cookie-consent"));
        }
      }}
    >
      Cookie Settings
    </button>
  );
}
