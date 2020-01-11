const path = require('path')

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: { paths: [path.resolve(__dirname, '.')] }
    }
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
   
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': 0,
    'import/extensions': [1, { 'js': 'never', 'jsx': 'never', 'ts': 'never', 'tsx': 'never' }],
    'import/prefer-default-export': 0,
    
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/semi': ['error', 'never'],

    'react/prop-types': 0, // because we use typescript

    'max-len': ['error', { code: 90, ignoreTrailingComments: true }],
    'quotes': [
      'error',
      'single'
    ],
    'consistent-return': ['error', { 'treatUndefinedAsUnspecified': true }],
    'consistent-return': 0,
    'no-unused-vars': 0,
    'camelcase': 0,
    'function-paren-newline': 0
  },
};
