import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = hasLocale(routing.locales, requestLocale)
    ? requestLocale
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../locales/messages/${locale}.json`)).default,
    /*messages: (await import(`@/messages/${locale}.json`)).default,*/
  };
});
