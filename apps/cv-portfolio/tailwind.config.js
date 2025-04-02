module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx,html}',
    '!./src/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  ],
  darkMode: ['class'], // We'll use `class="contrast"` or `class="accessible"`
  theme: {
    extend: {
      fontSize: {
        xxl: '2.25rem',
      },
      colors: {
        high: {
          bg: '#000',
          text: '#fff',
        },
      },
    },
  },
  plugins: [],
};
