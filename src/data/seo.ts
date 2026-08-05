import type { Locale } from '../i18n/locales';
import type { Apartment } from './apartments';

export interface PageMeta {
  title: string;
  description: string;
}

// NOTE: titles below intentionally omit the "Apartments Dali" brand name — Seo.astro
// appends " | Apartments Dali" to every title automatically, so including it here would
// duplicate it (the exact "Apartments Dali | Apartments Dali" bug this file fixes).

/** Unique, keyword-rich <title>/meta-description pairs for every non-apartment page. */
export const PAGE_META: Record<'home' | 'apartmentsIndex' | 'contact', Record<Locale, PageMeta>> = {
  home: {
    sr: {
      title: 'Apartmani i studiji za odmor u Budvi',
      description:
        'Šest udobnih apartmana i studija u Budvi, uz more i Stari grad. Besplatan WiFi, klima i parking mesto. Pogledajte ponudu i rezervišite direktno.',
    },
    en: {
      title: 'Holiday Apartments & Studios in Budva, Montenegro',
      description:
        'Six comfortable holiday apartments and studios in Budva, near the Old Town and the sea. Free WiFi, air conditioning and parking. Book direct.',
    },
    de: {
      title: 'Ferienwohnungen & Studios in Budva, Montenegro',
      description:
        'Sechs komfortable Ferienwohnungen und Studios in Budva, nahe der Altstadt und dem Meer. Kostenloses WLAN, Klimaanlage und Parkplatz. Direkt buchen.',
    },
  },
  apartmentsIndex: {
    sr: {
      title: 'Svi apartmani i studiji u Budvi',
      description:
        'Pregledajte svih 6 apartmana i studija u Budvi: kapacitet, kvadratura, pogled i sadržaji. Pronađite idealan smeštaj za vaš odmor u Crnoj Gori.',
    },
    en: {
      title: 'All Apartments & Studios in Budva',
      description:
        'Browse all 6 apartments and studios in Budva: capacity, size, views and amenities. Find the right holiday accommodation for your Montenegro trip.',
    },
    de: {
      title: 'Alle Apartments & Studios in Budva',
      description:
        'Entdecken Sie alle 6 Apartments und Studios in Budva: Kapazität, Größe, Aussicht und Ausstattung. Finden Sie die passende Unterkunft in Montenegro.',
    },
  },
  contact: {
    sr: {
      title: 'Kontakt i lokacija u Budvi',
      description:
        'Kontaktirajte Apartments Dali u Budvi telefonom, WhatsApp-om ili porukom. Pronađite tačnu lokaciju na mapi i rezervišite svoj boravak već danas.',
    },
    en: {
      title: 'Contact & Location in Budva',
      description:
        'Get in touch with Apartments Dali in Budva by phone, WhatsApp or a quick message. Find our exact location on the map and book your stay today.',
    },
    de: {
      title: 'Kontakt & Lage in Budva',
      description:
        'Kontaktieren Sie Apartments Dali in Budva per Telefon, WhatsApp oder Nachricht. Finden Sie unsere genaue Lage auf der Karte und buchen Sie noch heute.',
    },
  },
};

/** Short, unique meta description per apartment — distinct from the longer on-page description. */
const APARTMENT_META: Record<string, Record<Locale, PageMeta>> = {
  'studio-with-terrace': {
    sr: {
      title: 'Studio sa Terasom, Budva',
      description:
        'Studio sa terasom u Budvi, 25m², do 4 gosta. Pogled na vrt, besplatan WiFi, klima i parking. Udoban smeštaj za odmor blizu Starog grada i mora.',
    },
    en: {
      title: 'Studio with Terrace, Budva',
      description:
        'Studio with terrace in Budva, 25m², sleeps up to 4. Garden view, free WiFi, air conditioning and parking. Comfortable stay near the Old Town and sea.',
    },
    de: {
      title: 'Studio mit Terrasse, Budva',
      description:
        'Studio mit Terrasse in Budva, 25m², bis 4 Gäste. Gartenblick, kostenloses WLAN, Klimaanlage und Parkplatz. Komfortabel nahe Altstadt und Meer.',
    },
  },
  'studio-1': {
    sr: {
      title: 'Studio 1, Budva',
      description:
        'Studio 1 u Budvi, 20m², do 3 gosta. Terasa sa pogledom na planinu, besplatan WiFi, klima i parking mesto. Miran smeštaj za dvoje ili malu porodicu.',
    },
    en: {
      title: 'Studio 1, Budva',
      description:
        'Studio 1 in Budva, 20m², sleeps up to 3. Terrace with mountain views, free WiFi, air conditioning and parking. Quiet stay for couples or small families.',
    },
    de: {
      title: 'Studio 1, Budva',
      description:
        'Studio 1 in Budva, 20m², bis 3 Gäste. Terrasse mit Bergblick, kostenloses WLAN, Klimaanlage und Parkplatz. Ruhige Unterkunft für Paare oder Familien.',
    },
  },
  'studio-2': {
    sr: {
      title: 'Studio 2, Budva',
      description:
        'Studio 2 u Budvi, 20m², do 3 gosta. Terasa sa pogledom na vrt, tuš bez praga, besplatan WiFi i parking. Praktičan smeštaj blizu centra Budve.',
    },
    en: {
      title: 'Studio 2, Budva',
      description:
        'Studio 2 in Budva, 20m², sleeps up to 3. Terrace with garden views, walk-in shower, free WiFi and parking. Practical stay close to central Budva.',
    },
    de: {
      title: 'Studio 2, Budva',
      description:
        'Studio 2 in Budva, 20m², bis 3 Gäste. Terrasse mit Gartenblick, ebenerdige Dusche, kostenloses WLAN und Parkplatz. Praktisch nahe dem Zentrum Budvas.',
    },
  },
  'ground-floor-apartment': {
    sr: {
      title: 'Apartman u Prizemlju, Budva',
      description:
        'Apartman u prizemlju u Budvi, 40m², do 5 gostiju. Sopstveni ulaz na mirnu ulicu, besplatan WiFi, klima i parking. Udobno za porodice i grupe.',
    },
    en: {
      title: 'Ground Floor Apartment, Budva',
      description:
        'Ground floor apartment in Budva, 40m², sleeps up to 5. Private entrance on a quiet street, free WiFi, air conditioning and parking. Great for families.',
    },
    de: {
      title: 'Apartment im Erdgeschoss, Budva',
      description:
        'Erdgeschoss-Apartment in Budva, 40m², bis 5 Gäste. Privater Eingang zu ruhiger Straße, kostenloses WLAN, Klimaanlage und Parkplatz. Ideal für Familien.',
    },
  },
  'garden-view-apartment': {
    sr: {
      title: 'Apartman sa Pogledom na Vrt, Budva',
      description:
        'Prostran, pristupačan apartman u Budvi, 50m², do 5 gostiju. Pogled na vrt, sopstveni ulaz, besplatan WiFi i parking. Prilagođeno osobama sa invaliditetom.',
    },
    en: {
      title: 'Garden View Apartment, Budva',
      description:
        'Spacious, fully accessible apartment in Budva, 50m², sleeps up to 5. Garden views, private entrance, free WiFi and parking. Wheelchair accessible.',
    },
    de: {
      title: 'Apartment mit Gartenblick, Budva',
      description:
        'Geräumiges, barrierefreies Apartment in Budva, 50m², bis 5 Gäste. Gartenblick, privater Eingang, kostenloses WLAN und Parkplatz. Rollstuhlgerecht.',
    },
  },
  'one-bedroom-apartment': {
    sr: {
      title: 'Apartman sa 1 Spavaćom Sobom, Budva',
      description:
        'Apartman sa 1 spavaćom sobom u Budvi, 33m², do 4 gosta. Pristupačno kupatilo, pogled na vrt i planinu, besplatan WiFi i parking. Idealno za porodice.',
    },
    en: {
      title: 'One-Bedroom Apartment, Budva',
      description:
        'One-bedroom apartment in Budva, 33m², sleeps up to 4. Accessible bathroom, garden and mountain views, free WiFi and parking. Ideal for families.',
    },
    de: {
      title: 'Apartment mit einem Schlafzimmer, Budva',
      description:
        'Apartment mit 1 Schlafzimmer in Budva, 33m², bis 4 Gäste. Barrierefreies Bad, Garten- und Bergblick, kostenloses WLAN und Parkplatz. Ideal für Familien.',
    },
  },
};

export function apartmentMeta(apartment: Apartment, locale: Locale): PageMeta {
  return APARTMENT_META[apartment.slug]?.[locale] ?? {
    title: apartment.name[locale],
    description: apartment.description[locale].slice(0, 157) + '…',
  };
}
