'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface AccessibilityContextProps {
  highContrast: boolean;
  readableFont: boolean;
  reducedMotion: boolean;
  toggleHighContrast: () => void;
  toggleReadableFont: () => void;
  toggleReducedMotion: () => void;
}

// Create context with initial undefined state
export const AccessibilityContext = createContext<
  AccessibilityContextProps | undefined
>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [highContrast, setHighContrast] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast);
    document.body.classList.toggle('readable-font', readableFont);
    document.body.classList.toggle('reduced-motion', reducedMotion);
  }, [highContrast, readableFont, reducedMotion]);

  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleReadableFont = () => setReadableFont(prev => !prev);
  const toggleReducedMotion = () => setReducedMotion(prev => !prev);

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        readableFont,
        reducedMotion,
        toggleHighContrast,
        toggleReadableFont,
        toggleReducedMotion,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

// ✅ Custom hook for easier consumption
export const useAccessibility = (): AccessibilityContextProps => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      'useAccessibility must be used within an AccessibilityProvider'
    );
  }
  return context;
};
