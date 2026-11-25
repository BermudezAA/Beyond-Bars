(() => {
  "use strict";

  const targets = document.querySelectorAll(
    ".bb-home-image, .bb-hero, .bb-section-heading, .bb-reach, .bb-pillars article, .bb-project-card, .bb-cta, .bb-page-intro, .bb-project-detail > .bb-eyebrow, .bb-project-detail > h1, .bb-project-detail > .bb-lede, .bb-project-detail > .bb-editorial-image, .bb-project-detail > h2, .bb-project-detail > p, .bb-project-detail > ul, .bb-project-detail > .bb-team, .bb-project-detail > .bb-note"
  );

  if (!targets.length) return;

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motionPreference.matches || !("IntersectionObserver" in window)) return;

  targets.forEach((element, index) => {
    element.classList.add("bb-reveal");

    if (element.matches(".bb-project-card, .bb-pillars article")) {
      element.style.setProperty("--bb-reveal-delay", `${(index % 4) * 65}ms`);
    }
  });

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("bb-is-visible");
        activeObserver.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -42px 0px",
      threshold: 0.08,
    }
  );

  targets.forEach((element) => observer.observe(element));
})();
