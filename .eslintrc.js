module.exports = {
  extends: [
    'airbnb',
    'plugin:sonarjs/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['html', 'sonarjs'],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    impliedStrict: true,
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    uiLocation: true,
    apiUrl: true,
  },
  ignorePatterns: ['webpack.config.js, node_modules/'],
  rules: {
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
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/webpack.*.js', '**/__tests__/**/*'],
      },
    ],
    'max-len': 'off', // disables line length check
    'linebreak-style': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'no-console': 'warn',
    'no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-use-before-define': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': ['error', { props: false }],
    'sonarjs/cognitive-complexity': ['error', 20],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      // parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      // plugins: ['@typescript-eslint'],
      rules: {
        'sonarjs/no-ignored-return': 'off', // on reduce?
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-var-requires': 1,
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
