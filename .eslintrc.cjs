module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'prettier',
        'plugin:storybook/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules/'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    settings: {
        'import/resolver': {
            typescript: {
                project: '.',
            },
        },
    },
    plugins: ['import', 'react-refresh', 'prettier', 'check-file', 'import'],
    rules: {
        'prettier/prettier': 'error',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

        // no implicit any
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',

        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_*' }],

        //Filename rules
        'check-file/filename-naming-convention': [
            'error',
            { '**/*.{js,ts,tsx,scss}': 'KEBAB_CASE' },
            { ignoreMiddleExtensions: true },
        ],

        '@typescript-eslint/padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'if', 'interface', 'type', 'class', 'block', 'block-like', 'export'],
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: ['../'],
                        message: 'use absolute import with @',
                    },
                ],
            },
        ],
        'import/no-restricted-paths': [
            'error',
            {
                zones: [
                    { target: './shared', from: ['./app/*', './accounts/*'] },
                    { target: './accounts', from: './app/*' },
                    { target: './accounts/user', from: './accounts/admin/*' },
                ],
            },
        ],
    },
};
