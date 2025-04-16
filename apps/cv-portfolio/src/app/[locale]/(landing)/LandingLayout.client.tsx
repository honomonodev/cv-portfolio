'use client';

import { useEffect } from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import SkipNavLink from '../../../components/layout/SkipNavLink';
import PreferencesControl from '../../../components/ui/PreferencesControl';
import { AccessibilityProvider } from '../../../context/AccessibilityContext';
import Tagline from '../../../components/layout/Tagline';

export default function LandingLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const checkScrollable = () => {
      const scrollable = document.body.scrollHeight > window.innerHeight;
      document.body.classList.toggle('is-scrollable', scrollable);
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);

    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  return (
    <AccessibilityProvider>
      <div className="fixed inset-0 -z-10 bg-white dark:bg-gray-900" />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="block dark:hidden h-full w-full bg-gradient-to-b from-black/10 to-transparent opacity-0 transition-opacity duration-500 is-scrollable:opacity-100" />
        <div className="hidden dark:block h-full w-full bg-gradient-to-b from-gray-900/40 to-transparent opacity-0 transition-opacity duration-500 is-scrollable:opacity-100" />
      </div>

      <div className="fixed top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 dark:from-gray-900/60 to-transparent z-10 pointer-events-none opacity-0 transition-opacity duration-500 is-scrollable:opacity-100" />

      <SkipNavLink />
      <PreferencesControl />
      <Tagline />
      <Header />

      <main id="main" role="main" className="min-h-screen">
        {children}
      </main>

      <Footer />

      <div aria-live="polite" className="sr-only">
        {/* Future dynamic announcements */}
      </div>
    </AccessibilityProvider>
  );
}
