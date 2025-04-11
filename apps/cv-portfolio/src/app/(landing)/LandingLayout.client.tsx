'use client';

import '@/styles/global.css';

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import SkipNavLink from '../../components/layout/SkipNavLink';
import PreferencesControl from '../../components/ui/PreferencesControl';
import { AccessibilityProvider } from '../../context/AccessibilityContext';
import Tagline from '../../components/layout/Tagline';
import { useIsScrollable } from '@/hooks/useIsScrollable';

export function LandingLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const isScrollable = useIsScrollable();

  return (
    <AccessibilityProvider>
      {/* ✅ Solid base background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-900" />

      {/* ✅ Visual fade effect only if scrollable */}
      {isScrollable && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="block dark:hidden h-full w-full bg-gradient-to-b from-black/10 to-transparent" />
          <div className="hidden dark:block h-full w-full bg-gradient-to-b from-gray-900/40 to-transparent" />
        </div>
      )}

      {/* ✅ Optional: Scroll fade at top */}
      {isScrollable && (
        <div className="fixed top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 dark:from-gray-900/60 to-transparent z-10 pointer-events-none" />
      )}

      <SkipNavLink />
      <PreferencesControl />

      <Tagline />
      <Header />
      <main id="main" role="main" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </AccessibilityProvider>
  );
}
