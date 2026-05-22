import { bookingCopy } from "@/config/landing/booking-copy";
import { contactLinks } from "@/config/landing/contact-links";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

export function ServiceUnsureSection() {
  return (
    <section className="border-t border-viepsy-hairline bg-viepsy-canvas py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-viepsy-hairline bg-viepsy-block-lime/50 p-8 text-center md:p-10">
          <Eyebrow className="mb-3">Chưa chắc chọn gói?</Eyebrow>
          <h2 className="text-headline mb-3">
            Chưa biết chọn gói nào? Viepsy sẽ gợi ý theo tình huống của bạn
          </h2>
          <p className="text-body-sm mb-6 opacity-90">
            Mỗi người một nhu cầu — bạn không cần chọn gói trước. Nhắn Zalo hoặc
            email, Viepsy sẽ trao đổi và đề xuất hướng phù hợp.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" href={contactLinks.zalo}>
              {bookingCopy.primaryCta}
            </Button>
            <Button variant="secondary" href={contactLinks.emailBook}>
              {bookingCopy.secondaryEmail}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
