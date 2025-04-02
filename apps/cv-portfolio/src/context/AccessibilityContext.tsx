"use client";

import { createContext, useContext, useState } from 'react';

type Mode = 'default' | 'high-contrast' | 'readable-font' | 'reduced-motion';

const AccessibilityContext = createContext<{
  mode: Mode;
  setMode: (mode: Mode) => void;
}>({
  mode: 'default',
  setMode: () => {},
});

export const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>('default');

  return (
    <AccessibilityContext.Provider value={{ mode, setMode }}>
      <div className={mode}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
