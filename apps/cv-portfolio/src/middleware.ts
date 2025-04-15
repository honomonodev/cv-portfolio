// 🛡️ middleware.ts
import localeMiddleware from 'next-intl/middleware';
import { routing } from '../../cv-portfolio/src/i18n/routing';

export default localeMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|.*\..*).*)'],
};
