'use client';

import { ReactNode } from 'react';
import { AccessibilityProvider } from '@/context';
import SkipNavLink from '@/components/layout/SkipNavLink';
import PreferencesControl from '@/components/ui/PreferencesControl';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <AccessibilityProvider>
      <SkipNavLink />
      <PreferencesControl />
      <DashboardHeader />
      <main
        id="main"
        role="main"
        className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      >
        {children}
      </main>
    </AccessibilityProvider>
  );
}
