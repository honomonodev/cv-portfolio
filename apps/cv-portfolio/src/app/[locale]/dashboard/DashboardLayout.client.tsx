'use client';

import { DashboardHeader } from '@/components/dashboard';
import SkipNavLink from '@/components/layout/SkipNavLink';
import { PreferencesControl } from '@/components/ui';
import { AccessibilityProvider } from '@/context';
import { ReactNode, useEffect } from 'react';

export default function DashboardLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const applyBackgroundClass = () => {
      document.body.classList.add('bg-red');
    };

    applyBackgroundClass();

    return () => {
      document.body.classList.remove('bg-red');
    };
  }, []);

  return (
    <AccessibilityProvider>
      <SkipNavLink />
      <PreferencesControl />
      <DashboardHeader />
      <main
        id="main"
        role="main"
        className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 text-gray-900 dark:text-white"
      >
        {children}
      </main>
    </AccessibilityProvider>
  );
}
