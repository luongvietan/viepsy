import { processSteps } from "@/data/landing/process";
import { SectionDrumBackground } from "@/components/landing/section-drum-background";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitHeading } from "@/components/ui/split-heading";
import { cn } from "@/lib/utils/cn";

export function ProcessSection() {
  return (
    <section
      id="quy-trinh"
      data-animate-section="process"
      className="relative scroll-mt-16 overflow-hidden border-t border-viepsy-hairline bg-viepsy-surface-soft/50 py-12 sm:py-16 md:py-24"
    >
      <SectionDrumBackground />

      <Container className="relative z-10">
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

              return (
                <li
                  key={step.step}
                  data-animate="process-step"
                  className={cn(
                    "relative pl-10 sm:pl-12 md:grid md:grid-cols-2 md:items-center md:gap-8 md:pl-0",
                    isLast && "mb-0",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-2.5 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-viepsy-canvas bg-viepsy-accent-sage md:left-1/2",
                      isLast &&
                        "ring-2 ring-viepsy-accent-sage/30 ring-offset-2 ring-offset-viepsy-surface-soft/50",
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
                    <div
                      className={cn(
                        "w-full max-w-md rounded-[1.75rem] p-5 sm:p-6 md:p-7",
                        isFirst
                          ? "bg-viepsy-block-navy text-viepsy-inverse-ink"
                          : "bg-viepsy-block-mint text-viepsy-ink",
                      )}
                    >
                      <span className="text-eyebrow mb-3 block opacity-80">
                        Bước {step.step}
                      </span>
                      <h3 className="text-headline mb-2">{step.title}</h3>
                      <p className="text-body-sm leading-relaxed opacity-92">
                        {step.description}
                      </p>
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
