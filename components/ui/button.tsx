import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-viepsy-primary text-viepsy-on-primary px-5 py-2.5 hover:opacity-90 transition-opacity",
  secondary:
    "bg-viepsy-canvas text-viepsy-ink px-[18px] py-2 hover:bg-viepsy-surface-soft transition-colors border border-viepsy-hairline",
  tertiary:
    "bg-transparent text-viepsy-ink px-3 py-2 hover:opacity-70 transition-opacity",
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full text-button font-[480] text-center whitespace-normal sm:whitespace-nowrap",
    variants[variant],
    className,
  );

  if (href) {
    if (isExternalHref(href)) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
