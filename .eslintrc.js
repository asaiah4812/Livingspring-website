module.exports = {
  extends: [
    'next/core-web-vitals',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn', // Downgrade from error to warning
    'react-hooks/exhaustive-deps': 'warn', // Downgrade from error to warning
  }
};