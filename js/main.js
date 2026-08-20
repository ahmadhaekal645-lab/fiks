/* Menu HP: buka/tutup panel navigasi. */

(function () {
  var burger = document.getElementById('burger');
  var nav    = document.getElementById('nav');
  var scrim  = document.getElementById('scrim');

  if (!burger || !nav || !scrim) return;

  function buka() {
    nav.classList.add('is-open');
    burger.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Tutup menu');
    scrim.hidden = false;
    document.body.classList.add('terkunci');
  }

  function tutup() {
    nav.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Buka menu');
    scrim.hidden = true;
    document.body.classList.remove('terkunci');
  }

  burger.addEventListener('click', function () {
    if (nav.classList.contains('is-open')) { tutup(); } else { buka(); }
  });

  scrim.addEventListener('click', tutup);

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) tutup();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') tutup();
  });

  /* Kalau layar dilebarkan ke ukuran laptop, panel HP jangan tertinggal terbuka. */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024 && nav.classList.contains('is-open')) tutup();
  });
})();
