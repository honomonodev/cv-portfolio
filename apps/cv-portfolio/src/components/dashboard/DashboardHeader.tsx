'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import {
  UserCircleIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Logo from '../layout/Logo';
import LanguageToggle from '../ui/LanguageToggle';
import { useLocale, useTranslations } from 'next-intl';

export default function DashboardHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('dashboardHeader');
  const locale = useLocale();
  const isActive = (path: string) => pathname.startsWith(path);
  const withLocale = (path: string) => `/${locale}${path}`;

  return (
    <header role="banner" className="header-base">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-6 text-sm"
          aria-label="Dashboard navigation"
        >
          <Link
            href={withLocale('/dashboard/workspaces')}
            className={`transition ${
              isActive('/dashboard/workspaces')
                ? 'text-blue-600 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
            }`}
          >
            {t('nav.timeline')}
          </Link>
          <Link
            href={withLocale('/dashboard/timeline')}
            className={`transition ${
              isActive('/dashboard/timeline')
                ? 'text-blue-600 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
            }`}
          >
            {t('nav.workspaces')}
          </Link>
        </nav>

        {/* Right: User Menu */}
        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <Menu as="div" className="relative hidden md:block">
            <MenuButton className="flex items-center space-x-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <UserCircleIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              <ChevronDownIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href={withLocale('/profile/roma')}
                    className={`${
                      focus ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    Profile
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href={withLocale('/settings')}
                    className={`${
                      focus ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
                  >
                    Settings
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <button
                    className={`${
                      focus ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } block w-full text-left px-4 py-2 text-sm text-red-600`}
                    onClick={() => alert('Logging out...')}
                  >
                    Logout
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle mobile menu"
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
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm">
          <Link
            href={withLocale('/dashboard/workspaces')}
            className={`block ${
              isActive('/dashboard/workspaces')
                ? 'text-blue-600 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Workspaces
          </Link>
          <Link
            href={withLocale('/dashboard/timeline')}
            className={`block ${
              isActive('/dashboard/timeline')
                ? 'text-blue-600 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Timeline
          </Link>
          <Link
            href={withLocale('/profile/roma')}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>
          <Link
            href={withLocale('/settings')}
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Settings
          </Link>
          <button
            className="block w-full text-left text-red-600"
            onClick={() => {
              alert('Logging out...');
              setMenuOpen(false);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
