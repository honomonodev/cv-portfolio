import { getTranslations } from 'next-intl/server';
import TimelineClient from './TimelineClient';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'timeline' });

  return {
    title: 'Timeline - Sistaimu',
    description: t('message'),
  };
}

export default function Page() {
  return <TimelineClient />;
}
