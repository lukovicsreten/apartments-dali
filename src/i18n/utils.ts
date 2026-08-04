import { ui, type UiKey } from './ui';
import { DEFAULT_LOCALE, isLocale, type Locale } from './locales';

export function getLangFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale && isLocale(maybeLocale)) return maybeLocale;
  return DEFAULT_LOCALE;
}

export function useTranslations(locale: Locale) {
  return function t(key: UiKey): string {
    return ui[locale][key] ?? ui[DEFAULT_LOCALE][key] ?? key;
  };
}

/** Builds a path like /en/apartments/studio-1/ — segments are joined and locale-prefixed. */
export function localePath(locale: Locale, ...segments: string[]): string {
  const clean = segments
    .filter(Boolean)
    .map((s) => s.replace(/^\/+|\/+$/g, ''))
    .join('/');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

/** Swaps the locale segment of a pathname while keeping the rest of the path intact. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isLocale(parts[0])) {
    parts[0] = target;
  } else {
    parts.unshift(target);
  }
  return `/${parts.join('/')}/`;
}
