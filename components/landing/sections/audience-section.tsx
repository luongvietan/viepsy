import { audienceItems } from "@/data/landing/values";
import { AudienceCard } from "@/components/landing/audience-card";
import { SectionDrumBackground } from "@/components/landing/section-drum-background";
import { ColorBlockSection } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitHeading } from "@/components/ui/split-heading";

type AudienceSectionProps = {
  id?: string;
};

export function AudienceSection({ id = "doi-tuong" }: AudienceSectionProps) {
  return (
    <ColorBlockSection
      block="cream"
      id={id}
      className="scroll-mt-16"
      containerClassName="relative overflow-hidden"
      data-animate-section="audience"
    >
      <SectionDrumBackground />

      <div className="relative z-10 mb-10 max-w-3xl md:mb-12" data-animate="section-header">
        <Eyebrow className="mb-3">Đối tượng</Eyebrow>
        <SplitHeading lead="Khi nào nên" accent="tìm sự đồng hành?" />
        <p className="text-body-lg mt-5">
          Chăm sóc tinh thần không chỉ dành cho lúc khủng hoảng — bạn có thể bắt
          đầu từ những cảm xúc đời thường: căng thẳng, mệt mỏi, hoặc chỉ cần
          một người lắng nghe.
        </p>
      </div>

      <div className="relative z-10 grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
        {audienceItems.map((item, index) => (
          <AudienceCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </ColorBlockSection>
  );
}
