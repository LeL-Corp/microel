/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['1', 2, { SwitchCase: 1 }],
    'linebreak-style': ['1', 'unix'],
    quotes: ['1', 'single'],
    semi: ['1', 'always'],
    'comma-dangle': ['1', 'only-multiline'],
  },
};
