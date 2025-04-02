import '../styles/global.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SkipNavLink from '../components/layout/SkipNavLink';
import AccessibilityToggle from '../components/ui/AccessibilityToggle';
import { AccessibilityProvider } from '../context/AccessibilityContext';

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
          <AccessibilityToggle />
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
