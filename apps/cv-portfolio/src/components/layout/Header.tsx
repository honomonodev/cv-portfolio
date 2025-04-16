'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { useRouter, usePathname } from '@/i18n/navigation';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'ca', label: 'CA' },
  { code: 'ru', label: 'RU' },
  { code: 'ja', label: '日本語' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="header-base">
      {/* Header Base */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Side: Logo */}
        <Logo />

        {/* Middle: Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm ml-auto mr-4">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            Dashboard
          </Link>
          <Link
            href="#workspaces"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            Workspaces
          </Link>
          <Link
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            About
          </Link>
        </nav>

        {/* Right Side: Language toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <div className="relative flex items-center">
            <GlobeAltIcon
              className="w-5 h-5 mr-1 text-gray-600 dark:text-gray-300"
              aria-hidden="true"
            />
            <select
              onChange={handleChange}
              value={currentLocale}
              className="
                bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600
                text-sm text-gray-700 dark:text-gray-200 rounded-md px-2 py-1
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              aria-label="Change language"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile toggle button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 text-sm flex flex-col gap-[var(--menu-item-spacing)]">
          <Link
            onClick={handleNavClick}
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            Home
          </Link>
          <Link
            onClick={handleNavClick}
            href="/dashboard"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            Dashboard
          </Link>
          <Link
            onClick={handleNavClick}
            href="#workspaces"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            Workspaces
          </Link>
          <Link
            onClick={handleNavClick}
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
