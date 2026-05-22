import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { FloatingContactBar } from "./floating-contact-bar";
import { StickyBookingCta } from "./sticky-booking-cta";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <FloatingContactBar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <SiteFooter />
      <StickyBookingCta />
    </div>
  );
}
