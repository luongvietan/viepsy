"use client";

import { useState, useEffect } from "react";
import { routes } from "@/config/landing/routes";
import { bookingCopy } from "@/config/landing/booking-copy";
import { cn } from "@/lib/utils/cn";

export function StickyBookingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const finalCta = document.getElementById("dat-lich");

      if (finalCta) {
        const finalCtaTop = finalCta.getBoundingClientRect().top;
        setVisible(scrollY > 400 && finalCtaTop > viewportHeight);
      } else {
        setVisible(scrollY > 400);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile: full-width bottom bar */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-viepsy-hairline bg-viepsy-canvas/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm transition-transform duration-300 md:hidden",
          visible ? "translate-y-0" : "translate-y-full",
        )}
      >
        <a
          href={routes.booking}
          aria-label={bookingCopy.primaryCtaLong}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-viepsy-accent-sage py-3 text-base font-medium text-viepsy-inverse-ink transition-colors hover:bg-viepsy-accent-sage/90"
        >
          {bookingCopy.primaryCta}
        </a>
      </div>

      {/* Desktop: floating pill bottom-right */}
      <div
        className={cn(
          "fixed right-6 bottom-6 z-40 hidden transition-all duration-300 md:block",
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <a
          href={routes.booking}
          aria-label={bookingCopy.primaryCtaLong}
          className="flex items-center gap-2 rounded-full bg-viepsy-accent-sage px-6 py-3 text-sm font-medium text-viepsy-inverse-ink shadow-lg transition-all hover:scale-105 hover:bg-viepsy-accent-sage/90"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          {bookingCopy.primaryCta}
        </a>
      </div>
    </>
  );
}
