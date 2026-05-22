import { processSteps } from "@/data/landing/process";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitHeading } from "@/components/ui/split-heading";
import { FolderShape, FolderTabSlot } from "@/components/ui/folder-shape";
import { FOLDER_TAB_PRESETS } from "@/lib/folder-path";
import { cn } from "@/lib/utils/cn";

const TAB = FOLDER_TAB_PRESETS.process;

export function ProcessSection() {
  return (
    <section
      id="quy-trinh"
      data-animate-section="process"
      className="scroll-mt-16 border-t border-viepsy-hairline bg-viepsy-surface-soft/50 py-16 md:py-24"
    >
      <Container>
        <div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          data-animate="section-header"
        >
          <Eyebrow className="mb-4">Quy trình đồng hành</Eyebrow>
          <SplitHeading lead="Quy trình" accent="đồng hành" className="mb-4" />
          <p className="text-body-sm opacity-90">
            Timeline rõ ràng — bạn biết mình sẽ trải qua điều gì từ lúc liên hệ
            đến sau phiên.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute bottom-0 left-4 top-0 w-px bg-viepsy-accent-sage/20 md:left-1/2 md:-translate-x-px"
            aria-hidden
          />
          <div
            className="absolute bottom-0 left-4 top-0 w-px origin-top bg-viepsy-accent-sage md:left-1/2 md:-translate-x-px"
            data-animate="process-line"
            aria-hidden
          />

          <ol className="space-y-6 md:space-y-10">
            {processSteps.map((step, index) => {
              const isRight = index % 2 === 0;
              const isFirst = index === 0;
              const isLast = index === processSteps.length - 1;
              // Mobile: always left tab for consistent flow
              // Desktop: alternate left/right
              const mobileTabSide = "left" as const;
              const desktopTabSide = isRight ? ("right" as const) : ("left" as const);

              return (
                <li
                  key={step.step}
                  data-animate="process-step"
                  className={cn(
                    "relative pl-12 md:grid md:grid-cols-2 md:items-center md:gap-8 md:pl-0",
                    isLast && "mb-0",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-2.5 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-viepsy-canvas bg-viepsy-accent-sage md:left-1/2",
                      isLast && "ring-2 ring-viepsy-accent-sage/30 ring-offset-2 ring-offset-viepsy-surface-soft/50",
                    )}
                    aria-hidden
                  />

                  <div
                    className={cn(
                      "md:col-span-1",
                      isRight
                        ? "md:col-start-2 md:justify-self-start"
                        : "md:col-start-1 md:justify-self-end",
                    )}
                  >
                    {/* Mobile version: always left-aligned */}
                    <div className="md:hidden">
                      <FolderShape
                        tab={mobileTabSide}
                        uniformTab
                        tabMinWidth={TAB.width}
                        tabMinHeight={TAB.height}
                        fillClassName={
                          isFirst
                            ? "fill-viepsy-block-navy"
                            : "fill-viepsy-block-mint"
                        }
                        className={cn(
                          "w-full max-w-md",
                          isFirst
                            ? "text-viepsy-inverse-ink"
                            : "text-viepsy-ink",
                        )}
                      >
                        <FolderTabSlot side={mobileTabSide}>
                          <span className="rounded-full bg-viepsy-primary px-2.5 py-1 text-[10px] font-medium tracking-wide text-viepsy-inverse-ink">
                            {step.duration}
                          </span>
                        </FolderTabSlot>

                        <div className="p-6">
                          <span className="text-eyebrow mb-3 block opacity-80">
                            Bước {step.step}
                          </span>
                          <h3 className="text-headline mb-2">{step.title}</h3>
                          <p className="text-body-sm leading-relaxed opacity-92">
                            {step.description}
                          </p>
                        </div>
                      </FolderShape>
                    </div>

                    {/* Desktop version: alternating sides */}
                    <div className="hidden md:block">
                      <FolderShape
                        tab={desktopTabSide}
                        uniformTab
                        tabMinWidth={TAB.width}
                        tabMinHeight={TAB.height}
                        fillClassName={
                          isFirst
                            ? "fill-viepsy-block-navy"
                            : "fill-viepsy-block-mint"
                        }
                        className={cn(
                          "w-full max-w-md",
                          isFirst
                            ? "text-viepsy-inverse-ink"
                            : "text-viepsy-ink",
                        )}
                      >
                        <FolderTabSlot side={desktopTabSide}>
                          <span className="rounded-full bg-viepsy-primary px-2.5 py-1 text-[10px] font-medium tracking-wide text-viepsy-inverse-ink">
                            {step.duration}
                          </span>
                        </FolderTabSlot>

                        <div className="p-6 md:p-7">
                          <span className="text-eyebrow mb-3 block opacity-80">
                            Bước {step.step}
                          </span>
                          <h3 className="text-headline mb-2">{step.title}</h3>
                          <p className="text-body-sm leading-relaxed opacity-92">
                            {step.description}
                          </p>
                        </div>
                      </FolderShape>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
