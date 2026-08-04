export const LOCALES = ['sr', 'en', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'sr';

export const LOCALE_LABELS: Record<Locale, string> = {
  sr: 'SR',
  en: 'EN',
  de: 'DE',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  sr: 'Srpski',
  en: 'English',
  de: 'Deutsch',
};

// BCP-47 tags used in <html lang>, hreflang and Open Graph locale meta.
export const LOCALE_HTML: Record<Locale, string> = {
  sr: 'sr-RS',
  en: 'en-US',
  de: 'de-DE',
};

export const LOCALE_OG: Record<Locale, string> = {
  sr: 'sr_RS',
  en: 'en_US',
  de: 'de_DE',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
