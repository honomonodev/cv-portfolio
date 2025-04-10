import '@/styles/global.css';

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import SkipNavLink from '../../components/layout/SkipNavLink';
import PreferencesControl from '../../components/ui/PreferencesControl';
import { AccessibilityProvider } from '../../context/AccessibilityContext';

export const metadata = {
  title: 'Honomono CV Portfolio',
  description: 'A11y-first frontend developer portfolio 🌿',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased">
        <AccessibilityProvider>
          <SkipNavLink />
          <PreferencesControl />
          {/* 🌿 Tagline */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 py-2 bg-gray-100 dark:bg-gray-800">
            Your time, your flow, your control.
          </div>
          <Header />
          <main id="main" role="main" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
