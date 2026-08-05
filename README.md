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
- **Address**: `src/lib/jsonld.ts`'s `BUSINESS_ADDRESS` (used in the LodgingBusiness/Apartment
  JSON-LD) was reverse-geocoded from the Google Maps pin, not confirmed by hand — double-check
  the street number before relying on it for local SEO.
- **Analytics**: no GA4/Search Console is wired in yet. To add GA4, drop the gtag snippet in
  `BaseLayout.astro`'s `<head>`; for Search Console, add the verification `<meta>` tag there too.

## SEO

- **Per-page metadata** (`src/components/Seo.astro`): unique `<title>`/meta description per page
  (`src/data/seo.ts` for static pages, `apartmentMeta()` for apartment pages — kept short and
  distinct from the long on-page description), canonical link, hreflang alternates (sr/en/de +
  x-default), Open Graph + Twitter Card tags with a real build-optimized image.
- **Structured data** (`src/lib/jsonld.ts`): `LodgingBusiness` JSON-LD on the homepage, `Apartment`
  + `BreadcrumbList` JSON-LD on every apartment page. No fabricated ratings or pricing — the site
  has neither, so `aggregateRating`/`offers` are simply omitted rather than invented.
- **Sitemap**: `@astrojs/sitemap` generates `sitemap-index.xml`/`sitemap-0.xml` with per-URL
  `xhtml:link` hreflang annotations (configured in `astro.config.mjs`); the redirect-only `/` route
  is excluded via a `filter` so it doesn't create a duplicate hreflang entry alongside `/sr/`.
- **Meta keywords**: intentionally not added — Google (and every major search engine) has ignored
  the `<meta name="keywords">` tag for ranking since 2009; it's dead weight with no upside.

## Performance

Already about as lean as a photo-heavy marketing site gets, with numbers to back it up
(measured on the apartment detail page, the heaviest page type):

- **Zero client-side framework** — Astro ships no React/Vue/etc. runtime.
- **~1.7KB of inline JS total** (mobile nav toggle + lightbox gallery), no external `<script src>`
  requests at all.
- **~20KB CSS** per page (base layout + page-specific), scoped per-component by Astro.
- **Zero web-font requests** — the design uses the system font stack (`Georgia`/`-apple-system`
  etc.) instead of Google Fonts or `next/font`-style self-hosting, which is strictly faster than
  either since no font file is fetched at all.
- **Full static prerendering (SSG)** — every page is built at compile time (`astro build`), the
  same end result as Next.js SSG/ISR, no server round-trip on first byte.
- **Images**: every photo goes through `astro:assets`, which generates responsive WebP `srcset`s,
  sets explicit `width`/`height` (no CLS), and lazy-loads everything below the fold — see
  original-PNG-to-optimized-WebP savings in the `npm run build` output (typically 90%+ smaller).
