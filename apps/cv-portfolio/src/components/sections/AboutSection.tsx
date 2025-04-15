'use client';

import {
  AcademicCapIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import CallToAction from '../ui/CallToAction';

const iconMap = [
  RocketLaunchIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  ClockIcon,
];

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-20 px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 scroll-mt-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          {t('sectionTitle')}
        </h2>
        <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
          {t('description1')}
        </p>
        <p className="mt-4 text-md italic text-gray-600 dark:text-gray-400">
          {t('quote')}
        </p>
        <p className="mt-1 text-sm font-semibold text-gray-500 dark:text-gray-400">
          {t('author')}
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {t
          .raw('features')
          .map(
            (
              feature: { title: string; description: string },
              index: number
            ) => {
              const Icon = iconMap[index];
              const colors = [
                'text-blue-500',
                'text-green-500',
                'text-yellow-500',
                'text-purple-500',
                'text-pink-500',
                'text-indigo-500',
              ];
              return (
                <div
                  key={feature.title}
                  className="
                  flex flex-col items-center text-center gap-4 p-6
                  rounded-lg bg-white dark:bg-gray-800 shadow-md
                  hover:scale-[1.02] transition-transform duration-300 ease-out
                "
                >
                  <Icon
                    className={`h-6 w-6 sm:h-6 sm:w-6 md:h-8 md:w-8 ${colors[index]}`}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            }
          )}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <CallToAction
          label={t('cta1')}
          href="/profile/roma"
          variant="primary"
        />
        <CallToAction label={t('cta2')} href="/dashboard" variant="secondary" />
      </div>
    </section>
  );
}
