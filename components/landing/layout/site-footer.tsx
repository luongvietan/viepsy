import Link from "next/link";
import { siteConfig } from "@/config/landing/site";
import { routes } from "@/config/landing/routes";
import { bookingCopy } from "@/config/landing/booking-copy";
import { contactLinks, getActiveSocialLinks } from "@/config/landing/contact-links";
import { Button } from "@/components/ui/button";

const pageLinks = [
  { label: "Về Viepsy", href: routes.about },
  { label: "Dịch vụ", href: routes.services },
  { label: "Phản hồi", href: routes.feedback },
  { label: "FAQ", href: routes.faq },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socialLinks = getActiveSocialLinks();

  return (
    <footer className="mt-auto px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-t-[2rem] bg-viepsy-block-navy px-8 py-14 text-viepsy-inverse-ink md:rounded-t-[2.5rem] md:px-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-eyebrow mb-3 tracking-widest text-viepsy-block-lime">
              {siteConfig.name}
            </p>
            <p className="text-body-lg opacity-92">{siteConfig.tagline}</p>
            <p className="mt-4 text-headline text-viepsy-block-lime">
              &ldquo;{siteConfig.motto}&rdquo;
            </p>
            <div className="mt-6">
              <Button
                variant="secondary"
                href={contactLinks.zalo}
                className="border-transparent bg-viepsy-accent-sage text-viepsy-inverse-ink hover:bg-viepsy-accent-sage/90"
              >
                {bookingCopy.primaryCta}
              </Button>
              <p className="mt-3 text-body-sm opacity-75">{bookingCopy.hint}</p>
            </div>
          </div>

          <div>
            <p className="text-eyebrow mb-4 text-viepsy-block-lime">Trang</p>
            <ul className="space-y-2 text-body-sm">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:opacity-70">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={routes.book} className="hover:opacity-70">
                  Đặt lịch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-4 text-viepsy-block-lime">Liên hệ</p>
            <ul className="space-y-2 text-body-sm">
              <li>
                <a href={contactLinks.email} className="hover:opacity-70">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={contactLinks.phone} className="hover:opacity-70">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactLinks.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  Chat Zalo
                </a>
              </li>
              <li className="opacity-85">{siteConfig.contact.location}</li>
            </ul>
            <p className="text-eyebrow mt-8 mb-2 text-viepsy-block-lime">
              Giờ hoạt động
            </p>
            <p className="text-body-sm opacity-85">{siteConfig.contact.hours}</p>
          </div>

          {socialLinks.length > 0 && (
            <div>
              <p className="text-eyebrow mb-4 text-viepsy-block-lime">Kết nối</p>
              <ul className="flex flex-wrap gap-x-3 gap-y-2 text-body-sm">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 border-t border-viepsy-inverse-ink/15 pt-8">
          <p className="text-eyebrow text-center opacity-70 md:text-left">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
