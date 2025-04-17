'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import PageContainer from '../../../components/layout/PageContainer';

export default function DashboardPage() {
  const t = useTranslations('dashboard');

  return (
    <PageContainer hideBackLink>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          {t('description')}
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Workspaces Card */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-center bg-white dark:bg-gray-900 shadow-sm space-y-4">
          <p className="text-gray-600 dark:text-gray-400 text-base">
            {t('workspacesEmpty')}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {t('workspacesDescription')}
          </p>
          <Link
            href="/dashboard/workspaces"
            className="inline-block px-5 py-2.5 mt-4 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            {t('createWorkspace')}
          </Link>
        </div>

        {/* Timeline Card */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-center bg-white dark:bg-gray-900 shadow-sm space-y-2">
          <p className="text-gray-600 dark:text-gray-400 text-base">
            {t('timelineEmpty')}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {t('timelineDescription')}
          </p>
        </div>
      </section>
    </PageContainer>
  );
}
