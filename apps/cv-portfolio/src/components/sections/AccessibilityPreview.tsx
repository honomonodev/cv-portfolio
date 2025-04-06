'use client';

import { useAccessibility } from '../../context/AccessibilityContext';

export default function AccessibilityPreview() {
  const { mode } = useAccessibility();

  return (
    <section
      id="accessibility-preview"
      className="mt-12 px-6 py-8 border-t max-w-3xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">
        Live Preview: <span className="italic">{mode}</span>
      </h2>
      <p className="mb-4">
        This text is styled according to your selected accessibility mode. Try
        switching between modes using the toggle below to see changes in:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-sm">
        <li>Text contrast and background</li>
        <li>Font style and size</li>
        <li>Animations and transitions</li>
      </ul>
    </section>
  );
}
