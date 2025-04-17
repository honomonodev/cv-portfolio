'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 dark:border-gray-700">
      <p>
        &copy; {new Date().getFullYear()} {t('text')}
      </p>
    </footer>
  );
}
