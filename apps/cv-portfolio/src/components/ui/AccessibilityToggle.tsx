"use client";

import { useAccessibility } from '../../context/AccessibilityContext';

export default function AccessibilityToggle() {
  const { mode, setMode } = useAccessibility();

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white shadow-md p-3 rounded border text-sm w-56">
      <label className="block text-sm mb-2 font-medium">Accessibility Mode</label>
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value as any)}
        className="text-sm border rounded px-2 py-1"
      >
        <option value="default">Default</option>
        <option value="high-contrast">High Contrast</option>
        <option value="readable-font">Readable Font</option>
        <option value="reduced-motion">Reduced Motion</option>
      </select>
    </div>
  );
}
