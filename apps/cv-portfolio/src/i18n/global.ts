// 🧬 i18n/global.ts
import en from '../../messages/en.json';
import formats from './request';
import { routing } from './routing';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof en;
    Formats: typeof formats;
    Locale: (typeof routing.locales)[number];
  }
}
