'use client';

import { useEffect, useState } from 'react';

export function useIsScrollable() {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      setIsScrollable(document.body.scrollHeight > window.innerHeight);
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);

    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  return isScrollable;
}
