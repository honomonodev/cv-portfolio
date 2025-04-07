'use client';

import { useState, useEffect, useRef } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { SunIcon, MoonIcon, CogIcon } from '@heroicons/react/24/outline';

export default function PreferencesControl() {
  const {
    highContrast,
    readableFont,
    reducedMotion,
    toggleHighContrast,
    toggleReadableFont,
    toggleReducedMotion,
  } = useAccessibility();

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [clickSound, setClickSound] = useState<HTMLAudioElement | null>(null);

  // Sound effect client-safe
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sound = new Audio('/sounds/click.mp3');
      sound.load();
      setClickSound(sound);
    }
  }, []);

  const playClick = () => {
    if (clickSound) clickSound.play();
  };

  // Detect click outside
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // System theme load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initialTheme =
      savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : prefersDark
          ? 'dark'
          : 'light';

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    playClick();
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 left-4 z-50 flex flex-col items-start"
    >
      {isOpen && (
        <div
          className="mb-3 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 shadow-md p-4 rounded-md w-64 text-sm transition-all duration-300 ease-out transform opacity-100 translate-y-0"
          role="dialog"
          aria-label="Preferences Panel"
        >
          <div className="space-y-4">
            <ToggleSwitch
              label="High Contrast"
              checked={highContrast}
              onChange={() => {
                toggleHighContrast();
                playClick();
              }}
            />
            <ToggleSwitch
              label="Readable Font"
              checked={readableFont}
              onChange={() => {
                toggleReadableFont();
                playClick();
              }}
            />
            <ToggleSwitch
              label="Reduced Motion"
              checked={reducedMotion}
              onChange={() => {
                toggleReducedMotion();
                playClick();
              }}
            />
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
        </div>
      )}

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          playClick();
        }}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={isOpen}
        aria-label="Open Preferences Panel"
      >
        <CogIcon className="h-5 w-5 text-gray-800 dark:text-white" />
      </button>
    </div>
  );
}

// Toggle switch reusable component
function ToggleSwitch({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium">{label}</span>
      <button
        onClick={onChange}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
          checked ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
        }`}
      >
        <span
          className={`transform transition-transform bg-white inline-block h-4 w-4 rounded-full ${
            checked ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}
