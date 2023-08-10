import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [react()],

        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './src/setupTest.ts',
            coverage: {
                provider: 'c8',
                reporter: ['text', 'json', 'html', 'lcov'],
            },
        },
    };
});
