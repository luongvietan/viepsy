import { coreValues, miniHighlights } from "@/data/landing/values";
import { AudienceSection } from "@/components/landing/sections/audience-section";
import { Section, ColorBlockSection } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

export function AboutSection() {
  return (
    <>
      <Section id="ve-viepsy">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">Về Viepsy</Eyebrow>
          <h2 className="text-display-lg mb-6 text-viepsy-ink">Về Viepsy</h2>
          <p className="text-subhead text-viepsy-ink">
            Viepsy mong muốn mỗi người có một không gian để được lắng nghe, thấu
            hiểu và cảm thấy nhẹ hơn trong những khoảnh khắc của cuộc sống.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-viepsy-hairline bg-viepsy-surface-soft p-6"
            >
              <h3 className="text-headline mb-3 text-viepsy-ink">
                🌿 {value.title}
              </h3>
              <p className="text-body-sm text-viepsy-ink">{value.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {miniHighlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-viepsy-hairline bg-viepsy-canvas px-4 py-2 text-body-sm"
            >
              🌿 {item}
            </span>
          ))}
        </div>
      </Section>

      <AudienceSection />

      <ColorBlockSection block="navy">
        <Eyebrow inverse className="mb-4 text-viepsy-inverse-ink/80">
          Triết lý đồng hành
        </Eyebrow>
        <h2 className="text-display-lg mb-6 max-w-3xl">
          Cảm, rồi hiểu!
        </h2>
        <p className="max-w-3xl text-body-lg opacity-95">
          Viepsy tin rằng cảm xúc hay những khó khăn tinh thần không khiến một
          người trở nên &ldquo;có vấn đề&rdquo;. Mỗi cảm giác, hành vi và giai
          đoạn trong cuộc sống đều có lý do hình thành và xứng đáng được nhìn
          nhận bằng sự tôn trọng thay vì phán xét. Viepsy lựa chọn đồng hành theo
          hướng cá nhân hóa, không áp đặt, không thúc ép. Thay vì cố &ldquo;sửa
          chữa&rdquo; con người, Viepsy mong muốn giúp mỗi cá nhân hiểu bản thân
          rõ hơn, nhẹ hơn và phù hợp hơn với chính nhịp sống của mình.
        </p>
      </ColorBlockSection>
    </>
  );
}
