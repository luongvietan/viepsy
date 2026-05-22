import { siteConfig } from "@/config/landing/site";

const BOOK_SUBJECT = "Đặt lịch — Viepsy";

export const contactLinks = {
  zalo: siteConfig.contact.zalo,
  email: `mailto:${siteConfig.contact.email}`,
  emailBook: `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(BOOK_SUBJECT)}`,
  phone: `tel:${siteConfig.contact.phone}`,
  bookService: (serviceTitle: string) =>
    `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Đặt lịch: ${serviceTitle}`)}`,
} as const;

export function isPlaceholderHref(href: string): boolean {
  return !href || href === "#";
}

export function getActiveSocialLinks() {
  return siteConfig.social.filter((item) => !isPlaceholderHref(item.href));
}
