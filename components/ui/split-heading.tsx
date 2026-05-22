import { cn } from "@/lib/utils/cn";

type SplitHeadingProps = {
  lead: string;
  accent: string;
  as?: "h1" | "h2";
  className?: string;
};

/** Tiêu đề hai tông màu như mockup tham chiếu */
export function SplitHeading({
  lead,
  accent,
  as: Tag = "h2",
  className,
}: SplitHeadingProps) {
  return (
    <Tag className={cn("text-display-lg", className)}>
      <span className="text-viepsy-ink">{lead}</span>{" "}
      <span className="text-viepsy-accent-sage">{accent}</span>
    </Tag>
  );
}
