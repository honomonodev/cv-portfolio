'use client';

import Link from 'next/link';

import { Squares2X2Icon } from '@heroicons/react/24/outline';

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <Squares2X2Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
          Dashboard
        </h1>
      </div>
      <nav className="flex space-x-4 text-sm">
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
        >
          Home
        </Link>
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
    </header>
  );
}
