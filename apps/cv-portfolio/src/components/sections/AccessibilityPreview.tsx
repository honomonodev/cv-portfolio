'use client';

import { useState } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function AccessibilityPreview() {
  const { mode } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);

  // Derived states from mode
  const highContrast = mode === 'high-contrast';
  const readableFont = mode === 'readable-font';
  const reducedMotion = mode === 'reduced-motion';

  return (
    <section
      id="accessibility-preview"
      className="mt-12 px-6 py-4 border-t max-w-3xl mx-auto"
    >
      {/* Header with toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left focus:outline-none"
        aria-expanded={isOpen}
        aria-controls="accessibility-preview-content"
      >
        <h2 className="text-xl font-semibold mb-2">Accessibility Preview</h2>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {/* Collapsible content */}
      {isOpen && (
        <div
          id="accessibility-preview-content"
          className="transition-all duration-300 ease-in-out mt-2"
        >
          <p className="mb-4">
            This text reflects your selected accessibility mode.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>
              <strong>Current Mode:</strong> {mode}
            </li>
            <li>High Contrast: {highContrast ? 'Enabled' : 'Disabled'}</li>
            <li>Readable Font: {readableFont ? 'Enabled' : 'Disabled'}</li>
            <li>Reduced Motion: {reducedMotion ? 'Enabled' : 'Disabled'}</li>
          </ul>
        </div>
      )}
    </section>
  );
}
