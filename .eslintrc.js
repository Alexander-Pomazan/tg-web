module.exports = {
  env: {
    browser: true,
    es6: true,
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
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
   
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': 0,
    'import/extensions': [1, { 'js': 'never', 'jsx': 'never', 'ts': 'never', 'tsx': 'never' }],
    'import/prefer-default-export': 0,

    'max-len': ['error', { code: 90, ignoreTrailingComments: true }],
    '@typescript-eslint/semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'consistent-return': ['error', { 'treatUndefinedAsUnspecified': true }],
    'consistent-return': 0,
    'no-unused-vars': 0,
    'camelcase': 0
  },
};
