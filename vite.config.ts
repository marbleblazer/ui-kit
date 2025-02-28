/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import { extname, relative } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

export default defineConfig(({ mode }) => {
    return {
        server: {
            port: 3000,
        },
        resolve: {
            alias: {
                '@chirp/ui': path.resolve(__dirname, 'src'),
            },
        },
        css: {
            modules: {
                generateScopedName:
                    mode === 'production' ? '[local]-[hash:base64:5]' : '[name]__[local]___[hash:base64:5]',
                localsConvention: 'camelCase',
            },
        },
        plugins: [
            react(),
            svgr(),
            dts({
                insertTypesEntry: true,
            }),
        ],

        build: {
            outDir: 'dist',
            lib: {
                entry: path.resolve(__dirname, 'src/index.ts'),
                name: '@chirp/ui',
                fileName: (format) => `chirp-ui.${format}.js`,
                formats: ['es', 'cjs'],
            },
            rollupOptions: {
                input: {
                    ...Object.fromEntries(
                        glob
                            .sync('src/**/*.{ts,tsx}', {
                                ignore: ['src/**/*.stories.tsx'],
                            })
                            .map((file) => [
                                // The name of the entry point
                                // lib/nested/foo.ts becomes nested/foo
                                relative('src', file.slice(0, file.length - extname(file).length)),
                                // The absolute path to the entry file
                                // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                                fileURLToPath(new URL(file, import.meta.url)),
                            ]),
                    ),
                },
                external: ['react', 'react-dom', '@mui/material', 'react-i18next', 'i18next', 'react-toastify'], // Внешние зависимости
                output: {
                    minifyInternalExports: false,
                    inlineDynamicImports: false, // отключите инлайн динамические импорты
                    assetFileNames: '[name][extname]',
                    entryFileNames: '[name].[format].js',
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                        '@mui/material': 'MaterialUI',
                    },
                },
            },
        },
    };
});
