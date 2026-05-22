import { siteConfig } from "@/config/landing/site";

export function VisualBreakSection() {
  return (
    <section
      data-animate-section="visual-break"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-viepsy-block-mint via-viepsy-canvas to-viepsy-block-cream opacity-60" />
      
      {/* Decorative circles */}
      <div className="absolute left-[-10%] top-[20%] h-64 w-64 rounded-full bg-viepsy-accent-sage/10 blur-3xl md:h-96 md:w-96" />
      <div className="absolute right-[-10%] bottom-[20%] h-64 w-64 rounded-full bg-viepsy-block-lime/20 blur-3xl md:h-96 md:w-96" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Large decorative quote mark */}
        <div className="mb-8 flex justify-center" data-animate="quote-icon">
          <svg
            className="h-20 w-20 text-viepsy-accent-sage/30 md:h-28 md:w-28"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M10 8v6c0 3.314-2.686 6-6 6v4c5.523 0 10-4.477 10-10V8h-4zm14 0v6c0 3.314-2.686 6-6 6v4c5.523 0 10-4.477 10-10V8h-4z" />
          </svg>
        </div>
        
        {/* Main quote */}
        <blockquote className="mb-8" data-animate="quote-text">
          <p className="text-3xl font-[340] leading-relaxed text-viepsy-ink md:text-5xl md:leading-[1.3]">
            Đôi khi, chỉ cần được{" "}
            <span className="font-semibold text-viepsy-accent-sage">lắng nghe</span>
            <br className="hidden md:block" />
            {" "}là đã thấy{" "}
            <span className="font-semibold text-viepsy-accent-sage">nhẹ lòng</span>
          </p>
        </blockquote>
        
        {/* Attribution */}
        <p className="text-body text-viepsy-ink/60" data-animate="quote-attribution">
          — {siteConfig.motto}
        </p>
        
        {/* Decorative dots */}
        <div
          className="mt-12 flex items-center justify-center gap-2"
          data-animate="quote-dots"
        >
          <span className="h-2 w-2 rounded-full bg-viepsy-accent-sage/40" />
          <span className="h-2 w-12 rounded-full bg-viepsy-accent-sage/60" />
          <span className="h-2 w-2 rounded-full bg-viepsy-accent-sage/40" />
        </div>
      </div>
    </section>
  );
}
