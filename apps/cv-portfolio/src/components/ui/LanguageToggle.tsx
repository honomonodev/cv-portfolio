'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTransition, useEffect, useState } from 'react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'ca', label: 'CA' },
  { code: 'ru', label: 'RU' },
  { code: 'ja', label: '日本語' },
];

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const currentLocale = pathname.split('/')[1] || 'en';
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedLocale(currentLocale);
  }, [currentLocale]);

  const handleChange = (newLocale: string) => {
    setSelectedLocale(newLocale);
    setIsOpen(false);

    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
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
          value={selectedLocale}
          className="
            bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600
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

      {/* Mobile Icon Dropdown */}
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
            className="
              absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600
              rounded-md shadow-lg z-50
            "
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
