// Single source of clinic facts used by scripts. Mirrors the live allmedclinic.ie content.
export const CLINIC = {
  timeZone: 'Europe/Dublin',
  // Minutes from midnight. null = closed.
  hours: {
    Mon: [480, 1140], Tue: [480, 1140], Wed: [480, 1140], Thu: [480, 1140], Fri: [480, 1140],
    Sat: [480, 840],
    Sun: null,
  },
  // Set to the clinic's online booking provider URL before launch.
  // While empty, "Book" links scroll to the booking section and the primary
  // "Book online" action shows a prototype note instead of navigating.
  bookingUrl: '',
};
