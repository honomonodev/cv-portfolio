/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('high-contrast', '&.high-contrast &');
      addVariant('readable-font', '&.readable-font &');
      addVariant('reduced-motion', '&.reduced-motion &');
    },
  ],
};
