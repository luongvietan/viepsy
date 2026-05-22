import { shopProducts } from "@/data/landing/shop";
import { siteConfig } from "@/config/landing/site";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

export function ShopSection() {
  return (
    <Section id="gian-hang" className="scroll-mt-16">
      <div className="mb-10 max-w-2xl">
        <Eyebrow className="mb-3">Gian hàng</Eyebrow>
        <h2 className="text-display-lg mb-3">Sản phẩm đồng hành</h2>
        <p className="text-body-lg">
          Một số mặt hàng phụ hỗ trợ hành trình chăm sóc tinh thần — bạn có thể
          cập nhật và bán trực tiếp trên đây khi sẵn sàng.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shopProducts.map((product) => (
          <article
            key={product.id}
            className="flex flex-col rounded-2xl border border-viepsy-hairline bg-viepsy-canvas p-6"
          >
            <div className="mb-4 flex h-24 items-center justify-center rounded-xl bg-viepsy-surface-soft text-4xl">
              🌿
            </div>
            <h3 className="text-headline mb-2">{product.name}</h3>
            <p className="text-body-sm mb-4 flex-1">{product.description}</p>
            {product.price && (
              <p className="mb-3 text-xl font-[340]">{product.price} đ</p>
            )}
            <span
              className={cn(
                "text-eyebrow mb-4 inline-block w-fit rounded-full px-3 py-1",
                product.status === "coming_soon"
                  ? "bg-viepsy-block-cream text-viepsy-ink"
                  : "bg-viepsy-block-mint text-viepsy-ink",
              )}
            >
              {product.status === "coming_soon" ? "Sắp mở bán" : "Đang bán"}
            </span>
            {product.status === "available" && product.href ? (
              <Button variant="primary" href={product.href} className="w-full justify-center">
                Xem sản phẩm
              </Button>
            ) : (
              <Button
                variant="secondary"
                href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Hỏi về: ${product.name}`)}`}
                className="w-full justify-center"
              >
                Liên hệ khi có hàng
              </Button>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
