import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export type TLocale = 'en' | 'fr';
// Can be imported from a shared config
export const locales = ['en', 'fr'] as const

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as TLocale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});