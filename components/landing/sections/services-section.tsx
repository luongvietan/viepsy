import {
  services,
  type Service,
  type ServiceBlock,
} from "@/data/landing/services";
import { bookingCopy } from "@/config/landing/booking-copy";
import { contactLinks } from "@/config/landing/contact-links";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { SplitHeading } from "@/components/ui/split-heading";
import { cn } from "@/lib/utils/cn";

const orderLabel = ["01", "02", "03"];

const BLOCK_BG: Record<ServiceBlock, string> = {
  mint: "bg-viepsy-block-mint",
  cream: "bg-viepsy-block-cream",
  lilac: "bg-viepsy-block-lilac",
};

export function ServicesSection() {
  return (
    <section
      id="dich-vu"
      data-animate-section="services"
      className="scroll-mt-16 border-y border-viepsy-hairline py-16 md:py-24"
    >
      <Container>
        <div
          className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between"
          data-animate="section-header"
        >
          <div>
            <Eyebrow className="mb-2">Chọn gói dịch vụ</Eyebrow>
            <SplitHeading lead="Phí" accent="phiên đồng hành" />
            <p className="text-body-sm mt-3 max-w-md font-[320] md:hidden">
              {bookingCopy.servicesLead}
            </p>
          </div>
          <p className="max-w-sm text-body-sm font-[320] md:text-right">
            {bookingCopy.servicesLead}
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-body-sm opacity-75">
          Chưa biết chọn gói nào?{" "}
          <a
            href={contactLinks.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[480] text-viepsy-accent-sage underline underline-offset-4 hover:opacity-80"
          >
            Nhắn Viepsy để được gợi ý
          </a>
          .
        </p>
      </Container>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const isDark = Boolean(service.featured);

  return (
    <article
      data-animate="service-card"
      className={cn(
        "group relative flex h-full flex-col rounded-[1.75rem] p-6 transition-transform duration-200 hover:-translate-y-0.5 md:p-8",
        isDark
          ? "bg-viepsy-block-navy text-viepsy-inverse-ink ring-2 ring-viepsy-accent-sage"
          : BLOCK_BG[service.block],
        !isDark && "text-viepsy-ink",
      )}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-eyebrow">Gói {orderLabel[index]}</span>
          {service.featured && (
            <span className="inline-flex w-fit rounded-full bg-viepsy-accent-sage px-2.5 py-1 text-eyebrow text-[0.65rem] font-semibold text-viepsy-inverse-ink">
              Phổ biến nhất
            </span>
          )}
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[1.5rem] font-[540] leading-none tracking-tight tabular-nums">
            {service.price}
            <span className="text-body-sm ml-0.5 font-[330]">đ</span>
          </p>
          <p className="text-eyebrow mt-1.5 text-[0.65rem] tracking-[0.08em]">
            {service.duration}
          </p>
        </div>
      </div>

      <h3 className="text-headline mb-4 max-w-[16ch]">{service.title}</h3>

      <p className="text-body-sm mb-3 font-[340]">{service.description}</p>
      <p className="text-body-sm mb-6 font-[320]">{service.detail}</p>

      <ul className="mb-6 space-y-2.5">
        {service.suitableFor.map((item) => (
          <li key={item} className="flex gap-2.5 text-body-sm">
            <span
              className={cn(
                "mt-0.5 flex size-[1.125rem] shrink-0 items-center justify-center rounded-full text-[0.625rem] font-bold",
                isDark
                  ? "bg-viepsy-block-lime text-viepsy-ink"
                  : "bg-viepsy-canvas text-[var(--viepsy-success)]",
              )}
              aria-hidden
            >
              ✓
            </span>
            <span className="font-[330]">{item}</span>
          </li>
        ))}
      </ul>

      <div
        className={cn(
          "mt-auto flex flex-col gap-2 border-t pt-5",
          isDark ? "border-viepsy-inverse-ink/15" : "border-viepsy-hairline",
        )}
      >
        <Button
          variant="primary"
          href={contactLinks.zalo}
          className={cn(
            "w-full justify-center",
            isDark
              ? "bg-viepsy-accent-sage text-viepsy-inverse-ink hover:bg-viepsy-accent-sage/90"
              : "bg-viepsy-accent-sage text-viepsy-inverse-ink hover:bg-viepsy-accent-sage/90",
          )}
        >
          {bookingCopy.primaryCta}
        </Button>
      </div>
    </article>
  );
}
