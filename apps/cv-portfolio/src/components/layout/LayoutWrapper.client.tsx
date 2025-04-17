'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import Tagline from './Tagline';
import { PreferencesControl } from '../ui';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define paths where we do NOT want layout components
  const excludeLayout =
    pathname.includes('/dashboard') || pathname.includes('/profile');

  return (
    <>
      {!excludeLayout && <Tagline />}
      {!excludeLayout && <Header />}

      <main>{children}</main>
      {!excludeLayout && <Footer />}
      {/* PreferencesControl is shown everywhere */}
      <PreferencesControl />
    </>
  );
}
