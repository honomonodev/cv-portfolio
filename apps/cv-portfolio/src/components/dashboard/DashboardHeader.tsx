'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Logo from '@/components/layout/Logo';

export default function DashboardHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header
      role="banner"
      className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50"
    >
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
        <Logo />
      </div>

      {/* Center: Desktop Navigation */}
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

      {/* Right: User Menu + Mobile Menu Toggle */}
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-700 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* User Dropdown Menu */}
        <Menu as="div" className="relative">
          <MenuButton className="flex items-center space-x-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {/* Avatar / Initials */}
            <span className="relative inline-block w-6 h-6 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-600">
              <span className="flex items-center justify-center h-full text-xs text-gray-700 dark:text-gray-200 font-bold">
                N
              </span>
            </span>
            <ChevronDownIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </MenuButton>

          {/* Dropdown Items */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems className="absolute right-2 mt-2 w-48 rounded-md shadow-xl bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/dashboard/profile"
                    className={`block px-4 py-2 text-sm ${
                      focus ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } text-gray-700 dark:text-gray-300`}
                  >
                    Profile
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <Link
                    href="/dashboard/settings"
                    className={`block px-4 py-2 text-sm ${
                      focus ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } text-gray-700 dark:text-gray-300`}
                  >
                    Settings
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      focus
                        ? 'bg-gray-100 dark:bg-gray-700 text-red-700 dark:text-red-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                    onClick={() => alert('Logging out...')}
                  >
                    Logout
                  </button>
                )}
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4 text-sm md:hidden text-center">
          <Link
            href="/dashboard/workspaces"
            onClick={() => setMenuOpen(false)}
            className={`block transition ${
              isActive('/dashboard/workspaces')
                ? 'text-blue-600 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
            }`}
          >
            Workspaces
          </Link>
          <Link
            href="/dashboard/timeline"
            onClick={() => setMenuOpen(false)}
            className={`block transition ${
              isActive('/dashboard/timeline')
                ? 'text-blue-600 dark:text-white font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white'
            }`}
          >
            Timeline
          </Link>
        </nav>
      )}
    </header>
  );
}
