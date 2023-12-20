module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        message: 'Use `useAppDispatch` instead',
        selector: 'CallExpression[callee.name="useDispatch"]',
      },
      {
        message: 'Use `useAppSelector` instead',
        selector: 'CallExpression[callee.name="useSelector"]',
      },
    ],
    'no-trailing-spaces': 'error',
    quotes: ['error', 'single'],

    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        variables: false,
      },
    ],

    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-tag-spacing': [
      'error',
      {
        beforeClosing: 'never',
      },
    ],
    'react/prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Temporariliy disabled to upgrade
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'BuildMenu.tsx',
        'ButtonSet.tsx',
        'Header.tsx',
        'Notifications.tsx',
        'PopButton.tsx',
        'Stdin.tsx',
        'actions.ts',
        'api.ts',
        'compileActions.ts',
        'configureStore.ts',
        'editor/AceEditor.tsx',
        'editor/SimpleEditor.tsx',
        'hooks.ts',
        'observer.ts',
        'reducers/**/*.ts',
        'reducers/websocket.ts',
        'selectors/index.spec.ts',
        'types.ts',
        'websocketActions.ts',
        'websocketMiddleware.ts',
      ],
      extends: ['prettier'],
    },
  ],
};
