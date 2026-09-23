// Entry point: each module guards itself, so pages load only what they use.
import { initHeader } from './modules/header.js';
import { initStatus } from './modules/status.js';
import { initServices } from './modules/services.js';
import { initReveal } from './modules/reveal.js';
import { initBooking } from './modules/booking.js';
import { initForms } from './modules/form.js';

initHeader();
initStatus();
initServices();
initBooking();
initForms();
initReveal();

// The 3D hero is decorative: load it after first paint so it never delays content.
const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
if (document.querySelector('[data-hero-3d]')) {
  idle(() => import('./modules/hero-3d.js').then((m) => m.initHero3D()));
}
