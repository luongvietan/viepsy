import type { Metadata } from "next";
import { PageShell } from "@/components/landing/layout/page-shell";
import { MarqueeStrip } from "@/components/landing/layout/marquee-strip";
import { HeroSection } from "@/components/landing/sections/hero-section";
import { AudienceSection } from "@/components/landing/sections/audience-section";
import { ServicesSection } from "@/components/landing/sections/services-section";
import { ProcessSection } from "@/components/landing/sections/process-section";
import { VisualBreakSection } from "@/components/landing/sections/visual-break-section";
import { FeedbackSection } from "@/components/landing/sections/feedback-section";
import { FaqCtaSection } from "@/components/landing/sections/faq-cta-section";
import { HashScroll } from "@/components/landing/hash-scroll";
import { SmoothScrollProvider } from "@/components/landing/scroll/smooth-scroll-provider";
import { SectionAnimations } from "@/components/landing/scroll/section-animations";
import { siteConfig } from "@/config/landing/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Sức khỏe tinh thần`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <PageShell>
      <SmoothScrollProvider>
        <HashScroll />
        <SectionAnimations />
        <HeroSection />
        <MarqueeStrip />
        <AudienceSection />
        <ServicesSection />
        <ProcessSection />
        <VisualBreakSection />
        <FeedbackSection />
        <FaqCtaSection />
      </SmoothScrollProvider>
    </PageShell>
  );
}
