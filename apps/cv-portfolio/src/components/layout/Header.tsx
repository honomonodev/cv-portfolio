'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header
      className="
        sticky top-0 z-50
        flex items-center px-6 py-4
        border-b border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80
        motion-safe:transition-all motion-safe:duration-300
      "
    >
      {/* Left group: Logo */}
      <Logo />

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm mr-5">
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
        >
          Home
        </Link>
        <Link
          href="/admin"
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
    </header>
  );
}
