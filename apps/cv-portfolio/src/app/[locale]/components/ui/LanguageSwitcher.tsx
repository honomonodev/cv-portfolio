'use client';

import { useRouter, usePathname } from '@/i18n/navigation';

type SupportedLocale = 'en' | 'es' | 'ca' | 'ru' | 'ja';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, {
      locale: newLocale as SupportedLocale,
    });
  };

  return (
    <div className="relative inline-block">
      <select
        onChange={handleLocaleChange}
        className="block appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white py-2 pl-3 pr-8 rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
      >
        <option value="en">🇬🇧 English</option>
        <option value="es">🇪🇸 Español</option>
        <option value="ca">🏳️‍🌈 Català</option>
        <option value="ru">🇷🇺 Русский</option>
        <option value="ja">🇯🇵 日本語</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 dark:text-gray-300">
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M7 7l3-3 3 3M7 13l3 3 3-3" />
        </svg>
      </div>
    </div>
  );
}
