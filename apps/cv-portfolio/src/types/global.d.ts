// global.d.ts
// Global type declarations for modules and ambient types.

declare module '@heroicons/react/outline' {
  import * as React from 'react';

  export const LayoutGridIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const XIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const UserIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>>;

  // Add others if you use more
}

declare module '*.json' {
  const value: any;
  export default value;
}
