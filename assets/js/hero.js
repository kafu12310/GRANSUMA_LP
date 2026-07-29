function initHeroVideo() {
  const video = document.querySelector('.hero-video');
  const hero = document.querySelector('.hero-bg');
  if (!video || !hero) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (prefersReducedMotion) {
    video.pause();
    video.removeAttribute('autoplay');
    video.classList.add('is-disabled');
    return;
  }

  video.preload = 'auto';
  video.play().catch(() => {});

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
        return;
      }
      video.pause();
    },
    { threshold: 0.05 },
  );

  observer.observe(hero);
}

initHeroVideo();
