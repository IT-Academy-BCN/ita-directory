/// <reference types="vitest" />
/// <reference types="vite/client" />
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  server: {
    port: 3000,
  },
  publicDir: './public',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setup.js',
    include: ['./src/__test__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
