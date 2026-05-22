"use client";

import { useEffect } from "react";
import { useLenis } from "@/components/landing/scroll/smooth-scroll-provider";

export function HashScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (el) {
        lenis.scrollTo(el, { offset: -72, duration: 1.2 });
      }
    };

    const timer = window.setTimeout(scrollToHash, 150);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [lenis]);

  return null;
}
