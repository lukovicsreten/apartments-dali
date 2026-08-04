// Eagerly imports every organized apartment photo so Astro's build pipeline can
// generate optimized, responsive WebP renditions for each one.
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/apartments/*/*.{png,jpg,jpeg}',
  { eager: true }
);

export function getApartmentImages(slug: string): ImageMetadata[] {
  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/apartments/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}
