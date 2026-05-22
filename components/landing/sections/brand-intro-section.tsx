import { siteConfig } from "@/config/landing/site";
import { routes } from "@/config/landing/routes";
import { bookingCopy } from "@/config/landing/booking-copy";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { SplitHeading } from "@/components/ui/split-heading";
import { Sparkle } from "@/components/ui/sparkle";

/** Khối “safe space” hai cột — theo mockup About */
export function BrandIntroSection() {
  return (
    <section
      id="ve-viepsy"
      className="scroll-mt-16 border-t border-viepsy-hairline py-14 md:py-20"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <Eyebrow className="mb-3">Về Viepsy</Eyebrow>
            <SplitHeading
              lead="Không gian an toàn để"
              accent="là chính mình."
              className="mb-6"
            />
            <div className="space-y-4 text-body-sm leading-relaxed opacity-90">
              <p>{siteConfig.description}</p>
              <p>
                Viepsy đồng hành khi bạn đang lo âu, quá tải, thiếu tự tin, trải
                qua chuyển giao cuộc sống — hoặc chỉ cần một người lắng nghe chân
                thành.
              </p>
              <p className="text-headline text-viepsy-accent-sage">
                &ldquo;{siteConfig.motto}&rdquo;
              </p>
            </div>
            <div className="mt-8">
              <Button variant="primary" href={routes.services}>
                {bookingCopy.exploreServices}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="relative aspect-[4/5] max-h-[28rem] w-full">
              <div
                className="absolute inset-0 rounded-[2.5rem] bg-viepsy-block-navy"
                aria-hidden
              />
              <div className="absolute inset-x-6 bottom-0 top-8 flex items-end justify-center overflow-hidden rounded-[2rem] bg-viepsy-block-lime/40">
                <img
                  src="/landing/images/hero/hero.png"
                  alt=""
                  className="h-[92%] w-auto object-contain object-bottom"
                />
              </div>
              <span className="absolute right-6 top-10 rounded-full bg-viepsy-block-cream px-3 py-1.5 text-xs font-medium text-viepsy-ink shadow-md">
                Tích cực
              </span>
              <Sparkle className="absolute left-8 top-16" size={18} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
