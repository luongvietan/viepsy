import type { Metadata } from "next";
import { PageShell } from "@/components/landing/layout/page-shell";
import { BookingForm } from "@/components/booking/booking-form";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitHeading } from "@/components/ui/split-heading";
import { siteConfig } from "@/config/landing/site";

export const metadata: Metadata = {
  title: `Đặt lịch — ${siteConfig.name}`,
  description:
    "Gửi yêu cầu đặt lịch tư vấn sức khỏe tinh thần với Viepsy. Viepsy sẽ phản hồi và xác nhận lịch sớm.",
};

export default function BookingPage() {
  return (
    <PageShell>
      <section className="py-12 sm:py-16 md:py-24">
        <Container className="max-w-3xl">
          <Eyebrow className="mb-4">Đặt lịch</Eyebrow>
          <SplitHeading lead="Khi bạn" accent="sẵn sàng" className="mb-4" />
          <p className="text-body-lg mb-10 max-w-2xl opacity-90">
            Điền thông tin bên dưới — Viepsy sẽ nhận yêu cầu và liên hệ xác
            nhận lịch qua email hoặc điện thoại.
          </p>
          <BookingForm />
        </Container>
      </section>
    </PageShell>
  );
}
