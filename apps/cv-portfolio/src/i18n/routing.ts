import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'ca', 'ru', 'ja'],
  defaultLocale: 'en',
});
