/// <reference types="vitest" />
/// <reference types="vite/client" />
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig, loadEnv } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    base: '/',
    server: {
      port: 3000,
      proxy: {
        '/public': {
          target: `${process.env.VITE_API_URL}/`,
          changeOrigin: true,
        },
      },
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
}
