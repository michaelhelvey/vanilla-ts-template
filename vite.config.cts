/// <reference types="vitest" />
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths()],
	server: {
		port: 3000,
	},
	test: {
		globals: true,
		include: ['**/src/**{test,spec}.{ts,tsx}'],
		environment: 'happy-dom',
		setupFiles: './setup-tests.ts',
		coverage: {
			provider: 'istanbul',
		}
	},
})
