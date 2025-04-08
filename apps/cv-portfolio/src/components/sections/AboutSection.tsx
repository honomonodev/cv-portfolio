'use client';

import {
  AcademicCapIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: AcademicCapIcon,
    title: 'Learning by Building',
    description:
      'Sistaimu is born from practice, not theory. We build it while using it every day.',
    color: 'text-blue-500',
  },
  {
    icon: UserGroupIcon,
    title: 'User-Centered Design',
    description:
      'Every feature exists because it helps real people, not imaginary personas.',
    color: 'text-teal-500',
  },
  {
    icon: Cog6ToothIcon,
    title: 'Enterprise-Grade Engineering',
    description:
      'Scalable, clean code with future-proof architecture from day one.',
    color: 'text-purple-500',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Real-World Impact',
    description:
      'Sistaimu is built to manage real contracts, projects, and life timelines.',
    color: 'text-pink-500',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-20 px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 scroll-mt-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          What is Sistaimu?
        </h2>
        <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
          Sistaimu is your daily timeline management tool — bridging life and
          work with clarity and control. Inspired by real needs, it serves its
          creators before it serves the world.
        </p>
        <p className="mt-4 text-md italic text-gray-600 dark:text-gray-400">
          &quot;We aren’t working for invisible goals. We are building Sistaimu
          by using Sistaimu.&quot;
        </p>
        <p className="mt-1 text-sm font-semibold text-gray-500 dark:text-gray-400">
          — Roman Kostyuchenko, Founder of Sistaimu
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map(({ icon: Icon, title, description, color }) => (
          <div
            key={title}
            className="flex items-start gap-4 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:scale-[1.02] transition-transform duration-300 ease-out"
          >
            <Icon className={`h-8 w-8 ${color}`} aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
