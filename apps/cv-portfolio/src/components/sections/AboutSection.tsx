'use client';

import {
  AcademicCapIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const features = [
  {
    icon: RocketLaunchIcon,
    title: 'Own Your Future',
    description:
      'Today you control your work data. Tomorrow you control your whole life stream.',
    color: 'text-blue-500',
  },
  {
    icon: AcademicCapIcon,
    title: 'Empowerment, Not Compliance',
    description:
      'You are not forced to report to the system. You are empowered to own your data — and share it when required.',
    color: 'text-green-500',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Your Data is Protected',
    description:
      'Your data is your power. Sistaimu protects it as fiercely as you protect your future.',
    color: 'text-yellow-500',
  },
  {
    icon: Cog6ToothIcon,
    title: 'Automation You Can Trust',
    description:
      'Sistaimu could automate this beautifully. No more panicking over spreadsheets before an inspection.',
    color: 'text-purple-500',
  },
  {
    icon: UserGroupIcon,
    title: 'Your Personal Growth Map',
    description:
      'When you see your life clearly, you live it fully. Sistaimu turns invisible patterns into your personal growth map.',
    color: 'text-pink-500',
  },
  {
    icon: ClockIcon,
    title: 'Your Choices Build Your Destiny',
    description:
      'Your future isn’t random. It’s built from the choices you track today. Sistaimu helps you navigate the unknown with confidence.',
    color: 'text-indigo-500',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-20 px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 scroll-mt-20"
    >
      {/* Intro Text */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          Why Sistaimu?
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

      {/* Features Grid */}
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

      {/* CTA Block */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to build your timeline?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Take control of your personal and professional journey today.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/dashboard"
            className="rounded-md bg-blue-600 px-6 py-3 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 transition"
          >
            Create Your Timeline
          </Link>
          <Link
            href="#how-it-works"
            className="rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-6 py-3 text-gray-900 dark:text-white text-sm font-semibold shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Learn How Sistaimu Works
          </Link>
        </div>
      </div>
    </section>
  );
}
