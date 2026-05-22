const items = [
  "Bạn được an toàn ở đây",
  "Lắng nghe chân thành",
  "Không gian riêng tư",
  "Cảm, rồi hiểu",
  "Đồng hành nhẹ nhàng",
] as const;

export function MarqueeStrip() {
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div data-animate-section="marquee" className="px-4 py-6 md:px-6 lg:px-8">
      <div className="overflow-hidden rounded-full bg-viepsy-block-navy py-3.5 shadow-sm md:py-4">
        <div className="flex w-max animate-marquee items-center gap-10 px-4">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="text-eyebrow shrink-0 text-viepsy-inverse-ink"
            >
              <span className="mr-10 opacity-60" aria-hidden>
                ✦
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
