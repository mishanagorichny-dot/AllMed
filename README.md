# AllMed Clinic: redesign concept

A UI/UX case study prototype: a homepage and a Women's Health service page, built with static HTML, CSS and JavaScript. There is no framework and no build step.

**Pages**
- `/`: the homepage (liquid-glass hero with a rotating 3D head and brain)
- `/services/womens-health`: the service page template

## Run locally

    python3 -m http.server 4173

Then open http://localhost:4173. A server is required because ES modules don't load from `file://`.

## Deploy: GitHub → Vercel

### 1. Put it on GitHub

**Option A, in the browser (no Git needed)**
1. Go to github.com and choose **New repository**. Name it (e.g. `allmed-clinic-redesign`), keep it Public or Private, and don't add a README.
2. On the empty repo page, click **uploading an existing file**.
3. Drag in **everything inside this folder**, not the folder itself. That includes the hidden files `.gitignore` and `vercel.json`: press `Cmd+Shift+.` in Finder to show them.
4. Click **Commit changes**.

**Option B, with Git in Terminal**

    cd allmed-clinic-redesign
    git init
    git add .
    git commit -m "AllMed Clinic redesign prototype"
    git branch -M main
    git remote add origin https://github.com/<your-username>/allmed-clinic-redesign.git
    git push -u origin main

### 2. Deploy on Vercel
1. Go to vercel.com, sign in with GitHub, and choose **Add New… → Project**.
2. **Import** the `allmed-clinic-redesign` repository.
3. Set the Framework Preset to **Other**. Leave Build Command and Output Directory **empty**, and leave Root Directory as `./`.
4. Click **Deploy**. You get a link like `https://allmed-clinic-redesign.vercel.app`.

Every later push to `main` redeploys automatically. `vercel.json` gives clean URLs (no `.html`) and long-term caching for fonts, images and Three.js.

## Project structure

    index.html                    Homepage
    services/womens-health.html   Service page template
    assets/css/main.css           Stylesheet entry (cascade layers: tokens → base → components → pages)
    assets/css/tokens.css         Design tokens: colour, type, space, radius, motion
    assets/css/fonts.css          Self-hosted font faces
    assets/css/components/        One file per component (20)
    assets/css/pages/             Page composition
    assets/js/config.js           Clinic facts: opening hours, booking URL
    assets/js/modules/            header, status, services, booking, form, reveal, toast, hero-3d
    assets/icons.svg              Icon sprite
    assets/img/                   Clinic photography and logo
    assets/fonts/                 Hanken Grotesk (variable, woff2)
    assets/vendor/                Three.js r169
    DESIGN.md                     Design system reference
    CASE-STUDY.md                 Audit, IA, design direction, decisions
    PRODUCT.md                    Product context

## Notes
- Fully self-contained: no external requests are needed to render.
- The only outside links are real destinations: the clinic's prescription and registration forms, its privacy statement, and Google Maps.
- Clinician profiles and testimonials are marked placeholders.
- Set `bookingUrl` in `assets/js/config.js` to the clinic's online booking link.
- The photos and logo belong to AllMed Clinic; see THIRD_PARTY_NOTICES.md.
