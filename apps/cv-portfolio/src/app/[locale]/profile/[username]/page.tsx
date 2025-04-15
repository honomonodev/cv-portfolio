import { getTranslations } from 'next-intl/server';
import { Profile } from 'apps/cv-portfolio/src/types/profile';
import profileData from '@/data/profile.json';
import ProfileClient from './ProfileClient';

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const t = await getTranslations('profile');
  const profile = (profileData as Profile[]).find(
    p => p.username === params.username
  );

  return <ProfileClient profile={profile} tNotFound={t('notFound')} />;
}
