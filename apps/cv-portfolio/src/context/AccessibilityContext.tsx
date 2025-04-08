'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

// ====================
// Types
// ====================
export type Mode =
  | 'default'
  | 'high-contrast'
  | 'readable-font'
  | 'reduced-motion';

export interface AccessibilityContextProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

// ====================
// Context
// ====================
const AccessibilityContext = createContext<
  AccessibilityContextProps | undefined
>(undefined);

// ====================
// Provider
// ====================
export const AccessibilityProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mode, setModeState] = useState<Mode>('default');

  useEffect(() => {
    const savedMode = localStorage.getItem('a11y-mode') as Mode | null;
    if (savedMode) {
      setModeState(savedMode);
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove(
      'high-contrast',
      'readable-font',
      'reduced-motion'
    );

    if (mode !== 'default') {
      document.body.classList.add(mode);
    }

    localStorage.setItem('a11y-mode', mode);
  }, [mode]);

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
  };

  return (
    <AccessibilityContext.Provider value={{ mode, setMode }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// ====================
// Hook
// ====================
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      'useAccessibility must be used within AccessibilityProvider'
    );
  }
  return context;
};

// ====================
// Exported Constants
// ====================
export const MODES: Mode[] = [
  'default',
  'high-contrast',
  'readable-font',
  'reduced-motion',
];
