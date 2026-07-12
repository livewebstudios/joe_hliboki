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
})();
