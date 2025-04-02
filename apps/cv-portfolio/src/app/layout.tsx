import '../styles/global.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SkipNavLink from '../components/layout/SkipNavLink';

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
      <body className="antialiased text-gray-800 bg-white">
        <SkipNavLink />
        <Header />
        <main id="main" role="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
