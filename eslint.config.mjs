import eslintPluginPrettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  {
    plugins: {
      prettier: eslintPluginPrettier,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'prettier/prettier': 'warn', // or 'error' if you prefer stricter
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      // ... add more a11y rules as needed
    },
  },
];
