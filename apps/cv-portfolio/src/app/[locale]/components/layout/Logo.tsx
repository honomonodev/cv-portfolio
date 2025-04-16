'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      aria-label="Go to homepage"
    >
      {/* Power Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="
          h-6 w-6
          transition-transform duration-500 ease-in-out
          hover:scale-110 hover:animate-pulse
          motion-reduce:transition-none motion-reduce:hover:animate-none
        "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
        />
      </svg>

      {/* Text */}
      <span className="font-semibold text-lg tracking-tight">sistaimu</span>
    </Link>
  );
}
