"use client";

import { useState } from "react";
import { faqItems } from "@/data/landing/faq";
import { bookingCopy } from "@/config/landing/booking-copy";
import { contactLinks } from "@/config/landing/contact-links";
import { routes } from "@/config/landing/routes";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { SplitHeading } from "@/components/ui/split-heading";
import { cn } from "@/lib/utils/cn";

export function FaqCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section
        id="faq"
        data-animate-section="faq"
        className="scroll-mt-16 border-t border-viepsy-hairline py-16 md:py-24"
      >
        <Container className="max-w-3xl">
          <div data-animate="section-header">
            <Eyebrow className="mb-4">Câu hỏi thường gặp</Eyebrow>
            <SplitHeading lead="Bạn đang" accent="băn khoăn?" className="mb-4" />
            <p className="text-body-lg mb-10 opacity-90">
              Mỗi người một hoàn cảnh — nếu chưa tìm thấy câu trả lời ở đây,
              cứ nhắn Viepsy, bạn nhé.
            </p>
          </div>

          <div className="space-y-3" data-animate="faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} data-animate="faq-item">
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border bg-viepsy-canvas transition-[border-color,box-shadow] duration-200",
                      isOpen
                        ? "border-viepsy-accent-sage/40 shadow-sm"
                        : "border-viepsy-hairline hover:border-viepsy-accent-sage/20",
                    )}
                  >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-viepsy-surface-soft/50"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-body-lg font-[480] text-viepsy-ink">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-lg font-bold transition-all duration-200",
                        isOpen
                          ? "rotate-45 border-viepsy-accent-sage bg-viepsy-accent-sage text-viepsy-inverse-ink"
                          : "border-viepsy-hairline text-viepsy-accent-sage",
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      isOpen
                        ? "max-h-96 border-t border-viepsy-hairline/60 px-6 pb-5 pt-4 opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="text-body-sm leading-relaxed text-viepsy-ink/80">
                      {item.answer}
                    </p>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="dat-lich"
        data-animate-section="cta"
        className="scroll-mt-16 px-4 pb-16 md:px-6 md:pb-24 lg:px-8"
      >
        <div
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-viepsy-block-navy px-8 py-12 text-viepsy-inverse-ink md:rounded-[2.5rem] md:px-14 md:py-16"
          data-animate="cta-panel"
        >
          <div className="mx-auto max-w-2xl text-center" data-animate="cta-content">
            <Eyebrow className="mb-4 text-viepsy-block-lime">Khi bạn sẵn sàng</Eyebrow>
            <h2 className="text-display-lg mb-6">
              Còn điều gì{" "}
              <span className="text-viepsy-block-lime">chưa rõ?</span>
            </h2>
            <p className="text-body-lg mb-4 opacity-92">
              Viepsy ở đây khi bạn cần được lắng nghe — dù đặt lịch hay chỉ muốn
              trò chuyện nhẹ.
            </p>
            <p className="text-body-sm mb-8 opacity-80">{bookingCopy.hint}</p>
            <div className="flex flex-col items-center justify-center gap-4">
              <Button
                variant="secondary"
                href={routes.booking}
                className="border-transparent bg-viepsy-accent-sage px-10 py-3.5 text-base text-viepsy-inverse-ink hover:bg-viepsy-accent-sage/90"
              >
                {bookingCopy.primaryCta}
              </Button>
              <div className="flex items-center gap-4 text-body-sm opacity-80">
                <a
                  href={contactLinks.phone}
                  className="text-viepsy-inverse-ink underline underline-offset-4 hover:opacity-70"
                >
                  {bookingCopy.secondaryPhone}
                </a>
                <span aria-hidden className="opacity-40">·</span>
                <a
                  href={contactLinks.emailBook}
                  className="text-viepsy-inverse-ink underline underline-offset-4 hover:opacity-70"
                >
                  {bookingCopy.secondaryEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
