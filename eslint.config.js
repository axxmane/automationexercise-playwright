const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**'
    ]
  },

  js.configs.recommended,

  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tsParser,

      parserOptions: {
        project: './tsconfig.json'
      },

      globals: {
        process: 'readonly'
      }
    },

    plugins: {
      '@typescript-eslint': tsPlugin
    },

    rules: {
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],

      '@typescript-eslint/no-explicit-any': 'error'
    }
  },

  {
    files: ['**/*.js'],

    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly'
      }
    }
  }
];