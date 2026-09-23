// Booking links. With a provider URL configured, every [data-book] link goes
// straight to it (one click). In the prototype, they lead to the booking section.
import { CLINIC } from '../config.js';
import { toast } from './toast.js';

export function initBooking() {
  const links = document.querySelectorAll('[data-book]');
  if (CLINIC.bookingUrl) {
    links.forEach((a) => { a.href = CLINIC.bookingUrl; a.rel = 'noopener'; });
    return;
  }
  document.querySelectorAll('[data-book-online]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      toast('Prototype: this opens the clinic’s online booking system.');
    });
  });
}
