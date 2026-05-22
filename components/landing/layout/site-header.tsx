"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/landing/navigation";
import { siteConfig } from "@/config/landing/site";
import { bookingCopy } from "@/config/landing/booking-copy";
import { contactLinks } from "@/config/landing/contact-links";
import { routes } from "@/config/landing/routes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-viepsy-hairline bg-viepsy-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        <Link
          href={routes.home}
          className="text-eyebrow font-[540] tracking-widest"
        >
          <span className="text-viepsy-accent-sage">VIE</span>
          <span className="text-viepsy-ink">PSY</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-body-sm font-[330] transition-opacity hover:opacity-70",
                  active && "font-[480] underline underline-offset-4",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="primary" href={contactLinks.zalo}>
            {bookingCopy.navCta}
          </Button>
        </div>

        <button
          type="button"
          aria-label="Mở menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-viepsy-surface-soft md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-viepsy-hairline px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn("text-body-lg", active && "font-[480]")}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Button variant="primary" href={contactLinks.zalo}>
                {bookingCopy.primaryCta}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
