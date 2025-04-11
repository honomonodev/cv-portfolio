'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Logo from '@/components/layout/Logo';

export default function DashboardHeader() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header className="header-base">
      {/* 🌿 NOTE: Reused header-base class to maintain blur/transparency */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <Logo />
        </div>

        {/* Center: Navigation */}
        <nav
          className="hidden md:flex space-x-6 text-sm"
          aria-label="Dashboard navigation"
        >
          <Link
            href="/dashboard/workspaces"
            className={`transition ${
              isActive('/dashboard/workspaces')
                ? 'text-blue-600 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
            }`}
          >
            Workspaces
          </Link>
          <Link
            href="/dashboard/timeline"
            className={`transition ${
              isActive('/dashboard/timeline')
                ? 'text-blue-600 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
            }`}
          >
            Timeline
          </Link>
        </nav>

        {/* Right: User Menu */}
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center space-x-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <UserCircleIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            <ChevronDownIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </MenuButton>
          <MenuItems className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col gap-[var(--menu-item-spacing)]">
            {/* 🌿 NOTE: Clean spacing applied globally */}
            <MenuItem>
              {({ focus }) => (
                <Link
                  href="/profile"
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
                  href="/settings"
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
      </div>
    </header>
  );
}
