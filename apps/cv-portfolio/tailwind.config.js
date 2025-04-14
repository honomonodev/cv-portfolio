/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  ],
  darkMode: 'class', // ✅ Enables class-based dark mode (you use it!)
  theme: {
    extend: {
      // ✅ Optional: add your custom animations, colors, etc.
      backgroundImage: {
        'hero-gradient-light':
          'linear-gradient(to bottom right, #fef3c7, #f0fdf4)',
        'hero-gradient-dark':
          'linear-gradient(to bottom right, #1e3a8a, #111827)',
      },
      animation: {
        'gradient-xy': 'gradient-xy 8s ease infinite',
        'fade-in': 'fade-in 0.8s ease-out both',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '50% 50%' },
          '50%': { backgroundPosition: '60% 60%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'gradient-xy': 'gradient-xy 8s ease infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '50% 50%' },
          '50%': { backgroundPosition: '60% 60%' },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('high-contrast', '&.high-contrast &');
      addVariant('readable-font', '&.readable-font &');
      addVariant('reduced-motion', '&.reduced-motion &');
    },
  ],
};
