'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center text-blue-600 dark:text-white font-extrabold text-lg tracking-tight hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
      aria-label="Sistaimu Home"
    >
      {/* Simple animated SVG for now */}
      <svg
        className="w-6 h-6 mr-2 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 12l5 5V7l-5 5z" />
      </svg>
      <span>sistaimu</span>
    </Link>
  );
}
