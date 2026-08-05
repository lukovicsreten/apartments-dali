import { getImage } from 'astro:assets';
import type { Locale } from '../i18n/locales';
import type { Apartment } from '../data/apartments';
import { FEATURES } from '../data/features';
import { SITE } from '../data/site';
import { PAGE_META, apartmentMeta } from '../data/seo';

export const BUSINESS_ID = 'apartments-dali-business';

/**
 * Reverse-geocoded from the property's Google Maps pin (42.2902518, 18.8500754) — not
 * confirmed by the client. Correct src/data/site.ts / this address if it's off.
 */
export const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: 'Babalonija 37',
  addressLocality: 'Budva',
  postalCode: '85311',
  addressCountry: 'ME',
};

const COMMON_AMENITIES = ['Free WiFi', 'Air conditioning', 'Free parking', 'Private entrance', 'Heating'];

/** Resolves up to `count` gallery photos to absolute, build-optimized JPEG URLs for JSON-LD. */
export async function resolveImageUrls(
  images: ImageMetadata[],
  site: URL,
  { width = 1200, count = 4 }: { width?: number; count?: number } = {}
): Promise<string[]> {
  const selected = images.slice(0, count);
  const resolved = await Promise.all(
    selected.map((img) => getImage({ src: img, width, format: 'jpg', quality: 75 }))
  );
  return resolved.map((r) => new URL(r.src, site).toString());
}

export function lodgingBusinessSchema({
  site,
  locale,
  images,
}: {
  site: URL;
  locale: Locale;
  images: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${site.origin}/#${BUSINESS_ID}`,
    name: SITE.name,
    description: PAGE_META.home[locale].description,
    url: site.origin + '/',
    telephone: SITE.phone,
    image: images,
    // No priceRange/offers: the site has no live pricing to report truthfully.
    address: BUSINESS_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.coords.lat,
      longitude: SITE.coords.lng,
    },
    hasMap: SITE.mapsShareUrl,
    sameAs: [SITE.mapsShareUrl],
    amenityFeature: COMMON_AMENITIES.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
  };
}

export function apartmentSchema({
  apartment,
  locale,
  images,
  url,
  site,
}: {
  apartment: Apartment;
  locale: Locale;
  images: string[];
  url: string;
  site: URL;
}) {
  const amenityKeys = [
    ...apartment.amenities.kitchen,
    ...apartment.amenities.bathroom,
    ...apartment.amenities.general,
    ...apartment.amenities.safety,
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'Apartment',
    name: apartment.name[locale],
    description: apartmentMeta(apartment, locale).description,
    url,
    image: images,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: apartment.sizeM2,
      unitCode: 'MTK',
    },
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: apartment.capacity,
    },
    numberOfRooms: apartment.bedrooms,
    numberOfBathroomsTotal: apartment.bathrooms,
    accessibilityFeature: apartment.accessible ? ['wheelchairAccessible'] : undefined,
    amenityFeature: amenityKeys.map((key) => ({
      '@type': 'LocationFeatureSpecification',
      name: FEATURES[key][locale],
      value: true,
    })),
    address: BUSINESS_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.coords.lat,
      longitude: SITE.coords.lng,
    },
    containedInPlace: { '@id': `${site.origin}/#${BUSINESS_ID}` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
