import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ja', 'es', 'ca', 'ru'],
  defaultLocale: 'en',
  localeDetection: true,
});

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
