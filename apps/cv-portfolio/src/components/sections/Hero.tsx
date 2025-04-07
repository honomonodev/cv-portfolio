// apps/cv-portfolio/src/components/sections/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;

      backgroundRef.current.style.backgroundPosition = `${50 + xPos}% ${50 + yPos}%`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="
        relative flex flex-col items-center justify-center min-h-screen px-4 text-center
        bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800
        overflow-hidden
      "
      aria-labelledby="hero-heading"
    >
      {/* Background animation layer */}
      <div
        ref={backgroundRef}
        className="
          absolute inset-0 pointer-events-none opacity-40 
          animate-gradient-xy
          bg-gradient-to-tr from-amber-800 via-lime-100 to-sky-800
          dark:bg-gradient-to-tr dark:from-blue-800 dark:via-gray-800 dark:to-green-900
          backdrop-blur-xl
          transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:transform-gpu
        "
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative max-w-3xl mx-auto">
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
        >
          Sistaimu: Life and Work Timeline Management
        </h1>
        <p className="max-w-prose text-lg text-gray-700 dark:text-gray-300 mx-auto mb-8">
          Plan your future, review your past. Sistaimu — your timeline,
          versioned for life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#founder-note"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Learn More
          </a>
          <a
            href="/admin"
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700"
          >
            Explore Demo
          </a>
        </div>
      </div>
    </section>
  );
}
