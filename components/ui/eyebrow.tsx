import { cn } from "@/lib/utils/cn";

export function Eyebrow({
  children,
  className,
  inverse,
}: {
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-eyebrow",
        inverse ? "text-viepsy-inverse-ink" : "text-viepsy-ink",
        className,
      )}
    >
      {children}
    </p>
  );
}
