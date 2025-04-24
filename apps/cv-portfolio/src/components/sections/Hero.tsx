'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import CallToAction from '../ui/CallToAction';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="
        relative flex flex-col justify-center min-h-screen px-4 text-center
        bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800
        overflow-hidden py-12 sm:py-20
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
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 "
        >
          {t('headline')}
        </h1>
        <p className="max-w-prose text-lg text-gray-700 dark:text-gray-300 mx-auto mb-8">
          {t('subheadline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CallToAction
            label={t('cta_learnMore')}
            href="#about"
            variant="primary"
          />
          <CallToAction
            label={t('cta_exploreDemo')}
            href={`/${locale}/dashboard`}
            variant="secondary"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 dark:text-gray-400">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
