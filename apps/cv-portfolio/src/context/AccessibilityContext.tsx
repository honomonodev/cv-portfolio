'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Single source of truth for modes
export const MODES = [
  'default',
  'high-contrast',
  'readable-font',
  'reduced-motion',
] as const;
export type Mode = (typeof MODES)[number];

interface AccessibilityContextProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const AccessibilityContext = createContext<
  AccessibilityContextProps | undefined
>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setModeState] = useState<Mode>('default');

  // Read from localStorage on first load
  useEffect(() => {
    const savedMode = localStorage.getItem('accessibility-mode') as Mode | null;
    if (savedMode && MODES.includes(savedMode)) {
      setModeState(savedMode);
    }
  }, []);

  // Apply class to <html> on mode change
  useEffect(() => {
    const root = document.documentElement;

    // Clean all mode classes
    MODES.forEach(modeOption => {
      root.classList.remove(modeOption);
    });

    // Apply current mode as class to <html>
    root.classList.add(mode);
  }, [mode]);

  // Write to localStorage on mode change
  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    localStorage.setItem('accessibility-mode', newMode);
  };

  return (
    <AccessibilityContext.Provider value={{ mode, setMode }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextProps => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider'
    );
  }
  return context;
};
