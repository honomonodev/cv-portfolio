'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function PageContainer({
  children,
  hideBackLink = false,
}: {
  children: React.ReactNode;
  hideBackLink?: boolean;
}) {
  const t = useTranslations('pageContainer');

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      {!hideBackLink && (
        <div className="mb-4">
          <Link
            href="/dashboard"
            className="text-blue-600 hover:underline text-sm"
          >
            ← {t('backToDashboard')}
          </Link>
        </div>
      )}
      {children}
    </section>
  );
}
