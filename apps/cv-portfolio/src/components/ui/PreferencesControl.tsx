'use client';

import React, { useState, useEffect, useRef } from 'react';
import Draggable, { DraggableEvent, DraggableData } from 'react-draggable';
import {
  useAccessibility,
  MODES,
  Mode,
} from '../../context/AccessibilityContext';

export default function PreferencesControl() {
  const { mode, setMode } = useAccessibility();

  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const nodeRef = useRef<HTMLDivElement>(null); // Draggable node
  const containerRef = useRef<HTMLDivElement>(null); // Entire component container

  // ✅ Read position from localStorage
  useEffect(() => {
    const savedPosition = localStorage.getItem('preferences-panel-position');
    if (savedPosition) {
      try {
        const parsed = JSON.parse(savedPosition);
        if (parsed.x !== undefined && parsed.y !== undefined) {
          setPosition(parsed);
        }
      } catch (e) {
        console.error('Error reading position from localStorage', e);
      }
    }
  }, []);

  // ✅ Save position on drag stop
  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    const newPos = { x: data.x, y: data.y };
    setPosition(newPos);
    localStorage.setItem('preferences-panel-position', JSON.stringify(newPos));
  };

  // ✅ Detect click outside
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

  const isMode = (value: string): value is Mode => {
    return MODES.includes(value as Mode);
  };

  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLElement>}
      position={position}
      onStop={handleStop}
    >
      <div ref={nodeRef} className="fixed z-50 cursor-move">
        {/* Outer container ref */}
        <div ref={containerRef}>
          {/* Toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-expanded={isOpen}
            aria-label="Accessibility & Theme Preferences"
          >
            🛠️
          </button>

          {/* Panel content */}
          {isOpen && (
            <div
              className="mt-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 shadow-md p-4 rounded-md w-64 text-sm"
              role="dialog"
              aria-label="Preferences Panel"
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
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="default">Default</option>
                <option value="high-contrast">High Contrast</option>
                <option value="readable-font">Readable Font</option>
                <option value="reduced-motion">Reduced Motion</option>
              </select>

              {/* Future: Theme Toggle */}
            </div>
          )}
        </div>
      </div>
    </Draggable>
  );
}
