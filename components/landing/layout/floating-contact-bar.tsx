import { FaPhone } from "react-icons/fa6";
import { ZaloIcon } from "@/components/icons/zalo-icon";
import {
  contactLinks,
  isPlaceholderHref,
} from "@/config/landing/contact-links";
import { siteConfig } from "@/config/landing/site";
import { cn } from "@/lib/utils/cn";

const items = [
  {
    label: "Chat Zalo",
    href: contactLinks.zalo,
    icon: ZaloIcon,
    iconClassName: "h-4 w-7",
    className: "bg-[#0068ff] text-white hover:bg-[#0056d6]",
  },
  {
    label: `Gọi ${siteConfig.contact.phone}`,
    href: contactLinks.phone,
    icon: FaPhone,
    iconClassName: "size-5",
    className: "bg-viepsy-accent-sage text-white hover:opacity-90",
  },
].filter((item) => !isPlaceholderHref(item.href));

export function FloatingContactBar() {
  return (
    <aside
      className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 pl-2 md:flex"
      aria-label="Liên hệ nhanh"
    >
      {items.map(({ label, href, icon: Icon, iconClassName, className }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className={cn(
            "flex size-11 items-center justify-center rounded-full shadow-md transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-viepsy-primary",
            className,
          )}
        >
          <Icon className={iconClassName} aria-hidden />
        </a>
      ))}
    </aside>
  );
}
