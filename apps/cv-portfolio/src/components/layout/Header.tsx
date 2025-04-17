'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageToggle from '../ui/LanguageToggle';
import { useTranslations } from 'next-intl'; // ✅ Import translation hook

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);
  const t = useTranslations('header'); // ✅ Use the 'header' namespace

  return (
    <header className="header-base">
      <div className="flex items-center justify-between px-6 py-4">
        <Logo />

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm ml-auto mr-4">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            {t('home_nav')}
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            {t('dashboard_nav')}
          </Link>
          <Link
            href="#workspaces"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            {t('workspaces_nav')}
          </Link>
          <Link
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            {t('about_nav')}
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <LanguageToggle />
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
            {t('home_nav')}
          </Link>
          <Link
            onClick={handleNavClick}
            href="/dashboard"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            {t('dashboard_nav')}
          </Link>
          <Link
            onClick={handleNavClick}
            href="#workspaces"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            {t('workspaces_nav')}
          </Link>
          <Link
            onClick={handleNavClick}
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            {t('about_nav')}
          </Link>
        </div>
      )}
    </header>
  );
}
