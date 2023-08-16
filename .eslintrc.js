// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/no-unused-prop-types': 'warn',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
    'func-names': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-var': 'off',
    'vars-on-top': 'off',
    'no-loop-func': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-props-no-spreading': 'off',

    // for enum
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
  },
};
