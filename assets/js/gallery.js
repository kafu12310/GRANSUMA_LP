const GALLERY_IMAGES = [
  'assets/images/slider/IMG_4643.jpeg',
  'assets/images/slider/IMG_4869.jpeg',
  'assets/images/slider/IMG_5029.jpeg',
  'assets/images/slider/IMG_5050.jpeg',
  'assets/images/slider/IMG_5054.jpeg',
  'assets/images/slider/IMG_5059.jpeg',
  'assets/images/slider/IMG_5067.jpeg',
  'assets/images/slider/IMG_5086.jpeg',
  'assets/images/slider/IMG_5497.jpeg',
  'assets/images/slider/IMG_5617.jpeg',
]

function initGallerySlider() {
  const slider = document.getElementById('gallery-slider');
  const track = document.getElementById('gallery-track');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');
  if (!slider || !track || !prevBtn || !nextBtn) return;

  track.innerHTML = GALLERY_IMAGES.map(
    (src) =>
      `<div class="gallery-slide">
        <img
          src="${src}"
          alt="FC GRANSUMAの活動風景"
          class="h-48 w-full rounded-lg bg-gray-300 object-cover sm:h-52"
          loading="lazy"
        />
      </div>`,
  ).join('');

  const slides = track.querySelectorAll('.gallery-slide');
  let index = 0;
  let timer;

  function visibleCount() {
    if (window.matchMedia('(min-width: 1024px)').matches) return 4;
    if (window.matchMedia('(min-width: 640px)').matches) return 2;
    return 1;
  }

  function maxIndex() {
    return Math.max(0, slides.length - visibleCount());
  }

  function goTo(nextIndex) {
    index = nextIndex;
    const slide = slides[0];
    if (!slide) return;
    track.style.transform = `translateX(-${index * slide.offsetWidth}px)`;
  }

  function next() {
    goTo(index >= maxIndex() ? 0 : index + 1);
  }

  function prev() {
    goTo(index <= 0 ? maxIndex() : index - 1);
  }

  function start() {
    clearInterval(timer);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(next, 4000);
  }

  function restart() {
    start();
  }

  window.addEventListener('resize', () => {
    goTo(Math.min(index, maxIndex()));
  });

  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', start);

  prevBtn.addEventListener('click', () => {
    prev();
    restart();
  });

  nextBtn.addEventListener('click', () => {
    next();
    restart();
  });

  goTo(0);
  start();
}

initGallerySlider();
