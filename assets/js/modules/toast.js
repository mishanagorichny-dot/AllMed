// Polite, non-blocking toast.
let el; let timer;
export function toast(message) {
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    document.body.append(el);
  }
  el.innerHTML = `<svg class="icon" aria-hidden="true"><use href="${document.documentElement.dataset.icons}#check"/></svg><span></span>`;
  el.querySelector('span').textContent = message;
  requestAnimationFrame(() => el.classList.add('is-visible'));
  clearTimeout(timer);
  timer = setTimeout(() => el.classList.remove('is-visible'), 4200);
}
