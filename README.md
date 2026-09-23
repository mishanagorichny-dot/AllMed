# AllMed Clinic: redesign prototype

This is a UI/UX case study: a homepage and one service page (Women's Health), built as static HTML/CSS/JS with no build step.

## Run
ES modules need a local server; opening the file directly (`file://`) won't work.

    python3 -m http.server 4173

Then open http://localhost:4173

## Contents
- `index.html`: the homepage (liquid-glass hero with a rotating 3D head and brain).
- `services/womens-health.html`: the service page template.
- `assets/css/main.css`: the stylesheet entry, using cascade layers (tokens → base → components → pages).
- `assets/css/tokens.css`: design tokens (colour, type, space, radius, motion).
- `assets/css/components/`: one file per component.
- `assets/js/`: `config.js` (hours, booking URL) and `modules/` (header, status, services, booking, form, reveal, toast, hero-3d).
- `assets/icons.svg`: the icon sprite.
- `assets/img/`: clinic photography and logo (taken from allmedclinic.ie).
- `assets/fonts/`: Hanken Grotesk variable font, Latin + Latin Extended subsets (SIL Open Font License).
- `assets/vendor/three.module.min.js`: Three.js r169 (MIT licence), used by the 3D hero.
- `DESIGN.md`: the design system reference.
- `CASE-STUDY.md`: audit, information architecture, design direction and decisions.
- `PRODUCT.md`: product context.

## Notes
- Fully self-contained: no external requests are needed to render the site, so it works offline.
- The only outside links are real destinations: the clinic's prescription and registration forms, its privacy statement, and Google Maps.
- The clinic photos are 896px wide; supply higher-resolution originals for production.
- Clinician profiles and testimonials are marked placeholders.
- Set `bookingUrl` in `assets/js/config.js` to the clinic's online booking link.
