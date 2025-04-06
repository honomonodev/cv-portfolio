'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold tracking-tight">
            sistaimu
          </Link>

          {/* Navigation */}
          <nav className="space-x-4">
            <Link
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
