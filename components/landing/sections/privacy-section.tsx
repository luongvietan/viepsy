import { Container } from "@/components/ui/container";
import { Sparkle, SparkleBurst } from "@/components/ui/sparkle";

export function PrivacySection() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-viepsy-block-navy px-8 py-10 text-viepsy-inverse-ink md:rounded-[2.5rem] md:px-12 md:py-14 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            <h2 className="text-display-lg mb-6 max-w-xl">
              Viepsy quan tâm đến{" "}
              <span className="text-viepsy-block-lime">quyền riêng tư</span> của
              bạn
            </h2>
            <div className="space-y-4 text-body-sm leading-relaxed opacity-92">
              <p>
                Mọi chia sẻ trong phiên đều được tôn trọng, không phán xét và
                không tiết lộ ra bên ngoài.
              </p>
              <p>
                Viepsy tuân thủ nguyên tắc đạo đức nghề nghiệp và chỉ thu thập
                thông tin cần thiết để đồng hành cùng bạn.
              </p>
              <p>
                Bạn có quyền hỏi, tạm dừng hoặc kết thúc khi cảm thấy sẵn sàng —
                luôn với sự rõ ràng và tôn trọng.
              </p>
            </div>
          </div>

          <div className="relative mt-10 flex min-h-[14rem] items-center justify-center lg:mt-0">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-[2rem] bg-viepsy-accent-sage/25 md:h-52 md:w-52">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-viepsy-inverse-ink/30 bg-viepsy-block-navy">
                <svg
                  className="h-12 w-12 text-viepsy-inverse-ink/90"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <rect x="14" y="20" width="20" height="16" rx="3" />
                  <path d="M24 28v4M24 28a2 2 0 100-4 2 2 0 000 4z" />
                  <path d="M18 20V16a6 6 0 0112 0v4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="absolute -right-2 top-6 rounded-full bg-viepsy-block-lime px-3 py-1 text-xs font-medium text-viepsy-ink">
                An toàn
              </span>
              <span className="absolute -left-4 bottom-8 rounded-full bg-viepsy-block-cream px-3 py-1 text-xs font-medium text-viepsy-ink">
                Bảo mật
              </span>
            </div>
            <Sparkle className="absolute right-4 top-2" size={20} />
            <SparkleBurst className="absolute bottom-4 left-0" />
          </div>
        </div>
      </Container>
    </section>
  );
}
