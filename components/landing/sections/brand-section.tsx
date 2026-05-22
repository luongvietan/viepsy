import { bookingCopy } from "@/config/landing/booking-copy";
import { contactLinks } from "@/config/landing/contact-links";
import { routes } from "@/config/landing/routes";
import { miniHighlights } from "@/data/landing/values";
import { AudienceSection } from "@/components/landing/sections/audience-section";
import { BrandIntroSection } from "@/components/landing/sections/brand-intro-section";
import { CoreValuesSection } from "@/components/landing/sections/core-values-section";
import { siteConfig } from "@/config/landing/site";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

type BrandSectionProps = {
  /** Gắn trên trang chủ — dùng các section tách riêng trong page.tsx */
  embedded?: boolean;
};

/** Trang thương hiệu đầy đủ (legacy); trang chủ dùng BrandIntro + CoreValues + Audience riêng */
export function BrandSection({ embedded = false }: BrandSectionProps) {
  if (embedded) {
    return (
      <>
        <BrandIntroSection />
        <CoreValuesSection />
        <AudienceSection />
      </>
    );
  }

  return (
    <>
      <section className="pt-10 pb-12 md:pt-14 md:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-3">Thông tin thương hiệu</Eyebrow>
            <h1 className="text-display-lg mb-4">{siteConfig.name}</h1>
            <p className="text-body-lg mb-4">{siteConfig.tagline}</p>
            <p className="text-body-sm mb-8 opacity-90">
              {siteConfig.description}
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {miniHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-viepsy-hairline bg-viepsy-surface-soft px-3 py-1.5 text-body-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-headline text-viepsy-accent-sage">
              &ldquo;{siteConfig.motto}&rdquo;
            </p>
          </div>
        </Container>
      </section>

      <CoreValuesSection />
      <AudienceSection />

      <section className="py-16">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" href={routes.services}>
              {bookingCopy.exploreServices}
            </Button>
            <Button variant="secondary" href={contactLinks.zalo}>
              {bookingCopy.primaryCta}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
