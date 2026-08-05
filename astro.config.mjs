// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain before going live.
  site: 'https://apartmentsdali.com',
  trailingSlash: 'always',
  i18n: {
    locales: ['sr', 'en', 'de'],
    defaultLocale: 'sr',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  image: {
    // Larger source photos still get responsive, optimized WebP output at build time.
    responsiveStyles: true,
  },
  integrations: [
    sitemap({
      // "/" only 301-redirects to "/sr/" (see src/pages/index.astro) — excluding it
      // avoids a duplicate, confusing hreflang="sr-RS" entry alongside the real "/sr/".
      filter: (page) => new URL(page).pathname !== '/',
      i18n: {
        defaultLocale: 'sr',
        locales: {
          sr: 'sr-RS',
          en: 'en-US',
          de: 'de-DE',
        },
      },
    }),
  ],
});
