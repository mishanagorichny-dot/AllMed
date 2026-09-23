// Service index: list rows drive a sticky preview panel on desktop and expand
// in place on phones. One source of truth: each row's inline detail markup.
const DESKTOP = window.matchMedia('(min-width: 901px)');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

export function initServices() {
  const root = document.querySelector('[data-services]');
  if (!root) return;

  const triggers = [...root.querySelectorAll('.svc__trigger')];
  const panel = root.querySelector('.svc__panel');
  const panelImg = panel?.querySelector('img');
  const panelBody = panel?.querySelector('[data-panel-body]');
  let active = null;
  let hoverTimer;

  const fillPanel = (trigger) => {
    if (!panel) return;
    const detail = document.getElementById(trigger.getAttribute('aria-controls'));
    const img = detail.querySelector('img');
    const swap = () => {
      panelBody.innerHTML = '';
      const title = document.createElement('h3');
      title.textContent = trigger.querySelector('.svc__name').textContent;
      panelBody.append(title, ...[...detail.querySelector('.svc__detail-inner').children]
        .filter((n) => n.tagName !== 'IMG').map((n) => n.cloneNode(true)));
    };
    if (reduceMotion.matches || !panelImg.src) {
      panelImg.src = img.src; panelImg.alt = img.alt; swap(); return;
    }
    panel.classList.add('is-swapping');
    panelImg.classList.add('is-leaving');
    setTimeout(() => {
      panelImg.src = img.src; panelImg.alt = img.alt; swap();
      const done = () => { panelImg.classList.remove('is-leaving'); panel.classList.remove('is-swapping'); };
      panelImg.complete ? requestAnimationFrame(done) : panelImg.addEventListener('load', done, { once: true });
    }, 200);
  };

  const select = (trigger, { toggle = false } = {}) => {
    if (!DESKTOP.matches && toggle && trigger === active && trigger.getAttribute('aria-expanded') === 'true') {
      trigger.setAttribute('aria-expanded', 'false');
      return;
    }
    if (trigger === active && DESKTOP.matches) return;
    triggers.forEach((t) => t.setAttribute('aria-expanded', String(t === trigger)));
    active = trigger;
    if (DESKTOP.matches) fillPanel(trigger);
  };

  triggers.forEach((t) => {
    t.addEventListener('click', () => select(t, { toggle: true }));
    t.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'mouse' || !DESKTOP.matches) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => select(t), 90);
    });
    t.addEventListener('pointerleave', () => clearTimeout(hoverTimer));
    t.addEventListener('keydown', (e) => {
      if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return;
      e.preventDefault();
      const i = triggers.indexOf(t) + (e.key === 'ArrowDown' ? 1 : -1);
      triggers[(i + triggers.length) % triggers.length].focus();
    });
  });

  // Deep link: index.html#service-<id> opens that service
  const fromHash = () => {
    const m = location.hash.match(/^#service-(.+)$/);
    const t = m && root.querySelector(`[data-service="${m[1]}"]`);
    if (t) { select(t); root.scrollIntoView({ block: 'start' }); }
  };

  const initial = triggers.find((t) => t.getAttribute('aria-expanded') === 'true') || triggers[0];
  active = null;
  if (DESKTOP.matches) select(initial);
  else triggers.forEach((t) => t.setAttribute('aria-expanded', 'false'));
  DESKTOP.addEventListener('change', (e) => { if (e.matches) { active = null; select(initial); } });
  window.addEventListener('hashchange', fromHash);
  fromHash();
}
