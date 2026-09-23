---
name: AllMed Clinic
description: A calm, daylit GP practice on the Royal Canal, where the next action is always one tap away.
colors:
  canal-50: "#e8f2ef"
  canal-100: "#d7e9e3"
  canal-200: "#b6d6cc"
  canal-500: "#1b7f7c"
  canal-600: "#126b6b"
  canal-700: "#0d5959"
  canal-800: "#0a4646"
  canal-900: "#0a3334"
  stone-0: "#ffffff"
  stone-50: "#f5f7f5"
  stone-100: "#edf1ee"
  stone-200: "#dfe5e1"
  stone-300: "#c7d0cb"
  stone-500: "#7d8a85"
  ink-900: "#102221"
  ink-700: "#384a47"
  ink-600: "#4e605c"
  on-field: "#eef6f3"
  on-field-muted: "#b9d3cc"
  focus-teal: "#0f7c86"
  open-green: "#1f7a4d"
  danger-red: "#b3261e"
  danger-soft: "#fbeeed"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 1.35rem + 5vw, 5.5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.038em"
  headline-lg:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.7rem + 3.4vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.45rem + 2.3vw, 3.4rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title-lg:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)"
    fontWeight: 420
    lineHeight: 1.14
    letterSpacing: "-0.022em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 520
    lineHeight: 1.14
    letterSpacing: "-0.014em"
  lead:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)"
    fontWeight: 380
    lineHeight: 1.5
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 380
    lineHeight: 1.6
    letterSpacing: "-0.003em"
    fontFeature: "\"ss01\", \"cv11\""
  small:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 380
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 520
    lineHeight: 1.3
    letterSpacing: "0.01em"
  caption:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 380
    lineHeight: 1.45
rounded:
  sm: "10px"
  md: "16px"
  lg: "24px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  "20": "80px"
  "24": "96px"
  section-y: "clamp(4.5rem, 2.6rem + 7.5vw, 9.5rem)"
  gutter: "clamp(1rem, 0.4rem + 2.8vw, 2.5rem)"
  container: "80rem"
  measure: "38rem"
components:
  button-primary:
    backgroundColor: "{colors.canal-700}"
    textColor: "{colors.stone-0}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.canal-800}"
    textColor: "{colors.stone-0}"
  button-primary-lg:
    backgroundColor: "{colors.canal-700}"
    textColor: "{colors.stone-0}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.stone-0}"
    textColor: "{colors.ink-900}"
  button-light:
    backgroundColor: "{colors.on-field}"
    textColor: "{colors.canal-900}"
    rounded: "{rounded.pill}"
    height: "48px"
  button-on-field:
    backgroundColor: "transparent"
    textColor: "{colors.on-field}"
    rounded: "{rounded.pill}"
    height: "48px"
  nav-link:
    textColor: "{colors.ink-700}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "40px"
  nav-link-active:
    backgroundColor: "{colors.stone-100}"
    textColor: "{colors.ink-900}"
  input-field:
    backgroundColor: "{colors.stone-0}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "52px"
  input-field-invalid:
    backgroundColor: "{colors.danger-soft}"
    textColor: "{colors.ink-900}"
  clinic-card:
    backgroundColor: "{colors.stone-0}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.md}"
    padding: "20px"
  booking-card:
    backgroundColor: "{colors.stone-0}"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.lg}"
    padding: "24px"
  cta-band:
    backgroundColor: "{colors.canal-900}"
    textColor: "{colors.on-field}"
    rounded: "{rounded.lg}"
    padding: "clamp(2.5rem, 1.5rem + 5vw, 6rem)"
  placeholder-tag:
    backgroundColor: "{colors.stone-0}"
    textColor: "{colors.ink-700}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  toast:
    backgroundColor: "{colors.ink-900}"
    textColor: "{colors.stone-50}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
---

# Design System: AllMed Clinic

## Overview

**Creative North Star: "Royal Canal Daylight"**

The clinic is a calm, well-lit room on the canal. Cool stone neutrals carry almost every surface, and deep canal teal is the one accent, used for the primary action, icons and the single deep field that closes each page. Type is one grotesk family. It is set light and large at display sizes and settles to a readable 17px book weight for body copy. Structure comes from 1px hairlines rather than boxes. Lists, tasks, points and steps are ruled editorial rows, not card grids.

Density is generous and unhurried, because many visitors arrive on a phone while unwell. Every section offers one obvious next action (book, call, directions), and on phones a persistent bottom action bar keeps those actions one tap away. Motion is a single soft rise as content enters the viewport, plus small nudges on interactive elements. Everything static stays readable when reduced motion is on or JS is off.

The signature is the service index: a quiet grouped list of service names that drives a sticky preview panel with an image, description and actions. The second signature is a live open/closed status calculated from Dublin time. The world deliberately rejects the icon-card service grid.

**Key Characteristics:**
- Cool, slightly green stone ground (never cream), with one canal-teal accent family.
- Hanken Grotesk only. Light (300) at display and headline sizes, book weight (380) for body text, tabular numerals for hours and phone numbers.
- 1px hairlines divide content. Cards are the exception, not the default.
- Pill-shaped actions and a 10 / 16 / 24px radius ladder for fields, small cards, and imagery or large containers.
- Flat at rest. The two shadows are reserved for floating elements.
- Unverified content (clinicians, reviews) is visibly tagged as a placeholder and is never styled as real.

## Colors

The palette is daylight on limestone and canal water: cool, low-chroma neutrals with one deep teal family that evolved from AllMed's original teal (#09819C).

### Primary
- **Canal Teal** (canal-700): the accent. It fills the primary button, the open state of the service marker and FAQ icon, the map pin and the mobile action-bar Book button. It also colours accent text such as links, step numerals, the "Go" labels on tasks, clinician roles and the highlighted phrase in the hero headline. White on it measures 8.1:1, and on the stone ground it measures 7.5:1.
- **Deep Canal** (canal-800): hover state for primary buttons and links, text on soft-teal pills ("Today", "New patients" badge) at 8.4:1, and the success icon.
- **Canal Night** (canal-900): the deep field. It is used only for the closing CTA band, and it is also the text colour on the light button.
- **Canal Mid** (canal-600): large, light-weight placeholder initials on clinician portraits. It is decorative display text only.
- **Canal Mist / Wash / Reed** (canal-50 / canal-100 / canal-200): soft-teal surfaces. canal-50 fills the new-patients panel, canal-100 fills success states, pill backgrounds and the portrait glow, and canal-200 is used for text selection and the decorative quote mark.
- canal-500 is defined in the tokens but no shipped component uses it. Treat it as reserved.

### Neutral
- **Limestone** (stone-50): the page background and the ground of the header and mobile sheet.
- **Shaded Stone** (stone-100): sunken sections, the nav hover and active pill, form notes and image wells.
- **Paper White** (stone-0): raised surfaces such as the clinic card, booking card, inputs, task hover and the action bar.
- **Hairline** (stone-200): the default 1px divider between rows.
- **Strong Hairline** (stone-300): the leading rule that opens a list, plus input borders, secondary-button borders and circular markers.
- **Weathered Stone** (stone-500): hover borders on inputs and secondary buttons, and the dashed placeholder outline. At 3.3:1 it is for strokes only, never for text.
- **Canal Ink** (ink-900): primary text at 15.3:1 on the ground. It is also the toast background.
- **Muted Ink** (ink-700): secondary text, lead paragraphs and descriptions at 8.7:1.
- **Subtle Ink** (ink-600): captions, hints, breadcrumbs and group labels at 6.2:1 on the ground and 5.8:1 on sunken stone. It also colours the closed-status dot.

### On the deep field
- **Field Light** (on-field): primary text on canal-900 at 12.4:1. It also fills the light button.
- **Field Mist** (on-field-muted): secondary text on canal-900 at 8.6:1.

### Functional
- **Focus Teal** (focus-teal): the 2px focus outline everywhere (4.6:1 against the ground) and the focused-input border with a 22% ring. On the deep field the outline switches to on-field.
- **Open Green** (open-green): the open-status dot and its ring (4.9:1). On the deep field a lighter mint (#6fd3a4) is used instead.
- **Danger Red / Danger Wash** (danger-red / danger-soft): inline field errors and the invalid-field background.

### Named Rules
**The One Water Rule.** Canal teal is the only chromatic accent. Green and red appear only as status and error signals. Never add a second brand hue such as the legacy blue.

**The One Deep Field Rule.** Canal-900 fills exactly one field per page, the closing CTA band. Every other section stays on stone.

**The Ink-Not-Grey Rule.** Text greys are ink tints of the canal hue (ink-600 or darker). Stone-500 and lighter never carry text.

## Typography

**Display Font:** Hanken Grotesk (with ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Hanken Grotesk (same stack)

**Character:** A single grotesk throughout. Light, tightly tracked display sizes give the calm, airy voice, and the book weight (380) with a 17px floor keeps long clinical copy easy for older or unwell readers. Stylistic sets ss01 and cv11 are on globally. Hours, phone numbers and step numerals use tabular lining figures. The font is loaded as a variable axis (300–700), so the in-between weights 380 / 420 / 520 / 620 are intentional.

### Hierarchy
- **Display** (300, clamp 44→88px, line-height 1.02, -0.038em): the hero headline only, capped at about 12.5ch. A phrase inside it may be set in canal-700 without italics.
- **Headline Large / H1** (300, clamp 40→72px, 1.06, -0.038em): page titles on service pages, capped at about 10ch.
- **Headline / H2** (300, clamp 32→54px, 1.08, -0.03em): section headings, capped at about 15ch. Service-page body sections step down to clamp 28→42px. The "why" statement reuses this size.
- **Title Large / H3** (420, clamp 22→28px, 1.14): panel titles, the new-patients heading and the message form heading.
- **Title / H4** (520, 20px, -0.014em): names of points, steps, clinicians, related services and focus items, plus the booking-card heading.
- **Row titles** (520, 19px, -0.012em): task titles and FAQ questions (17px on phones). **Service triggers** are larger and lighter (380, clamp 20→26px, -0.02em) so the index reads as a list rather than as headings.
- **Lead** (380, clamp 18→21px, 1.5): the supporting paragraph under a heading, in ink-700.
- **Body** (380, 17px, 1.6, -0.003em): default text. Keep prose to 38rem (about 65ch). Answers and descriptions cap at 30–42rem.
- **Small** (15px, 1.55): secondary information, descriptions and card rows.
- **Label** (520, 14px, +0.01em, sentence case): field labels, service group labels, footer column heads, status and breadcrumb.
- **Caption** (13px, 1.45, ink-600): hints, legal text, image captions and pills.

### Named Rules
**The Light-at-Scale Rule.** Weight falls as size rises. Display and H1–H2 use 300, H3 uses 420 and H4 uses 520. Never set a large headline bold.

**The 17px Floor Rule.** Body text is never smaller than 17px, and inputs are 17px, which also prevents iOS zoom. Only secondary text (15px) and captions (13px) go below.

**The Sentence-Case Rule.** Labels are in sentence case with only +0.01em tracking. Nothing is set in all caps.

## Layout

- **Container:** max 80rem plus fluid gutters (clamp 16→40px) on both sides. Prose measure is 38rem.
- **Section rhythm:** vertical padding is clamp 72→152px. Tight sections use 0.6× that. Alternating surfaces (sunken stone-100, paper stone-0) separate sections instead of rules or borders.
- **Spacing:** a 4px-based scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96). Component internals mostly use 12–24px. The gaps between layout columns are fluid clamps, roughly 32→112px.
- **Asymmetric two-column grids** are used for every major composition: hero 7/5, why 5/7, visit 5/7, FAQ 4/7, service page 8/4, service index 1/1, section head 1.15/1. Headings sit on the left and the supporting copy and link sit on the right, aligned to the bottom edge.
- **Sticky companions:** on desktop, the service preview panel, the why-photo, the booking intro, the FAQ intro and the service-page booking card all stick at header height + 32px.
- **Header:** a fixed, floating, inset pill 68px tall with a 12px gap from the top. Anchors scroll with header height + 32px of padding.

### Responsive rules
- **1140px:** the header phone number collapses to its icon.
- **1024px:** tasks go from 4 columns to 2.
- **960px:** the nav and phone link hide and the menu toggle appears, opening a full-screen sheet. The service-page layout stacks with the booking card first and no longer sticky.
- **900px:** the hero, why, visit, booking, FAQ and service index stack to one column. The service preview panel is replaced by rows that expand in place. Team cards become a horizontal scroll-snap rail (cards min(78%, 20rem) wide, bleeding into the gutter). Sticky intros become static. The footer grid goes to 2 columns.
- **860px:** the section head, testimonial and CTA band stack.
- **760px:** the bottom action bar appears (Call · Directions · Book, with Book filled and wider at 1.35fr). The body gains bottom padding to clear it, header buttons hide, and the toast lifts above the bar.
- **600px:** tasks become single-line rows with icon, title and arrow, and their descriptions hide. Hero actions become full-width stacked buttons. Form rows, points, focus list and approach become one column.
- **480px:** the footer becomes one column.

## Elevation & Depth

The system is flat by default, with depth expressed through tone. Surfaces separate by stepping stone-50 → stone-100 → stone-0 and by 1px hairlines. There are only two shadows, both tinted with ink-900, and they belong to elements that float above content.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 1px 2px rgb(16 34 33 / 0.04), 0 8px 24px -8px rgb(16 34 33 / 0.12)`): only on the header pill once the page has scrolled.
- **Lift** (`box-shadow: 0 2px 4px rgb(16 34 33 / 0.04), 0 18px 40px -16px rgb(16 34 33 / 0.22)`): elements pinned over imagery or the page, namely the clinic card on the hero photo, the map label and the toast.
- **Primary hover glow** (`box-shadow: 0 10px 24px -12px rgb(10 70 70 / 0.55)`): a state response on the filled canal button only.

Backdrop blur (16px) is used only on the fixed chrome: the header pill (84–92% stone-50) and the action bar (94% stone-0).

### Named Rules
**The Flat-By-Default Rule.** Cards, panels and sections rest flat. A shadow means the element floats over something else, or it is a hover response on the primary button.

## Shapes

- **Pill (999px):** every button, nav link, header bar, action-bar button, badge, "Today" chip, placeholder tag and map label.
- **Circle:** the menu toggle (44px), step numerals (48px), service markers (36px), FAQ icons (32px), the map pin and the status dot.
- **Large (24px):** all imagery and large containers, including the hero and service photos, service preview, portraits, the map, the CTA band, the new-patients panel and the booking card.
- **Medium (16px):** smaller floating cards (clinic card, toast), the success panel, and the inline service images on phones.
- **Small (10px):** inputs, form notes, the why-photo caption plate and the related-service thumbnails.
- **Hairlines:** 1px only. stone-300 opens a list and stone-200 separates its rows. The steps "towpath" is a single 1px vertical line joining the numerals. The placeholder tag is the only dashed stroke in the system.
- **Imagery:** photographs are cropped with object-fit cover at 4:5 (hero and portraits), 5:4 (service preview), 4:3 (service hero) or 16:10 (map and mobile). The map is desaturated (saturate 0.55) until hover.

## Components

### Buttons
Soft, confident pills. There is exactly one filled canal button per action group.
- **Shape:** pill. Heights are 48px by default, 40px small and 56px large. Horizontal padding is 22 / 18 / 28px. The label is 16px at weight 520.
- **Primary:** canal-700 fill with white text. Hover changes to canal-800 and adds the soft teal glow. A trailing arrow icon moves 3px to the right on hover.
- **Secondary:** transparent with a stone-300 border and ink text. Hover gives a paper-white fill and a stone-500 border. This is the variant used for "Call".
- **Light / On-field:** these are used only on the deep field. Light has an on-field fill and canal-900 text (hover to white). On-field is an outline with a 35% on-field border (hover to full border plus a 6% wash).
- **States:** pressing scales to 0.98. Disabled is 50% opacity with no pointer events. Loading is 80% opacity. Focus is the global 2px focus-teal outline at a 3px offset.

### Links
- **Text link:** canal-700, weight 520, with a 1px underline at 35% opacity and 0.25em offset. Hover makes the underline solid, changes the colour to canal-800 and nudges the arrow 2px. A quiet variant uses ink text.
- **Footer and breadcrumb links:** muted ink with no underline at rest, and an underlined ink-900 on hover.

### Header and Navigation
- **Header:** a fixed floating pill containing the logo (40px, 34px on phones), centred nav, a phone link with a teal icon, and a small primary Book button. Hairline border at 80%, translucent blur. The Float shadow appears only after scroll.
- **Nav links:** 40px pills at 15px / 520 in ink-700. Hover and current page get a stone-100 fill and ink-900 text.
- **Mobile sheet:** a full-screen stone-50 sheet that reveals top-down with a clip-path wipe (520ms). Links are set at 28px light with hairline separators and trailing icons. Book and Call are full-width large buttons pinned to the bottom. It closes on Escape, on following a link, and when the viewport crosses 961px.
- **Action bar (phones, 760px and below):** fixed to the bottom and translucent over paper, with Call, Directions and Book as 48px pills. Book is filled canal-700 and wider. It hides while the menu sheet is open.

### Section Head
The heading sits on the left (max 15ch) and an aside on the right (lead copy plus an optional link) aligned to the bottom edge. A stacked variant uses a single column. There is no eyebrow or kicker above the heading, because the heading carries the section.

### Status and Clinic Card
- **Status:** an 8px dot and a 14px / 520 tabular label. It renders "Open now · until 19:00" or "Closed · opens … at 8:00" from Europe/Dublin time, and the static hours text remains when JS is off. When open, the dot is open-green with a 1px ring that pulses outward (2.4s). The pulse is removed under reduced motion.
- **Clinic card:** paper white, 16px radius, 20px padding, Lift shadow, with rows of teal icon and 15px text separated by hairlines. It is kept in the library for location summaries. The homepage hero no longer uses it; the hero stats panel carries live status there.

### Hero (homepage)
A full-viewport composition (min 100svh, floor 46rem). Copy sits top-left: a glass badge (four circular clinic photos plus "New patients · We're accepting applications"), the H1, a lead line, then a filled primary Book button beside a glass Call button. Live facts sit bottom-left in a glass stats panel with three stats: live status (Open now / Until 19:00), 9 services and Dublin 15. Each stat has a value at H3 size and weight 380 over a subtle label, with a small canal-600 dot-pattern glyph above.
- **Visual stage:** the right 62% on desktop. A canal-100 → canal-50 radial "water-light" halo carries two stone-300 hairline ripples, one solid and one dashed. The dashed ripple turns once every 120s.
- **3D head + brain** (`assets/js/modules/hero-3d.js`, Three.js r169 loaded lazily from jsDelivr after first paint):
  - **Head:** a canal-700 dot-matrix point cloud. Points facing the viewer are brighter, and the neck dissolves downward. A canal-500 fresnel glass shell surrounds it, and a canal-500 scan band travels up the head roughly every 14 seconds.
  - **Brain:** two folded hemispheres and a cerebellum, shaded from canal-500 in the sulci to canal-200 on the gyri, under white key light and a canal-200 rim light.
  - **Motion:** the model rotates at 0.16 rad/s, with a slight pointer parallax (fine pointers only) and a breathing drift.
  - **Colours:** read from the CSS tokens at runtime, so the model can never drift from the palette.
  - **Lifecycle:** rendering pauses offscreen and in hidden tabs. With reduced motion it shows a static three-quarter view. It is skipped entirely without WebGL or with Save-Data, leaving the halo.
- **Phones (≤900px):** copy, then the stage (min(110vw, 30rem) tall), then the stats panel overlapping the stage's lower edge.
- **Header in hero mode:** until the page scrolls, the header bar dissolves. The logo and actions float free, and the nav becomes its own glass pill. Once scrolled, the unified floating bar returns and the pill's glass drops away.

### Liquid Glass (daylight)
`.liquid-glass`: a near-clear paper film (surface at 34%), luminosity blend, 14px backdrop blur with 1.35 saturation, an inset 1px paper highlight and a soft low shadow. The edge is a 1.4px gradient border drawn with the mask-composite exclude technique. It runs from bright paper at the top, clears through the middle, and ends in canal-200 at the bottom, so the edge still reads on the light stone ground. On hover, interactive glass fills to 62% paper. It is used only in the hero: nav pill, menu button, badge, Call button and stats panel. Where backdrop-filter isn't supported it falls back to 85% paper. It is not a general card surface.

### Menu Button
A 44px circle. The menu and close icons swap in place with rotate(±90°), scale(0→1) and opacity over 300ms.

### Patient Tasks
A four-up ruled row, not a card grid. It has a stone-300 top rule, stone-200 bottom rule and vertical hairlines between tasks. Each task shows a 24px teal icon, a 19px title, a 15px description and a teal "Go" label with an arrow. Hover fills the task with paper white and nudges the arrow. Below 600px each task becomes a single-line row.

### Service Index (signature)
- **List:** services grouped under sentence-case labels in subtle ink. Each row is a borderless button (20→26px, weight 380, ink-700) with a 36px circular marker on the right, separated by hairlines.
- **Active row:** the text turns ink-900 and the name slides 12px to the right. The marker fills with canal and its icon turns white.
- **Preview panel (desktop, 901px and up):** sticky. It shows a 5:4 image with a 24px radius, then the H3, description and actions. It responds to click, to hovering with the pointer, and to arrow-key navigation. The image cross-fades (420ms) with a slight 1.03 scale, and the text body fades and rises 6px. The selection syncs with the URL hash.
- **Phones:** the panel is removed and each row expands in place using a grid-row transition to show a 16:10 image and copy.

### Points and Approach
Ruled editorial entries in two columns (three for approach). Each has a stone-300 top rule, a 24px teal icon, a 20px / 520 title and 15px muted copy. There is no card chrome.

### Team Card (placeholder content)
A 4:5 portrait well with a 24px radius, filled with a soft canal-100 radial glow over sunken stone. It shows large light canal-600 initials until real photos exist. Below it are the name (H4), the role (canal-700, 15px / 520) and meta text (subtle). **Clinician names, photos and profiles are deliberate placeholders.** Every card carries a placeholder tag, and a "Content needed" note sits under the row.

### Steps
A numbered sequence joined by one continuous 1px vertical line, the "towpath". Numerals sit in 48px stone-bordered circles in canal-700 tabular figures. Each step has an H4 title, muted copy (max 30rem) and an optional text link.

### Testimonial (placeholder content)
A 1:3 split with the H4 label and placeholder tag on the left. On the right is a large light quote (26→44px, 300, -0.028em) under a canal-200 quote mark, with a small muted attribution. **The quote is a deliberate placeholder** until verified reviews are supplied with permission.

### FAQ
Uses native `<details>`. The list opens with a stone-300 rule and separates items with hairlines. Questions are 19px / 520 and turn teal on hover. The 32px circular plus icon rotates 45° and fills with canal when open. The height animates through `::details-content` and interpolate-size, and the animation is off under reduced motion. Answers are muted with a 40rem cap.

### Visit, Hours and Map
- **Address** is set at lead size. The **contact list** uses lead-size tabular links with teal icons and underlines on hover.
- **Hours table:** tabular figures with hairline rows and times right-aligned in muted ink. Today's row turns ink-900 at weight 620 and gains a canal-100 "Today" pill.
- **Map:** a 16:10 image with a 24px radius, desaturated at rest, that scales to 1.03 and resaturates on hover. A pill label with the Lift shadow and a circular canal pin sits at the bottom-left.

### Form
Labels always sit above fields (14px / 520), with optional caption hints. Inputs are 52px tall with a 10px radius, paper white, a stone-300 border and 17px text. Hover sets a stone-500 border. Focus sets a focus-teal border plus a 3px ring at 22%. When invalid, the border turns danger-red, the field gets a danger-soft wash, and an inline error with an icon names the fix. The form note sits on a sunken 10px plate. On success the form is replaced by a canal-100 panel with a 16px radius. Two-column rows collapse at 600px.

### CTA Band
The single deep canal-900 field, with a 24px radius and generous clamp padding. A slow "water-light" shimmer (two low-contrast teal radial gradients drifting over 18s) is removed under reduced motion. The layout puts a white H2 (max 14ch), field-mist copy, and light and on-field buttons on the left, and live status plus the hours list on the right, above a 20% on-field rule. The focus outline switches to on-field.

### Footer
Sits on the stone ground. The grid is 1.5 + 3 columns: brand and address, then Services, Patients and Contact, each headed by a 14px / 620 label. Links are 15px muted ink, and the legal strip sits in captions above a hairline.

### Breadcrumb
Label-size, subtle ink. Separators are 1px CSS chevrons at 60% opacity. The current page is ink-900 at weight 520.

### Booking Card (service pages)
Paper white with a hairline border, 24px radius and 24px padding. It sticks beside the content on desktop and moves above the content on phones. It contains an H4 heading, stacked full-width primary and secondary buttons, and a hairline-separated list of hours, address and phone with teal icons.

### Placeholder Tag
A pill with a 1px dashed stone-500 border, an 80% paper fill and a 13px / 520 muted label. It marks every piece of content the practice has to supply, and it is deliberately visible so that unverified content cannot pass as real.

### Toast
A polite live region. It is an ink-900 plate with stone-50 text, a 16px radius, the Lift shadow and a mint (#8fdcc0) icon, fixed at bottom centre (max 28rem). It rises 16px into view over 280ms, and on phones it sits above the action bar.

### Motion
- **Easing:** ease-out `cubic-bezier(0.16, 1, 0.3, 1)` for almost everything. ease-in-out `cubic-bezier(0.65, 0, 0.35, 1)` only for ambient drift.
- **Durations:** 160ms for colour and border changes, 280ms for state changes, 700ms for section reveals.
- **Reveal:** when JS is present, content marked for reveal rises 20px from 4px blur and 0 opacity. Siblings stagger by 80ms. Without JS, or with reduced motion, content is visible by default.
- **Hero:** the photo settles from 1.06 scale with a slight blur (1.6s), and the clinic card rises in 350ms later.

## Do's and Don'ts

### Do:
- **Do** keep canal-700 as the only filled action colour, and use one primary button per action group.
- **Do** separate content with 1px hairlines: stone-300 to open a list and stone-200 between rows.
- **Do** set display and H1–H2 at weight 300 with negative tracking, and keep body text at 17px / 380 or larger.
- **Do** use tabular figures for hours, phone numbers, times and step numerals.
- **Do** keep every photo on the 24px radius and every action on a pill.
- **Do** keep Book, Call and Directions reachable within one tap on every page, using the header on desktop and the action bar on phones.
- **Do** gate every animation behind prefers-reduced-motion and leave content visible without JS.
- **Do** mark any unsupplied clinician, review or credential content with the dashed placeholder tag.

### Don't:
- **Don't** present services as a grid of icon cards. Services live in the ruled index with its preview panel.
- **Don't** introduce a second accent hue, including the legacy blue (#1863DC). Green and red are status and error signals only.
- **Don't** use canal-900 for anything other than the one closing CTA field per page.
- **Don't** put shadows on resting cards or sections. Float and Lift are reserved for elements that hover over content.
- **Don't** use stone-500 or lighter for text.
- **Don't** add eyebrows, kickers or all-caps labels above headings.
- **Don't** style placeholder people, quotes or ratings as though they were real content.
