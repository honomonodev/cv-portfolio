'use client';

import PageContainer from '../../../components/layout/PageContainer';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Workspaces - Sistaimu',
  description: 'Organize your life projects and tasks in dedicated workspaces.',
};

export default function WorkspacesPage() {
  const t = useTranslations('workspace');

  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="text-6xl">✨</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
          {t('status')}
        </h1>
        <p className="max-w-md text-gray-600 dark:text-gray-400 text-lg">
          {t('message')}
        </p>
      </div>
    </PageContainer>
  );
}
