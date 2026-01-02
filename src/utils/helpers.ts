import { TLocale } from "@/i18n";

export const getPrismicLocale = (lang: TLocale): string => {
  return lang === 'en' ? 'en-us' : 'fr-fr';
}

export const getNextLocale = (lang: string): TLocale => {
  return lang === 'en-us' ? 'en' : 'fr';
}

// truncate text
export const truncateText = (text: string, length: number): string => {
  return text.length > length ? text.substring(0, length) + '...' : text;
}