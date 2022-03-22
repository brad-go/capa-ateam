module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    'import/resolver': {
      typescript: './tsconfig.json',
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'no-console': 0,
    'no-unsued-vars': 0,
    'no-use-before-define': 1,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'import/extensions': 0,
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
        'react/function-component-definition': [
          0,
          {
            namedComponents: 'arrow-function',
          },
        ],
      },
    },
  ],
  ignorePatterns: ['dist/', 'node_modules/'],
};
