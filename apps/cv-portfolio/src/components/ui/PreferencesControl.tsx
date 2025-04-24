'use client';

import { useState, useEffect, useRef } from 'react';
import {
  useAccessibility,
  MODES,
  Mode,
} from '../../context/AccessibilityContext';
import {
  SunIcon,
  MoonIcon,
  CogIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function PreferencesControl() {
  const { mode, setMode } = useAccessibility();
  const t = useTranslations('preferencesControl');

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isReady, setIsReady] = useState(false);

  // Close on outside click
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

  // Detect and apply theme
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

    setIsReady(true);
  }, []);

  // Skip render until hydration-ready
  if (!isReady) return null;

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
          className={`relative mb-3 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 shadow-md p-4 rounded-md w-64 text-sm
            transition-all duration-300 ease-out transform
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
          `}
          role="dialog"
          aria-label="Preferences Panel"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition"
            aria-label="Close Preferences Panel"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>

          <label htmlFor="a11y-mode" className="block font-medium mb-2">
            {t('accessibilityLabel')}
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
            <option value="default">{t('accessibilityOptions.default')}</option>
            <option value="high-contrast">
              {t('accessibilityOptions.highContrast')}
            </option>
            <option value="readable-font">
              {t('accessibilityOptions.readableFont')}
            </option>
            <option value="reduced-motion">
              {t('accessibilityOptions.reducedMotion')}
            </option>
          </select>

          <div className="my-4 border-t border-gray-200 dark:border-gray-700"></div>

          <div className="flex items-center justify-between">
            <span className="font-medium">{t('themeLabel')}</span>
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === 'light' ? (
                <>
                  <SunIcon className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">{t('themeLight')}</span>
                </>
              ) : (
                <>
                  <MoonIcon className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">{t('themeDark')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

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
