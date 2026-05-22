import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";
import { Container } from "./container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type ColorBlockProps = SectionProps & {
  block: "lime" | "lilac" | "cream" | "mint" | "pink" | "coral" | "navy";
  inverse?: boolean;
};

const blockStyles = {
  lime: "bg-viepsy-block-lime text-viepsy-ink",
  lilac: "bg-viepsy-block-lilac text-viepsy-ink",
  cream: "bg-viepsy-block-cream text-viepsy-ink",
  mint: "bg-viepsy-block-mint text-viepsy-ink",
  pink: "bg-viepsy-block-pink text-viepsy-ink",
  coral: "bg-viepsy-block-coral text-viepsy-ink",
  navy: "bg-viepsy-block-navy text-viepsy-inverse-ink",
};

export function ColorBlockSection({
  id,
  children,
  block,
  inverse,
  className,
  containerClassName,
  ...props
}: ColorBlockProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)} {...props}>
      <Container>
        <div
          className={cn(
            "rounded-none px-8 py-12 md:rounded-3xl md:px-12 md:py-16",
            blockStyles[block],
            inverse && "text-viepsy-inverse-ink",
            containerClassName,
          )}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
