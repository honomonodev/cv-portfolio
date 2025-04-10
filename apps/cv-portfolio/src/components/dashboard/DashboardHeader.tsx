'use client';

import Link from 'next/link';
import { Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import Logo from '@/components/layout/Logo';

export default function DashboardHeader() {
  return (
    <header
      role="banner"
      className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50"
    >
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-3">
        <Logo />
        <div className="flex items-center space-x-2">
          <Squares2X2Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-semibold">Dashboard</span>
        </div>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm" aria-label="Dashboard">
        <Link
          href="#workspaces"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
        >
          Workspaces
        </Link>
        <Link
          href="#timeline"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
        >
          Timeline
        </Link>
      </nav>

      {/* Right: User Menu Placeholder */}
      <div className="flex items-center space-x-4">
        <button
          aria-label="User menu"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <UserCircleIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </header>
  );
}
