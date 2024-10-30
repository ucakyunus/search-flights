import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: parseInt(process.env.VITE_CLIENT_PORT || '3000', 10),
  },
  plugins: [react()],
  resolve: {
    alias: { '@': '/src' },
  },
  css: {
    preprocessorOptions: {
      scss: {
       api: 'modern-compiler'
      },
    },
  }
})
