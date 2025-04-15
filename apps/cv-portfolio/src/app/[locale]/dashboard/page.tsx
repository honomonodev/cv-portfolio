'use client';

import Link from 'next/link';
import PageContainer from '../../components/layout/PageContainer';
import { useTranslations } from 'next-intl';

export default function DashboardPage() {
  const t = useTranslations('dashboard');

  return (
    <PageContainer>
      <header>
        <h1 className="text-3xl font-bold mb-2">{t('title')}</h1>
        <p className="text-gray-700 dark:text-gray-300">{t('description')}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Workspaces Card */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6 text-center text-gray-500 dark:text-gray-400 space-y-4">
          <div>
            <p>{t('workspacesEmpty')}</p>
            <p className="mt-2 text-sm">{t('workspacesDescription')}</p>
          </div>
          <Link
            href="/dashboard/workspaces"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {t('createWorkspace')}
          </Link>
        </div>

        {/* Timeline Card */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6 text-center text-gray-500 dark:text-gray-400">
          <p>{t('timelineEmpty')}</p>
          <p className="mt-2 text-sm">{t('timelineDescription')}</p>
        </div>
      </div>
    </PageContainer>
  );
}
