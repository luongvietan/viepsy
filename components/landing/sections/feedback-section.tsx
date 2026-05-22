"use client";

import { testimonials } from "@/data/landing/testimonials";
import { routes } from "@/config/landing/routes";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitHeading } from "@/components/ui/split-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

const stats = [
  { value: "500+", label: "Phiên đồng hành" },
  { value: "100%", label: "Bảo mật" },
  { value: "Online", label: "& trực tiếp" },
];

const CARD_BG = [
  "bg-viepsy-block-mint",
  "bg-viepsy-block-navy text-viepsy-inverse-ink",
  "bg-viepsy-block-cream",
] as const;

const AVATAR_BG = [
  "bg-viepsy-accent-sage",
  "bg-viepsy-block-lime",
  "bg-viepsy-accent-warm",
] as const;

export function FeedbackSection() {
  return (
    <Section
      id="phan-hoi"
      data-animate-section="feedback"
      className="scroll-mt-16 border-t border-viepsy-hairline bg-viepsy-surface-soft"
    >
      <div className="mb-12 text-center" data-animate="section-header">
        <Eyebrow className="mb-3">Phản hồi từ thân chủ</Eyebrow>
        <SplitHeading lead="Câu chuyện" accent="có thật" />
      </div>

      <div
        className="mb-12 grid grid-cols-3 gap-4 rounded-2xl bg-viepsy-canvas p-6 shadow-sm md:gap-8 md:p-8"
        data-animate="feedback-stats"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold text-viepsy-accent-sage md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-viepsy-ink/70 md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => {
          const isFeatured = i === 1;
          return (
            <blockquote
              key={i}
              data-animate="feedback-card"
              className={cn(
                "relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 shadow-md",
                CARD_BG[i],
              )}
            >
              {/* Large decorative quote mark */}
              <div
                className={cn(
                  "absolute -right-2 -top-4 text-[8rem] font-bold leading-none opacity-10",
                  isFeatured ? "text-viepsy-block-lime" : "text-viepsy-accent-sage",
                )}
                aria-hidden
              >
                "
              </div>

              <div className="relative z-10 mb-4 flex items-center gap-4">
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-2xl font-bold text-white shadow-sm",
                    AVATAR_BG[i],
                  )}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p
                    className={cn(
                      "text-xs",
                      isFeatured ? "text-viepsy-block-lime" : "text-viepsy-ink/60",
                    )}
                  >
                    {t.profile}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mb-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className={cn(
                      "h-4 w-4",
                      isFeatured ? "text-viepsy-block-lime" : "text-viepsy-accent-sage",
                    )}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="relative z-10 mb-6 flex-1 text-xl leading-relaxed md:text-2xl">
                &ldquo;{t.content}&rdquo;
              </p>

              <footer
                className={cn(
                  "relative z-10 border-t pt-4 text-sm",
                  isFeatured
                    ? "border-viepsy-inverse-ink/20"
                    : "border-viepsy-hairline",
                )}
              >
                <p
                  className={cn(
                    "text-xs",
                    isFeatured ? "text-viepsy-block-lime" : "text-viepsy-accent-sage",
                  )}
                >
                  {t.tag}
                </p>
              </footer>
            </blockquote>
          );
        })}
      </div>

      <div className="mt-12 text-center" data-animate="feedback-cta">
        <p className="mb-4 text-body-sm opacity-80">
          Sẵn sàng khi bạn muốn
        </p>
        <Button
          variant="primary"
          href={routes.book}
          className="bg-viepsy-accent-sage px-8 hover:bg-viepsy-accent-sage/90"
        >
          Đặt lịch
        </Button>
      </div>
    </Section>
  );
}
