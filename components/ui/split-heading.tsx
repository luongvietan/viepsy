import { cn } from "@/lib/utils/cn";

type SplitHeadingProps = {
  lead: string;
  accent: string;
  as?: "h1" | "h2";
  className?: string;
  size?: "default" | "hero";
};

const sizeStyles = {
  default: "text-display-lg",
  hero:
    "text-[clamp(1.625rem,6.2vw,2.125rem)] leading-[1.12] md:text-display-lg md:leading-[1.1]",
};

/** Tiêu đề hai tông màu như mockup tham chiếu */
export function SplitHeading({
  lead,
  accent,
  as: Tag = "h2",
  className,
  size = "default",
}: SplitHeadingProps) {
  return (
    <Tag className={cn(sizeStyles[size], className)}>
      <span className="text-viepsy-ink">{lead}</span>{" "}
      <span className="text-viepsy-accent-sage">{accent}</span>
    </Tag>
  );
}
