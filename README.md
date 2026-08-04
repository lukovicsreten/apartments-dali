# Apartments Dali

Multilingual (Serbian / English / German) marketing website for **Apartments Dali** — 6 holiday
apartments and studios. Built with [Astro](https://astro.build) as a fully static site for
maximum load speed: no client-side framework, optimized WebP images with responsive `srcset`,
and only a few KB of hand-written vanilla JS (mobile nav, lightbox gallery, WhatsApp contact form).

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:4321/` (it redirects to `/sr/`, the default locale).

```bash
npm run build    # outputs the static site to dist/
npm run preview  # serve the production build locally
```

## Project structure

- `src/pages/[locale]/` — file-based routes shared across `sr`, `en`, `de` via `getStaticPaths()`.
  - `index.astro` — homepage (hero, intro, apartment grid, map, contact CTA)
  - `apartments/index.astro` — full apartments listing
  - `apartments/[slug].astro` — single apartment page (gallery, amenities, booking card)
  - `contact.astro` — phone/WhatsApp/map + a WhatsApp-based inquiry "form" (no backend)
- `src/data/apartments.ts` — all 6 apartments: name/description per locale, capacity, size,
  views, and amenities grouped by category (kitchen / bathroom / general / safety).
- `src/data/features.ts` — the shared amenity + view dictionary (icon + sr/en/de label) that
  apartment entries reference by key, so wording stays consistent across units.
- `src/data/site.ts` — phone number, WhatsApp link, Google Maps coordinates/embed URL.
- `src/i18n/` — locale list, UI string dictionary (`ui.ts`), and routing helpers (`utils.ts`).
- `src/components/Gallery.astro` — thumbnail grid + lightbox (swipe, arrow keys, Esc) with zero
  extra dependencies.
- `src/components/Icon.astro` — small hand-drawn line-icon set (no icon font/library).
- `src/assets/apartments/<slug>/NN.ext` — source photos, organized by `scripts/organize-images.mjs`
  from the original `slike/` folders. Astro's build pipeline generates optimized, responsive WebP
  renditions from these automatically — nothing in `src/assets` is served as-is.

## Before deploying

- **Domain**: `astro.config.mjs` sets `site: 'https://apartmentsdali.com'` as a placeholder,
  used to build canonical URLs, hreflang tags, the sitemap and OG image URLs. Update it (and
  `public/robots.txt`'s `Sitemap:` line) to the real domain before going live.
- **Contact info**: phone number and Google Maps coordinates live in `src/data/site.ts`.
- **Content**: apartment names/descriptions/amenities are professionally translated SR/EN/DE in
  `src/data/apartments.ts` — tweak wording there if needed.
