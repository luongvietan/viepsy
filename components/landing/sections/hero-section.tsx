import { bookingCopy } from "@/config/landing/booking-copy";
import { routes } from "@/config/landing/routes";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/ui/container";
import { SplitHeading } from "@/components/ui/split-heading";
import { FolderShape, FolderTabSlot } from "@/components/ui/folder-shape";
import { siteConfig } from "@/config/landing/site";
import { FOLDER_TAB_PRESETS } from "@/lib/folder-path";

export function HeroSection() {
  return (
    <section
      data-animate-section="hero"
      className="pt-16 pb-14 md:pt-24 md:pb-20"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16 lg:gap-20">
          {/* Left — content */}
          <div className="max-w-xl" data-animate="hero-content">
            <Eyebrow className="mb-4 text-viepsy-accent-sage">
              Chăm sóc sức khỏe tinh thần · Online & trực tiếp
            </Eyebrow>
            <SplitHeading
              lead="Khi lo âu hoặc quá tải,"
              accent="bạn không cần đối mặt một mình."
              className="mb-5"
            />
            <p className="text-body-lg mb-3">
              Viepsy hỗ trợ chăm sóc sức khỏe tinh thần thông qua{" "}
              <strong className="font-semibold">Lắng nghe tích cực</strong>,{" "}
              <strong className="font-semibold">Định hướng cá nhân hóa</strong>{" "}
              và{" "}
              <strong className="font-semibold">Tham vấn chuyên sâu</strong>.
            </p>
            <p className="text-sm italic text-viepsy-accent-sage mb-8">
              {siteConfig.motto}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-4">
              <Button
                variant="primary"
                href={routes.book}
                className="bg-viepsy-accent-sage text-white hover:bg-viepsy-accent-sage/90 px-8 py-3.5"
              >
                {bookingCopy.primaryCta}
              </Button>
              <Button variant="secondary" href={routes.services}>
                {bookingCopy.exploreServices}
              </Button>
            </div>
            <p className="text-sm text-viepsy-ink/60">
              Ẩn danh theo yêu cầu · Phản hồi trong ngày làm việc
            </p>
          </div>

          {/* Right — photo + decorative elements */}
          <div
            className="relative flex items-center justify-center md:justify-end"
            data-animate="hero-visual"
          >
            {/* Background card + hero photo overlay */}
            <FolderShape
              tab="left"
              fillClassName="fill-viepsy-accent-sage/15"
              className="h-60 w-90 md:h-[21rem] md:w-[27.5rem]"
              tabMinWidth={FOLDER_TAB_PRESETS.hero.width}
              tabMinHeight={FOLDER_TAB_PRESETS.hero.height}
              uniformTab
              padContent={false}
            >
              <FolderTabSlot
                side="left"
                className="items-center justify-start pl-2 md:pl-3 -translate-x-[5px]"
              >
                <span className="rounded-full bg-viepsy-block-lime px-3 py-1.5 text-xs font-medium text-viepsy-ink/80 shadow-sm md:text-sm">
                  Lắng nghe
                </span>
              </FolderTabSlot>
              <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
                <img
                  src="/landing/images/hero/hero.png"
                  alt="Cố vấn tâm lý Viepsy"
                  className="h-90 w-auto object-contain drop-shadow-xl md:h-[30rem]"
                />
              </div>
            </FolderShape>

            {/* Top-right: Cá nhân hóa */}
            <div
              className="pointer-events-none absolute right-4 -top-5 z-20 flex items-center gap-1.5 rounded-full bg-viepsy-block-cream px-3 py-1.5 text-xs font-medium text-viepsy-ink/80 shadow-sm md:right-6 md:-top-7 md:text-sm"
              data-animate="hero-badge"
            >
              <span className="text-amber-500">✨</span> Cá nhân hóa
            </div>

            {/* Bottom-left: 500+ Thân chủ */}
            <div
              className="pointer-events-none absolute left-2 bottom-3 z-20 rounded-xl bg-white px-4 py-3 shadow-lg md:left-4 md:bottom-5"
              data-animate="hero-badge"
            >
              <p className="text-xl font-semibold text-viepsy-accent-sage md:text-2xl">500+</p>
              <p className="text-[10px] text-viepsy-ink/50 md:text-xs">Thân chủ</p>
            </div>

            {/* Bottom-right: 100% Bảo mật */}
            <div
              className="pointer-events-none absolute -right-5 bottom-12 z-20 rounded-xl bg-white px-4 py-3 shadow-lg md:-right-8 md:bottom-16"
              data-animate="hero-badge"
            >
              <p className="text-xl font-semibold text-viepsy-accent-sage md:text-2xl">100%</p>
              <p className="text-[10px] text-viepsy-ink/50 md:text-xs">Bảo mật</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
