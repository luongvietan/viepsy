import { cn } from "@/lib/utils/cn";
import type { AudienceItem } from "@/data/landing/values";
import { AudienceIcon } from "@/components/landing/audience-icons";

const CARD_INDEX = ["01", "02", "03", "04", "05", "06"] as const;

const GRADIENT_STYLES = [
  "from-viepsy-block-mint via-viepsy-block-mint/50 to-viepsy-canvas",
  "from-viepsy-block-cream via-viepsy-block-cream/50 to-viepsy-canvas",
  "from-viepsy-block-lilac via-viepsy-block-lilac/50 to-viepsy-canvas",
  "from-viepsy-block-pink via-viepsy-block-pink/50 to-viepsy-canvas",
  "from-viepsy-block-lime via-viepsy-block-lime/50 to-viepsy-canvas",
  "from-viepsy-block-coral via-viepsy-block-coral/50 to-viepsy-canvas",
] as const;

const ICON_BG_COLORS = [
  "bg-viepsy-accent-sage/20",
  "bg-viepsy-accent-warm/20",
  "bg-viepsy-block-lilac",
  "bg-viepsy-block-pink",
  "bg-viepsy-block-lime",
  "bg-viepsy-block-coral",
] as const;

type AudienceCardProps = {
  item: AudienceItem;
  index: number;
};

export function AudienceCard({ item, index }: AudienceCardProps) {
  return (
    <article className="group h-full" data-animate="audience-card">
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-viepsy-hairline/50 bg-gradient-to-br p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-7",
          GRADIENT_STYLES[index],
        )}
      >
        {/* Decorative circle in background */}
        <div
          className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/20 blur-2xl"
          aria-hidden
        />

        {/* Icon with soft background */}
        <div
          className={cn(
            "relative z-10 mb-5 flex size-16 items-center justify-center rounded-2xl shadow-sm md:size-20",
            ICON_BG_COLORS[index],
          )}
        >
          <AudienceIcon
            name={item.icon}
            className="size-10 text-viepsy-ink md:size-12"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col">
          <span className="text-eyebrow mb-2 block text-viepsy-ink/40">
            {CARD_INDEX[index]}
          </span>
          <h3 className="mb-3 text-[1.25rem] font-[540] leading-snug tracking-tight text-viepsy-ink md:text-[1.4rem]">
            {item.title}
          </h3>
          <p className="text-body-sm mt-auto leading-relaxed text-viepsy-ink/80">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
