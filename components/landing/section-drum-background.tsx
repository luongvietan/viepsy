const DRUM_IMAGE_SRC = "/landing/images/features/Trống_đồng_Đông_Sơn.svg";

export function SectionDrumBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <img
        src={DRUM_IMAGE_SRC}
        alt=""
        className="absolute left-1/2 top-1/2 h-[min(92vw,680px)] w-[min(92vw,680px)] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.07] select-none"
      />
    </div>
  );
}
