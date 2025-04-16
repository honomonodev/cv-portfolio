'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer
      role="contentinfo"
      className="text-center text-sm text-gray-400 py-8"
    >
      <p>{t('text').replace('2025', new Date().getFullYear().toString())}</p>
    </footer>
  );
}
