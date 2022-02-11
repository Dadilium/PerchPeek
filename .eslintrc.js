const path = require('path');

module.exports = {
  root: true,
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'airbnb-typescript/base',
    'plugin:react/recommended',
    "plugin:import/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx']
    }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          '@env',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'max-len': ['error', {
      code: 120
    }],
  },
  overrides: [{
    files: ['**/*.{tsx, ts}'],
    rules: {
      'react/prop-types': 'off',
      'import/named': 'off',
      'import/namespace': 'off',
    },
  }, ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: [path.resolve(__dirname, './src')],
      },
    },
  },
};