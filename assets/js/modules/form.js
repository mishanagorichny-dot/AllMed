// Contact form: inline validation on blur/submit, errors that say how to fix,
// focus moves to the first problem. Prototype submit shows the success state.
const RULES = {
  name: (v) => (v.trim() ? '' : 'Enter your name so we know who to reply to.'),
  email: (v) => (!v.trim() ? 'Enter your email address.'
    : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter an email like name@example.ie.'),
  message: (v) => (v.trim().length >= 10 ? '' : 'Add a short message (at least 10 characters).'),
};

export function initForms() {
  document.querySelectorAll('[data-validate]').forEach((form) => {
    const check = (input) => {
      const rule = RULES[input.name];
      if (!rule) return true;
      const error = rule(input.value);
      const field = input.closest('.field');
      field.classList.toggle('is-invalid', Boolean(error));
      input.setAttribute('aria-invalid', String(Boolean(error)));
      field.querySelector('[data-error-text]').textContent = error;
      return !error;
    };
    form.querySelectorAll('input, textarea').forEach((input) => {
      input.addEventListener('blur', () => input.value && check(input));
      input.addEventListener('input', () => input.closest('.field').classList.contains('is-invalid') && check(input));
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = [...form.querySelectorAll('input, textarea')];
      const invalid = inputs.filter((i) => !check(i));
      if (invalid.length) { invalid[0].focus(); return; }
      const btn = form.querySelector('[type="submit"]');
      btn.classList.add('is-loading');
      btn.querySelector('span').textContent = 'Sending…';
      setTimeout(() => {
        form.classList.add('is-sent');
        form.nextElementSibling?.focus();
      }, 700);
    });
  });
}
