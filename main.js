Reveal.initialize({
  hash: true,
  transition: 'slide',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
  controls: true,
  controlsTutorial: false,
  progress: true,
  slideNumber: 'c/t',
  showSlideNumber: 'all',
  center: true,
  autoAnimate: true,
  autoAnimateDuration: 0.6,
});

// Logo switching based on slide background
const darkSlides = ['sl-cover', 'sl-problem', 'sl-solution', 'sl-mobile', 'sl-cta', 'sl-end'];

function updateLogo(slide) {
  const logo = document.querySelector('.global-logo');
  if (!logo) return;
  // Hide on cover and end slides
  if (slide.classList.contains('sl-cover') || slide.classList.contains('sl-end')) {
    logo.style.display = 'none';
    return;
  }
  logo.style.display = 'block';
  const isDark = darkSlides.some(cls => slide.classList.contains(cls));
  logo.src = isDark ? 'images/logo_2.png' : 'images/logo.svg';
}

Reveal.on('slidechanged', function(event) {
  updateLogo(event.currentSlide);
});

Reveal.on('ready', function(event) {
  updateLogo(event.currentSlide);
});

// Typewriter effect
const phrases = [
  'avtomatik izləyin',
  'dəqiq hesablayın',
  'şəffaf idarə edin',
  'GPS ilə doğrulayın',
  'bir klikdə analiz edin',
  // 'rəqəmsal nəzarətə alın',
];
let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('twText');
function type() {
  if (!el) return;
  const cur = phrases[pi];
  if (!deleting) {
    el.textContent = cur.slice(0, ++ci);
    if (ci === cur.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = cur.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 50 : 80);
}
setTimeout(type, 600);
