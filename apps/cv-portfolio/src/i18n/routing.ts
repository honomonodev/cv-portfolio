import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ja', 'en', 'es', 'ca', 'ru'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
