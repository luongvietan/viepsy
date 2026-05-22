import { cn } from "@/lib/utils/cn";

type SparkleProps = {
  className?: string;
  size?: number;
};

/** Họa tiết sparkle như mockup INNER SPACE */
export function Sparkle({ className, size = 16 }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("text-viepsy-accent-sage/70", className)}
      aria-hidden
    >
      <path d="M12 0l1.8 6.2L20 8l-6.2 1.8L12 16l-1.8-6.2L4 8l6.2-1.8L12 0z" />
    </svg>
  );
}

export function SparkleBurst({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={cn("text-viepsy-accent-sage/50", className)}
      aria-hidden
    >
      <path d="M16 4v6M16 22v6M4 16h6M22 16h6" strokeLinecap="round" />
      <path d="M8 8l4 4M20 20l4 4M24 8l-4 4M12 20l-4 4" strokeLinecap="round" />
    </svg>
  );
}
