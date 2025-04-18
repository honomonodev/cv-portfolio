'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useLocale } from 'next-intl';
import { useTransition, useState } from 'react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'ca', label: 'CA' },
  { code: 'ru', label: 'RU' },
  { code: 'ja', label: '日本語' },
];

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newLocale: string) => {
    setIsOpen(false);

    startTransition(() => {
      // 1 ️⃣ break path into segments
      const parts = pathname.split('/').filter(Boolean);

      // 2 ️⃣ drop the first segment if it’s a locale
      const core = routing.locales.includes(parts[0] as any)
        ? parts.slice(1)
        : parts;

      // 3 ️⃣ rebuild the path *without* any locale
      const pathWithoutLocale = '/' + core.join('/');

      // 4 ️⃣ let next‑intl put the new locale in front
      router.push(pathWithoutLocale === '/' ? '/' : pathWithoutLocale, {
        locale: newLocale,
      });
    });
  };

  return (
    <div className="relative inline-flex items-center text-sm">
      {/* Desktop Selector */}
      <div className="hidden md:flex items-center">
        <GlobeAltIcon
          className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-300"
          aria-hidden="true"
        />
        <select
          onChange={e => handleChange(e.target.value)}
          value={locale}
          className="
            bg-transparent dark:bg-gray-800 border border-gray-300 dark:border-gray-600
            text-sm text-gray-700 dark:text-gray-200 rounded-md px-2 py-[0.25rem]
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition-all duration-150 min-w-[64px]
          "
          aria-label="Change language"
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle language menu"
        >
          <GlobeAltIcon className="w-5 h-5" aria-hidden="true" />
        </button>

        {isOpen && (
          <ul
            className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50"
            role="menu"
          >
            {languages.map(lang => (
              <li key={lang.code}>
                <button
                  onClick={() => handleChange(lang.code)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200"
                  role="menuitem"
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
