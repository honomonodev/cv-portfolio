// src/components/layout/Tagline.tsx

'use client';

import { useTranslations } from 'next-intl';

export default function Tagline() {
  const t = useTranslations('tagline');
  return (
    <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-2 bg-gray-100 dark:bg-gray-800/70 backdrop-blur-sm transition">
      <p>{t('text')}</p>
    </div>
  );
}
