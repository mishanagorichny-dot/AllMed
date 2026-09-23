# AllMed Clinic: redesign case study

UI/UX concept prototype · homepage + one service page · static HTML/CSS/JS

---

## 1. The brief

Redesign allmedclinic.ie, a general practice at Royal Canal Park, Dublin 15, into a calm, modern and trustworthy experience. DocShield served as the quality benchmark, not as a template. Scope: a showcase homepage and one service page that shows how the system scales.

## 2. Audit: current site

**What exists:** a WordPress theme with a hero ("Welcome to All Med Clinic" in a script face over a stock hands photo), a grid of 8 service tiles, a contact form with a maths captcha, then the address, a map image and opening hours. Top nav: Home · Join the Practice · Services ▾ · Prescription Request · Contact.

**UX problems found**

| # | Problem | Impact |
|---|---|---|
| 1 | **No booking path.** There's no "Book" action anywhere. The phone number only appears at the very bottom. | The most important task has no entry point. |
| 2 | **Hero says nothing.** "Welcome to All Med Clinic" doesn't say what the clinic is, where it is, or what it offers. | Fails the 5-second test. |
| 3 | **Interrupting modals on arrival.** A cookie banner, a "now accepting new patients" popup in a handwritten font, and an accessibility widget all stack over the hero. | Friction and visual noise before any content, which hurts most for unwell or older visitors. |
| 4 | **Broken service links.** The Physiotherapy tile links to the PRP page, and the General Practice tile has no link. | Loss of trust, and dead ends. |
| 5 | **Thin service pages.** Each page is one paragraph followed by the same contact form. | Users leave without an answer or a next step. |
| 6 | **Hours and location buried.** The most-searched facts sit in the footer region with no "open now" signal. | Extra scrolling for the most common question. |
| 7 | **Typography.** Script display face (Bad Script) mixed with Open Sans, a weak scale and low-contrast grey body text. | Reads dated and hurts legibility. |
| 8 | **No trust layer.** No clinicians, no explanation of data protection on the homepage, no reviews. | Weak credibility for a healthcare provider. |
| 9 | **Mobile.** Desktop layout stacks, the phone number sits at the bottom, and there are no quick actions. | Hard to call or book on a phone. |

## 3. Benchmark: what DocShield does well (principles, not components)

- **One idea per viewport.** Large sections, a single message each, and generous vertical rhythm (~120–180px section padding).
- **Confident type, light weight.** Very large headlines in a regular/light grotesk, not heavy bold. Hierarchy comes from scale, not decoration.
- **Restraint.** A near-monochrome palette with one accent, pill buttons, and few cards.
- **Persistent primary action.** A floating inset header keeps "Get a quote" one click away at all times.
- **Answer objections late.** Proof → how it works → FAQ → final CTA, in that order.

**Translated for a clinic:** the "quote" becomes *Book / Call / Find us*. The proof is facts (hours, location, services, data protection), not marketing numbers. The accordion answers practical patient questions.

## 4. Information architecture

**Before:** Home · Join · Services (9, flat) · Prescription · Contact

**After:** Services · Our team · For patients · Visit us, with Call and Book always in the header. On phones, a persistent **Call · Directions · Book** bar.

Homepage flow, each step answering one visitor question:

1. **Hero:** what is this, where, how do I book? A full-viewport composition with liquid-glass UI and a slowly rotating 3D head and brain in canal tones. Live facts sit in a glass stats panel (Open now · 9 services · Dublin 15).
2. **What do you need today?** Book · Repeat prescription · Join the practice · Hours & directions.
3. **Services under one roof:** 9 services grouped into 4 needs (Everyday care, Women & family, Recovery & support, Skin & aesthetics).
4. **Why AllMed:** four facts backed by existing content.
5. **Team:** a placeholder structure for real clinicians.
6. **Booking takes a minute:** a three-step journey plus the new-patient registration callout.
7. **Testimonial:** a placeholder for verified reviews.
8. **Good to know:** FAQ built from existing policy text (prescriptions 48/72h, registration, sick certs, data).
9. **Visit:** address, live hours with today highlighted, map, and a message form.
10. **Closing CTA** and footer.

## 5. Design direction: "Royal Canal daylight"

The clinic sits on the Royal Canal. The world takes its cue from that setting: cool stone neutrals (daylight on limestone, deliberately *not* cream), one deep canal-teal accent evolved from AllMed's existing #09819C, water-green tints, and calm, wide sections.

- **Type:** Hanken Grotesk, light at display sizes (DocShield's confidence) and 17px body minimum for an older audience.
- **Signature pattern:** the *service index*. Instead of a grid of identical cards, services read as a quiet grouped list. On desktop, hovering or focusing a row swaps a sticky preview (photo, full description, Book). On phones, rows expand in place. The full service copy lives on the homepage, one click earlier than before.
- **Live status:** "Open now · until 19:00" is computed in Europe/Dublin time and repeated in the hero card, visit section, CTA and mobile menu.
- **Restraint:** one deep-teal field on the page (the closing CTA), 1px hairlines instead of boxes, one image radius, pill buttons.

### Hero iteration: liquid glass + 3D
The second hero iteration takes the composition, liquid-glass UI and rotating head-and-brain concept from a reference prompt. It re-renders all of them in AllMed's own system:
- The glass is a *daylight* film with a canal-tinted edge, not dark-video glass.
- The brain uses canal-500 → canal-200 tones read from the CSS tokens.
- Behind the model sits the existing water-light halo on stone.
- The stats are real facts (live opening status, 9 services, Dublin 15) instead of invented metrics.
- The badge uses the clinic's own photography instead of stock faces.
- The primary CTA stays the filled canal button for conversion. Glass is used only on secondary actions.

Cost: the vendored Three.js (~160 KB gzipped) loads after first paint and is skipped under Save-Data. Without WebGL, the halo is the fallback.

## 6. Accessibility

- Semantic landmarks, skip link, one H1 per page, logical heading order.
- Colour contrast on the page background: body 15.3:1, secondary 8.7:1, subtle 6.2:1; white on the teal button 8.1:1. All pass AA, most pass AAA.
- Visible focus rings; keyboard support for the service index (arrow keys), native `<details>` FAQ and Esc to close the menu.
- Targets ≥44px for primary controls; form fields at 17px, which prevents iOS zoom.
- Forms: visible labels, inline errors that say how to fix them, and focus moves to the first error. An emergency-number note appears on the message form.
- `prefers-reduced-motion` disables the reveal, hero entrance, 3D rotation (a static three-quarter view is shown instead), ring rotation, status pulse and water-light shimmer. The 3D canvas is `aria-hidden` and decorative.
- No pop-ups on arrival. New-patient news moves into the hero as an inline link.

## 7. Content integrity

All service copy, hours, address, phone, prescription and registration rules come from the live site. **Nothing clinical was invented.** Blood monitoring and sick certificates appear only in the FAQ, because the live site mentions them (on the prescription page and in the privacy statement).

**Placeholders the practice must supply:** clinician names, photos and profiles; verified patient reviews; the online booking provider URL (`assets/js/config.js → bookingUrl`); and higher-resolution photography (current images are 896px wide).

## 8. Build notes

```
index.html                      Homepage
services/womens-health.html     Service page template
assets/css/main.css             Entry: @layer tokens, base, components, pages
assets/css/tokens.css           Primitive → semantic design tokens
assets/css/base.css             Reset, type system, layout primitives
assets/css/components/*.css     One file per component (20, incl. liquid-glass)
assets/css/pages/*.css          Page composition only
assets/js/config.js             Clinic facts: hours, booking URL
assets/js/modules/*.js          header, status, services, booking, form, reveal, toast, hero-3d
assets/icons.svg                1.5px-stroke icon sprite
assets/img/, assets/fonts/, assets/vendor/   Self-hosted photos, font and Three.js, so the site works offline
```

Run locally with `python3 -m http.server`, since ES modules need http, not `file://`.
