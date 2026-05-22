import { bookingCopy } from "@/config/landing/booking-copy";
import { routes } from "@/config/landing/routes";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/ui/container";
import { SplitHeading } from "@/components/ui/split-heading";
import { FolderShape, FolderTabSlot } from "@/components/ui/folder-shape";
import { siteConfig } from "@/config/landing/site";
import { FOLDER_TAB_PRESETS } from "@/lib/folder-path";

function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[17.5rem] overflow-visible pb-4 pt-2 sm:max-w-xs md:mx-0 md:max-w-none md:pb-0 md:pt-0"
      data-animate="hero-visual"
    >
      <FolderShape
        tab="left"
        fillClassName="fill-viepsy-accent-sage/15"
        className="aspect-[11/8] w-full overflow-visible md:aspect-auto md:h-[21rem] md:w-[27.5rem]"
        tabMinWidth={FOLDER_TAB_PRESETS.hero.width}
        tabMinHeight={FOLDER_TAB_PRESETS.hero.height}
        uniformTab
        padContent={false}
      >
        <FolderTabSlot
          side="left"
          className="items-center justify-start pl-2 md:pl-3 -translate-x-[5px]"
        >
          <span className="rounded-full bg-viepsy-block-lime px-2.5 py-1 text-[11px] font-medium text-viepsy-ink/80 shadow-sm sm:px-3 sm:py-1.5 sm:text-xs md:text-sm">
            Lắng nghe
          </span>
        </FolderTabSlot>
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
          <img
            src="/landing/images/hero/hero.png"
            alt="Cố vấn tâm lý Viepsy"
            className="h-[108%] w-auto max-w-[88%] object-contain object-bottom drop-shadow-xl md:h-[30rem] md:max-w-full"
          />
        </div>
      </FolderShape>

      <div
        className="pointer-events-none absolute right-0 top-1 z-20 flex items-center gap-1 rounded-full bg-viepsy-block-cream px-2.5 py-1 text-[11px] font-medium text-viepsy-ink/80 shadow-sm sm:top-0 sm:px-3 sm:py-1.5 sm:text-xs md:-top-7 md:text-sm"
        data-animate="hero-badge"
      >
        <span className="text-amber-500">✨</span> Cá nhân hóa
      </div>

      <div
        className="pointer-events-none absolute right-1 bottom-3 z-20 rounded-xl bg-white px-3 py-2 shadow-lg sm:right-2 sm:bottom-5 md:-right-8 md:bottom-16 md:px-4 md:py-3"
        data-animate="hero-badge"
      >
        <p className="text-base font-semibold text-viepsy-accent-sage sm:text-lg md:text-2xl">
          100%
        </p>
        <p className="text-[9px] text-viepsy-ink/50 sm:text-[10px] md:text-xs">
          Bảo mật
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      data-animate-section="hero"
      className="pt-10 pb-8 sm:pt-14 sm:pb-12 md:pt-24 md:pb-20"
    >
      <Container>
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:items-center md:gap-16 lg:gap-20">
          {/* Mobile: visual → headline → body. Desktop: cột trái gộp cả hai khối text */}
          <div
            className="contents md:col-start-1 md:row-start-1 md:block md:max-w-xl"
            data-animate="hero-content"
          >
            <div className="order-2 max-w-xl md:order-none">
              <Eyebrow className="mb-3 text-viepsy-accent-sage md:mb-4">
                Chăm sóc sức khỏe tinh thần · Online & trực tiếp
              </Eyebrow>
              <SplitHeading
                as="h1"
                size="hero"
                lead="Bạn đang có nhiều suy nghĩ khó chia sẻ,"
                accent="đây là nơi mà bạn thoải mái nói ra tâm trí của mình."
                className="mb-0"
              />
            </div>

            <div className="order-3 max-w-xl md:order-none">
              <p className="text-body-sm mb-2 mt-3 md:mb-3 md:mt-4 md:text-body-lg">
                Viepsy hỗ trợ chăm sóc sức khỏe tinh thần thông qua{" "}
                <strong className="font-semibold">Lắng nghe tích cực</strong>,{" "}
                <strong className="font-semibold">Định hướng cá nhân hóa</strong>{" "}
                và{" "}
                <strong className="font-semibold">Tham vấn chuyên sâu</strong>.
              </p>
              <p className="mb-5 text-sm italic text-viepsy-accent-sage md:mb-8">
                {siteConfig.motto}
              </p>

              <div className="mb-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3 md:mb-4">
                <Button
                  variant="primary"
                  href={routes.book}
                  className="w-full bg-viepsy-accent-sage px-8 py-3.5 text-viepsy-inverse-ink hover:bg-viepsy-accent-sage/90 sm:w-auto"
                >
                  {bookingCopy.primaryCta}
                </Button>
                <Button
                  variant="secondary"
                  href={routes.services}
                  className="w-full sm:w-auto"
                >
                  {bookingCopy.exploreServices}
                </Button>
              </div>

              <p className="text-xs text-viepsy-ink/60 sm:text-sm">
                Ẩn danh theo yêu cầu · Phản hồi trong ngày làm việc
              </p>
            </div>
          </div>

          <div className="order-1 mt-4 pt-16 sm:mt-6 sm:pt-20 md:col-start-2 md:row-start-1 md:order-none md:mt-0 md:pt-0 md:flex md:justify-end">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
