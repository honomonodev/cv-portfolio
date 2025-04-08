'use client';

import PreferencesControl from '../ui/PreferencesControl';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center space-x-6">
        <Logo />
        <nav className="hidden md:flex space-x-6 text-sm">
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="/admin"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Dashboard
          </a>
          <a
            href="#workspaces"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Workspaces
          </a>
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            About
          </a>
        </nav>
      </div>

      <PreferencesControl />
    </header>
  );
}
