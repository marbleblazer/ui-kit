/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
    return {
        server: {
            port: 3000,
        },
        define: {
            'process.env': {},
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
        plugins: [react(), svgr()],
    };
});
