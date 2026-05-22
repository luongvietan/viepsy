"use client";

import { useEffect } from "react";
import { initSectionAnimations } from "@/lib/animations/section-animations";
import { useLenis } from "./smooth-scroll-provider";

export function SectionAnimations() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const cleanup = initSectionAnimations();

    return cleanup;
  }, [lenis]);

  return null;
}
