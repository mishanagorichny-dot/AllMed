// Live open/closed status in Europe/Dublin time, plus "today" in hours tables.
import { CLINIC } from '../config.js';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_NAMES = { Sun: 'Sunday', Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday' };

const fmt = (mins) => `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;

function nowInClinic() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: CLINIC.timeZone, weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type)?.value;
  return { day: get('weekday'), mins: Number(get('hour')) * 60 + Number(get('minute')) };
}

export function getStatus() {
  const { day, mins } = nowInClinic();
  const today = CLINIC.hours[day];
  if (today && mins >= today[0] && mins < today[1]) {
    return { open: true, day, label: 'Open now', detail: `Until ${fmt(today[1])}`, text: `Open now · until ${fmt(today[1])}` };
  }
  if (today && mins < today[0]) {
    return { open: false, day, label: 'Closed', detail: `Opens today at ${fmt(today[0])}`, text: `Closed · opens today at ${fmt(today[0])}` };
  }
  const start = DAYS.indexOf(day);
  for (let i = 1; i <= 7; i++) {
    const next = DAYS[(start + i) % 7];
    const h = CLINIC.hours[next];
    if (h) {
      const when = i === 1 ? 'tomorrow' : DAY_NAMES[next];
      return { open: false, day, label: 'Closed', detail: `Opens ${when} at ${fmt(h[0])}`, text: `Closed · opens ${when} at ${fmt(h[0])}` };
    }
  }
  return { open: false, day, label: 'Closed', detail: '', text: 'Closed' };
}

function render() {
  const status = getStatus();
  document.querySelectorAll('[data-status]').forEach((el) => {
    el.classList.toggle('is-open', status.open);
    const text = el.querySelector('[data-status-text]');
    if (text) text.textContent = status.text;
    const label = el.querySelector('[data-status-label]');
    if (label) label.textContent = status.label;
    const detail = el.querySelector('[data-status-detail]');
    if (detail) detail.textContent = status.detail;
  });
  document.querySelectorAll('[data-day]').forEach((row) => {
    const isToday = row.dataset.day === status.day;
    row.classList.toggle('is-today', isToday);
    const th = row.querySelector('th');
    let badge = th.querySelector('.today-badge');
    if (isToday && !badge) {
      badge = document.createElement('span');
      badge.className = 'today-badge';
      badge.textContent = 'Today';
      th.append(' ', badge);
    } else if (!isToday && badge) {
      badge.remove();
    }
  });
}

export function initStatus() {
  if (!document.querySelector('[data-status], [data-day]')) return;
  render();
  setInterval(render, 60_000);
}
