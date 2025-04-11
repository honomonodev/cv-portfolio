// ✅ File 4: src/app/dashboard/DashboardLayout.client.tsx (Client Component)

'use client';

import { ReactNode } from 'react';
import { AccessibilityProvider } from '@/context';
import SkipNavLink from '@/components/layout/SkipNavLink';
import PreferencesControl from '@/components/ui/PreferencesControl';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useIsScrollable } from '@/hooks/useIsScrollable';

export function DashboardLayoutClient({ children }: { children: ReactNode }) {
  const isScrollable = useIsScrollable();

  return (
    <AccessibilityProvider>
      <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-900" />

      {isScrollable && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="block dark:hidden h-full w-full bg-gradient-to-b from-black/10 to-transparent" />
          <div className="hidden dark:block h-full w-full bg-gradient-to-b from-gray-900/40 to-transparent" />
        </div>
      )}

      {isScrollable && (
        <div className="fixed top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 dark:from-gray-900/60 to-transparent z-10 pointer-events-none" />
      )}

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
