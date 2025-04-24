'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function Footer() {
  const t = useTranslations('footer');
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 dark:border-gray-700">
      <p>
        &copy; {year ?? '—'} {t('text')}
      </p>
    </footer>
  );
}
