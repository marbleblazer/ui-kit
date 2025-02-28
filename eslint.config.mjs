import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import _import from 'eslint-plugin-import';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import checkFile from 'eslint-plugin-check-file';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { FlatCompat } from '@eslint/eslintrc';
import unusedImports from 'eslint-plugin-unused-imports';

const compat = new FlatCompat({
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            '**/dist',
            '**/eslint.config.mjs',
            '**/node_modules/',
            '**/vite.config.ts',
            '**/node_modules',
            '**/*.scss',
        ],
    },
    ...fixupConfigRules(
        compat.extends(
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:react-hooks/recommended',
            'plugin:import/typescript',
            'prettier',
            'plugin:storybook/recommended',
        ),
    ),
    {
        plugins: {
            import: fixupPluginRules(_import),
            'react-refresh': reactRefresh,
            prettier,
            'check-file': checkFile,
            '@stylistic': stylistic,
            import: fixupPluginRules(_import),
            'unused-imports': unusedImports,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'script',

            parserOptions: {
                project: './tsconfig.json', // Укажите путь к tsconfig.json
                ecmaVersion: 2022,
                sourceType: 'module', // Можно использовать "module" для ES-модулей
            },
        },

        settings: {
            'import/resolver': {
                typescript: {
                    project: '.',
                },
            },
        },

        rules: {
            'prettier/prettier': 'error',

            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true,
                },
            ],

            '@typescript-eslint/no-unsafe-argument': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            'unused-imports/no-unused-imports': 'error',

            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    varsIgnorePattern: '_*',
                },
            ],

            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',

            '@stylistic/padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: '*',

                    next: ['return', 'if', 'interface', 'type', 'class', 'block', 'block-like', 'export'],
                },
            ],

            // 'no-restricted-imports': [
            //     'error',
            //     {
            //         patterns: [
            //             {
            //                 group: ['../'],
            //                 message: 'use absolute import with @',
            //             },
            //         ],
            //     },
            // ],
        },
    },
];
