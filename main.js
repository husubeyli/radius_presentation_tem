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

// Hide global logo on last slide
Reveal.on('slidechanged', function(event) {
  const logo = document.querySelector('.global-logo');
  if (!logo) return;
  if (event.currentSlide.classList.contains('sl-end')) {
    logo.style.display = 'none';
  } else {
    logo.style.display = 'block';
  }
});

// Typewriter effect
const phrases = [
  'real vaxtda izləyin',
  'avtomatik hesablayın',
  'dəqiq idarə edin',
  'asanlıqla analiz edin',
  'bir klikdə hesabat alın',
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
