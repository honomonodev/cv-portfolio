'use client';

import {
  useAccessibility,
  MODES,
  Mode,
} from '../../context/AccessibilityContext';

export default function AccessibilityToggle() {
  const { mode, setMode } = useAccessibility();

  const isMode = (value: string): value is Mode => {
    return MODES.includes(value as Mode);
  };

  return (
    <div
      className={`
        fixed bottom-4 left-4 z-50
        bg-white text-black border border-gray-300 shadow-md
        p-3 rounded-md w-64 text-sm
        dark:bg-gray-800 dark:text-white
        high-contrast:bg-black high-contrast:text-white
      `}
    >
      <label htmlFor="a11y-mode" className="block font-medium mb-2">
        Accessibility Mode
      </label>
      <select
        id="a11y-mode"
        value={mode}
        onChange={(e) => {
          const value = e.target.value;
          if (isMode(value)) {
            setMode(value);
          }
        }}
        className={`
          w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black
          dark:bg-gray-900 dark:text-white dark:border-gray-600
          high-contrast:bg-black high-contrast:text-white high-contrast:border-white
          focus:outline-none focus:ring-2 focus:ring-blue-500
        `}
      >
        <option value="default">Default</option>
        <option value="high-contrast">High Contrast</option>
        <option value="readable-font">Readable Font</option>
        <option value="reduced-motion">Reduced Motion</option>
      </select>
    </div>
  );
}
