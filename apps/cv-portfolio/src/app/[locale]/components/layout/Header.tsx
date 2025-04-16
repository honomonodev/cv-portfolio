'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Logo from './Logo';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav + Language Switcher */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-4">
              <Link
                href="/about"
                className="hover:underline text-gray-700 dark:text-gray-300"
              >
                About
              </Link>
              <Link
                href="/profile/roma"
                className="hover:underline text-gray-700 dark:text-gray-300"
              >
                Profile
              </Link>
            </nav>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/about"
            className="block text-gray-700 dark:text-gray-300 hover:underline"
          >
            About
          </Link>
          <Link
            href="/profile/roma"
            className="block text-gray-700 dark:text-gray-300 hover:underline"
          >
            Profile
          </Link>
        </div>
      )}
    </header>
  );
}
