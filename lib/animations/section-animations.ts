import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./prefers-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_SCROLL = {
  start: "top 82%",
  toggleActions: "play none none none",
} as const;

function revealOnScroll(
  targets: gsap.TweenTarget,
  vars: gsap.TweenVars,
  scrollVars?: ScrollTrigger.Vars,
) {
  const defaultTrigger = Array.isArray(targets)
    ? (targets[0] as Element | undefined)
    : (targets as Element | string | undefined);

  return gsap.from(targets, {
    ...vars,
    scrollTrigger: {
      trigger: scrollVars?.trigger ?? defaultTrigger,
      ...DEFAULT_SCROLL,
      ...scrollVars,
    },
  });
}

function setupHero(section: HTMLElement) {
  const content = section.querySelector("[data-animate='hero-content']");
  const visual = section.querySelector("[data-animate='hero-visual']");
  const badges = section.querySelectorAll("[data-animate='hero-badge']");

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  if (content) {
    tl.from(content.children, {
      y: 48,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
    });
  }

  if (visual) {
    tl.from(
      visual,
      { scale: 0.88, opacity: 0, y: 32, duration: 1.1, ease: "power2.out" },
      content ? "-=0.55" : 0,
    );
  }

  if (badges.length) {
    tl.from(
      badges,
      { scale: 0, opacity: 0, duration: 0.5, stagger: 0.12, ease: "back.out(2)" },
      "-=0.6",
    );
  }
}

function setupMarquee(section: HTMLElement) {
  revealOnScroll(
    section,
    { clipPath: "inset(0 100% 0 0)", duration: 1, ease: "power4.inOut" },
    { trigger: section, start: "top 92%" },
  );
}

function setupAudience(section: HTMLElement) {
  const header = section.querySelector("[data-animate='section-header']");
  const cards = section.querySelectorAll("[data-animate='audience-card']");

  if (header) {
    revealOnScroll(header.children, {
      y: 36,
      opacity: 0,
      duration: 0.75,
      stagger: 0.08,
    });
  }

  if (cards.length) {
    revealOnScroll(cards, {
      y: 56,
      opacity: 0,
      rotateX: 8,
      transformOrigin: "center top",
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
    });
  }
}

function setupServices(section: HTMLElement) {
  const header = section.querySelector("[data-animate='section-header']");
  const cards = section.querySelectorAll("[data-animate='service-card']");

  if (header) {
    revealOnScroll(header, {
      y: -28,
      opacity: 0,
      duration: 0.7,
    });
  }

  if (cards.length) {
    cards.forEach((card, index) => {
      const fromX = index % 2 === 0 ? -48 : 48;
      revealOnScroll(
        card,
        {
          x: fromX,
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        },
        { start: "top 88%" },
      );
    });
  }
}

function setupProcess(section: HTMLElement) {
  const header = section.querySelector("[data-animate='section-header']");
  const line = section.querySelector("[data-animate='process-line']");
  const steps = section.querySelectorAll("[data-animate='process-step']");

  if (header) {
    revealOnScroll(header.children, {
      y: 32,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
    });
  }

  if (line) {
    gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
    revealOnScroll(
      line,
      { scaleY: 1, duration: 1.4, ease: "power2.inOut" },
      { trigger: section.querySelector("ol") ?? section, start: "top 75%" },
    );
  }

  if (steps.length) {
    steps.forEach((step, index) => {
      const fromX = index % 2 === 0 ? 64 : -64;
      revealOnScroll(
        step,
        {
          x: fromX,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        { start: "top 85%" },
      );
    });
  }
}

function setupVisualBreak(section: HTMLElement) {
  const quoteIcon = section.querySelector("[data-animate='quote-icon']");
  const quote = section.querySelector("[data-animate='quote-text']");
  const attribution = section.querySelector("[data-animate='quote-attribution']");
  const dots = section.querySelector("[data-animate='quote-dots']");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 78%",
      toggleActions: "play none none none",
    },
    defaults: { ease: "power2.out" },
  });

  if (quoteIcon) {
    tl.from(quoteIcon, { scale: 0.4, rotate: -20, opacity: 0, duration: 0.8 });
  }
  if (quote) {
    tl.from(
      quote,
      { y: 40, opacity: 0, filter: "blur(8px)", duration: 1 },
      "-=0.4",
    );
  }
  if (attribution) {
    tl.from(attribution, { y: 16, opacity: 0, duration: 0.6 }, "-=0.5");
  }
  if (dots) {
    tl.from(
      dots.children,
      { scale: 0, opacity: 0, duration: 0.4, stagger: 0.1, ease: "back.out(2)" },
      "-=0.3",
    );
  }
}

function setupFeedback(section: HTMLElement) {
  const header = section.querySelector("[data-animate='section-header']");
  const stats = section.querySelector("[data-animate='feedback-stats']");
  const cards = section.querySelectorAll("[data-animate='feedback-card']");
  const cta = section.querySelector("[data-animate='feedback-cta']");

  if (header) {
    revealOnScroll(header.children, {
      y: 28,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
    });
  }

  if (stats) {
    revealOnScroll(
      stats,
      { scale: 0.92, opacity: 0, duration: 0.75, ease: "power2.out" },
    );
  }

  if (cards.length) {
    revealOnScroll(cards, {
      y: 48,
      opacity: 0,
      rotate: (index) => (index === 1 ? 0 : index === 0 ? -2 : 2),
      duration: 0.85,
      stagger: 0.15,
      ease: "power3.out",
    });
  }

  if (cta) {
    revealOnScroll(cta, { y: 24, opacity: 0, duration: 0.7 });
  }
}

function setupFaq(section: HTMLElement) {
  const header = section.querySelector("[data-animate='section-header']");
  const list = section.querySelector("[data-animate='faq-list']");
  const items = section.querySelectorAll("[data-animate='faq-item']");

  if (header) {
    revealOnScroll(
      header,
      {
        y: 32,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.out",
        clearProps: "transform,opacity,visibility",
      },
      { trigger: section, start: "top 85%" },
    );
  }

  if (items.length) {
    revealOnScroll(
      items,
      {
        y: 36,
        autoAlpha: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform,opacity,visibility",
      },
      { trigger: list ?? section, start: "top 88%" },
    );
  }
}

function setupCta(section: HTMLElement) {
  const panel = section.querySelector("[data-animate='cta-panel']");
  const content = section.querySelector("[data-animate='cta-content']");

  if (panel) {
    revealOnScroll(
      panel,
      { scale: 0.94, opacity: 0, duration: 1, ease: "power3.out" },
      { trigger: section, start: "top 85%" },
    );
  }

  if (content) {
    revealOnScroll(
      content.children,
      {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      },
      { trigger: section, start: "top 80%" },
    );
  }
}

const SECTION_SETUPS: Record<string, (section: HTMLElement) => void> = {
  hero: setupHero,
  marquee: setupMarquee,
  audience: setupAudience,
  services: setupServices,
  process: setupProcess,
  "visual-break": setupVisualBreak,
  feedback: setupFeedback,
  faq: setupFaq,
  cta: setupCta,
};

export function initSectionAnimations(): () => void {
  if (prefersReducedMotion()) return () => {};

  const sections = document.querySelectorAll<HTMLElement>("[data-animate-section]");

  sections.forEach((section) => {
    const type = section.dataset.animateSection;
    if (!type) return;
    SECTION_SETUPS[type]?.(section);
  });

  ScrollTrigger.refresh();

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.globalTimeline.clear();
  };
}
