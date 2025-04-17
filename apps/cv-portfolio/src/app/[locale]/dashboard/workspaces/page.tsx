import { getTranslations } from 'next-intl/server';
import WorkspacesClient from './WorkspacesClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'workspace' });

  return {
    title: 'Workspaces - Sistaimu',
    description: t('message'),
  };
}

export default function Page() {
  return <WorkspacesClient />;
}
