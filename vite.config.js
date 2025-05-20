import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500,
    open: true,
    host: true,
    proxy: {
      '/api': {
        target: 'https://73bg3kj6-8000.inc1.devtunnels.ms',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})