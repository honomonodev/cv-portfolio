'use client';

import { useAccessibility } from '../../context/AccessibilityContext';
import { useEffect, useState } from 'react';

export default function AccessibilityPreview() {
  const { mode } = useAccessibility();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, { attributes: true });

    // Initial check
    setTheme(
      document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="accessibility-preview"
      className="mt-12 px-6 py-8 border-t max-w-3xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">
        Live Preview:
        <span className="italic ml-2">
          {mode} mode, {theme} theme
        </span>
      </h2>
      <p className="mb-4">
        This text is styled according to your selected accessibility mode and
        theme. Try switching between modes and theme using the Preferences
        Panel!
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Text contrast and background</li>
        <li>Font style and size</li>
        <li>Animations and transitions</li>
        <li>Theme: Dark or Light</li>
      </ul>
    </section>
  );
}
