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
        relative 
        bg-gradient-to-br from-amber-50 via-white to-emerald-50
        dark:bg-gradient-to-br dark:from-blue-900 dark:via-gray-900 dark:to-black
        text-gray-900 dark:text-white 
        py-20 px-8 text-center overflow-hidden
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
      />

      {/* Content container */}
      <div className="relative max-w-3xl mx-auto">
        <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-6">
          Take Control of Your Time, Empower Your Day.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Sistaimu is your personal and professional time management assistant —
          built for well-being, focus, and balance. Empower your team and
          yourself with smart, self-guided control over daily rhythms, work
          sessions, and personal moments.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="bg-blue-600 text-white py-3 px-6 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
          >
            <span>🚀</span>
            <span>Start Free Trial</span>
          </a>
          <a
            href="#"
            className="bg-white text-blue-600 border border-blue-600 py-3 px-6 rounded-md shadow hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
          >
            <span>🎥</span>
            <span>Book a Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
