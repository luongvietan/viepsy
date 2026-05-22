import { siteConfig } from "@/config/landing/site";
import { contactLinks } from "@/config/landing/contact-links";
import { routes } from "@/config/landing/routes";
import { miniHighlights } from "@/data/landing/values";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

export function OverviewSection() {
  return (
    <section id="tong-quan" className="scroll-mt-16 pt-10 pb-6 md:pt-14 md:pb-8">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-3">Sức khỏe tinh thần</Eyebrow>
          <h1 className="text-display-lg mb-4 text-viepsy-ink">
            {siteConfig.tagline}
          </h1>
          <p className="text-body-lg mb-6">{siteConfig.description}</p>
          <p className="text-body-sm mb-8 opacity-90">
            Viepsy mong muốn mỗi người có không gian được lắng nghe, thấu hiểu và
            cảm thấy nhẹ hơn — không gian an toàn, gần gũi, cá nhân hóa.
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
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" href={routes.services}>
              Chọn gói dịch vụ
            </Button>
            <Button variant="secondary" href={contactLinks.zalo}>
              Chat Zalo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
