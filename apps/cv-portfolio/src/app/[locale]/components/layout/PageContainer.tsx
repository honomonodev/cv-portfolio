'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function PageContainer({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const t = useTranslations('pageContainer');

  // Show "Back to Dashboard" if not already on dashboard
  const showBackToDashboard = pathname !== '/dashboard';

  return (
    <section className="max-w-7xl mx-auto space-y-8 px-6 py-8 text-gray-700 dark:text-gray-300">
      {showBackToDashboard && (
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          {t('backToDashboard')}
        </Link>
      )}
      {children}
    </section>
  );
}
