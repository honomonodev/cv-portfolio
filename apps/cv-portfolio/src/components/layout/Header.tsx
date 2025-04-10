'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition">
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

        {/* Right Side: Preferences and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
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
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm">
          <Link
            onClick={handleNavClick}
            href="/"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            Home
          </Link>
          <Link
            onClick={handleNavClick}
            href="/dashboard"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            Dashboard
          </Link>
          <Link
            onClick={handleNavClick}
            href="#workspaces"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            Workspaces
          </Link>
          <Link
            onClick={handleNavClick}
            href="#about"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
