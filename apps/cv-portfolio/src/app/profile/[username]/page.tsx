import { Profile } from 'apps/cv-portfolio/src/types/profile';
import profileData from '@/data/profile.json';

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  const profile = (profileData as Profile[]).find(p => p.username === username);

  if (!profile) {
    return <div>Profile not found.</div>;
  }

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold">{profile.name}</h1>
      <p className="text-lg text-gray-600">{profile.position}</p>
      <p className="mt-2 text-gray-500">{profile.bio}</p>
    </div>
  );
}
