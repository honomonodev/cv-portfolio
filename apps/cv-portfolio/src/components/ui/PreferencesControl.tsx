'use client';

import { useState, useEffect, useRef } from 'react';
import {
  useAccessibility,
  MODES,
  Mode,
} from '../../context/AccessibilityContext';
import { SunIcon, MoonIcon, CogIcon } from '@heroicons/react/24/outline';

export default function PreferencesControl() {
  const { mode, setMode } = useAccessibility();

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // ✅ Detect click outside to close panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // ✅ Read system preference & localStorage for theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  // ✅ Handle theme change
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const isMode = (value: string): value is Mode => {
    return MODES.includes(value as Mode);
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 left-4 z-50 flex flex-col items-start"
    >
      {/* Panel content */}
      {isOpen && (
        <div
          className={`mb-3 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 shadow-md p-4 rounded-md w-64 text-sm
            transition-all duration-300 ease-out transform
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
          `}
          role="dialog"
          aria-label="Preferences Panel"
        >
          {/* Accessibility Mode */}
          <label htmlFor="a11y-mode" className="block font-medium mb-2">
            Accessibility Mode
          </label>
          <select
            id="a11y-mode"
            value={mode}
            onChange={e => {
              const value = e.target.value;
              if (isMode(value)) {
                setMode(value);
              }
            }}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Default</option>
            <option value="high-contrast">High Contrast</option>
            <option value="readable-font">Readable Font</option>
            <option value="reduced-motion">Reduced Motion</option>
          </select>

          {/* Spacer */}
          <div className="my-4 border-t border-gray-200 dark:border-gray-700"></div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <span className="font-medium">Theme</span>
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === 'light' ? (
                <>
                  <SunIcon className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Light</span>
                </>
              ) : (
                <>
                  <MoonIcon className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={isOpen}
        aria-label="Open Preferences Panel"
      >
        <CogIcon className="h-5 w-5 text-gray-800 dark:text-white" />
      </button>
    </div>
  );
}
