// Header: scrolled state, mobile menu sheet (focus management, Esc to close),
// and current-section highlighting in the desktop nav.
export function initHeader() {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.getElementById('mobile-menu');

  const onScroll = () => root.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle && menu) {
    const setOpen = (open) => {
      root.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.inert = !open;
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) menu.querySelector('a')?.focus({ preventScroll: true });
    };
    menu.inert = true;
    toggle.addEventListener('click', () => setOpen(!root.classList.contains('menu-open')));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && root.classList.contains('menu-open')) { setOpen(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 961px)').addEventListener('change', (e) => e.matches && setOpen(false));
  }

  // Scroll-spy for in-page nav links
  const links = [...document.querySelectorAll('.nav__link[href^="#"]')];
  const targets = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!targets.length) return;
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  targets.forEach((t) => spy.observe(t));
}
