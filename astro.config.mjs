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
  integrations: [sitemap()],
});
