module.exports = {
  extends: [
    'next/core-web-vitals',
  ],
  rules: {
    'no-unused-vars': 'off', // Disable the base rule
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
         "ignoreRestSiblings": true
      }
    ],

    'react-hooks/exhaustive-deps': 'warn', // Downgrade from error to warning
  }
};
