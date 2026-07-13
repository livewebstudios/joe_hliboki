/* Joe Hliboki - main.js
   Mobile nav toggle + scroll-reveal IntersectionObserver.
   Vanilla JS only. All visual motion is defined in CSS and
   gated behind prefers-reduced-motion: no-preference. */

(function () {
  'use strict';

  /* Signal that JS is running. The CSS only hides .reveal /
     .divider elements when this class is present, so content
     stays fully visible if scripts never load. */
  document.documentElement.classList.add('js');

  /* ----- Mobile nav toggle ----- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');

  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  /* ----- Scroll reveals + divider line draws -----
     One observer. Elements reveal once, then unobserve. */
  var targets = document.querySelectorAll('.reveal, .divider');

  if ('IntersectionObserver' in window && targets.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* No observer support: show everything immediately */
    targets.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ----- Home header: transparent over the movie at the top,
     solid sticky bar once scrolling starts ----- */
  if (document.body.classList.contains('home')) {
    var onScroll = function () {
      document.body.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ----- Hero background video -----
     Attributes (autoplay muted loop playsinline) handle the
     common case. This is a defensive nudge for browsers that
     stall muted autoplay. Skipped when the visitor asks for
     reduced motion, where the CSS hides the video entirely. */
  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var heroVideo = document.querySelector('.hero-video');

  if (heroVideo && !reduce) {
    var playHero = function () {
      var p = heroVideo.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function () { /* autoplay blocked; static frame is fine */ });
      }
    };
    playHero();
    heroVideo.addEventListener('canplay', playHero, { once: true });
  }
})();
