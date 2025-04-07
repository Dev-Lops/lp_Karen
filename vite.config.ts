import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@splidejs/react-splide': '@splidejs/react-splide',
      '@': path.resolve(__dirname, './src'),
    },
  },
})
