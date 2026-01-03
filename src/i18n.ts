import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
// add more locales as needed like spanish 'es'
export type TLocale = 'es';
// Can be imported from a shared config
export const locales = ['es'] as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as TLocale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});