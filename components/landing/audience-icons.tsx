import { HugeiconsIcon } from "@hugeicons/react";
import {
  PuzzleIcon,
  Route01Icon,
  Tired01Icon,
  UserGroupIcon,
  UserLove01Icon,
  WorryIcon,
} from "@hugeicons/core-free-icons";
import type { AudienceItem } from "@/data/landing/values";

const AUDIENCE_ICON_COLOR = "#2c2419";
const AUDIENCE_ICON_STROKE = 2.25;

const iconMap = {
  anxiety: WorryIcon,
  burnout: Tired01Icon,
  "self-esteem": UserLove01Icon,
  transitions: Route01Icon,
  relationships: UserGroupIcon,
  stuck: PuzzleIcon,
} as const;

type AudienceIconProps = {
  name: AudienceItem["icon"];
  className?: string;
};

export function AudienceIcon({ name, className }: AudienceIconProps) {
  return (
    <HugeiconsIcon
      icon={iconMap[name]}
      className={className}
      size={32}
      primaryColor={AUDIENCE_ICON_COLOR}
      color={AUDIENCE_ICON_COLOR}
      strokeWidth={AUDIENCE_ICON_STROKE}
      absoluteStrokeWidth
      aria-hidden
    />
  );
}
