import { profileData } from '@/data';
import { Profile } from '@/types/profile';

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  const profile = (profileData as Profile[]).find(p => p.username === username);

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 dark:text-gray-400 text-xl animate-fade-in">
        Profile not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-white dark:bg-gray-900 text-center space-y-4 animate-fade-in">
      {/* Name */}
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
        {profile.name}
      </h1>

      {/* Position */}
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
        {profile.position}
      </p>

      {/* Bio */}
      <p className="max-w-2xl text-md sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
        {profile.bio}
      </p>
    </div>
  );
}
