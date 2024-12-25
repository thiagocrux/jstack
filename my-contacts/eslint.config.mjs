/* eslint-disable no-magic-numbers */
import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      complexity: ['error', 20],
      curly: ['error', 'all'],
      'dot-notation': 'error',
      eqeqeq: 'error',
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: false,
        },
      ],
      'max-depth': ['error', 4],
      'no-alert': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-console': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-lonely-if': 'error',
      'no-magic-numbers': [
        'error',
        {
          detectObjects: false,
          enforceConst: false,
          ignore: [0, 1],
          ignoreArrayIndexes: true,
          ignoreClassFieldInitialValues: false,
          ignoreDefaultValues: true,
        },
      ],
      'no-multi-assign': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-param-reassign': 'error',
      'no-regex-spaces': 'error',
      'no-return-assign': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-labels': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'operator-assignment': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'warn',
      'prefer-destructuring': 'warn',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: ['error', 'always'],
      'symbol-description': 'error',
      yoda: 'error',
    },
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
