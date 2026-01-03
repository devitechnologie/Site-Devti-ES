import { TLocale } from "@/i18n";

export const getPrismicLocale = (lang: TLocale): string => {
  return 'es-es';
}

export const getNextLocale = (lang: string): TLocale => {
  return 'es';
}

// truncate text
export const truncateText = (text: string, length: number): string => {
  return text.length > length ? text.substring(0, length) + '...' : text;
}