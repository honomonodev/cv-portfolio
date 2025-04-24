'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import Tagline from './Tagline';
import { PreferencesControl } from '../ui';

const excludedRoutes = ['/dashboard', '/profile'];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const excludeLayout = excludedRoutes.some(route =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!excludeLayout && <Tagline />}
      {!excludeLayout && <Header />}
      <main>{children}</main>
      {!excludeLayout && <Footer />}
      <PreferencesControl />
    </>
  );
}
