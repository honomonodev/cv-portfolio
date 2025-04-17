'use client';
import { useTranslations } from 'next-intl';

export default function DebugPage() {
  const t = useTranslations('tagline');

  return (
    <div className="p-8 text-white">
      <h1>🧪 Debug Page</h1>
      <p>
        <strong>Translated:</strong> {t('text')}
      </p>
    </div>
  );
}
