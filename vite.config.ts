import tanstackRouter from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tanstackRouter({ autoCodeSplitting: true, target: 'react' }), react()],
  resolve: {
    alias: {
      '@': new URL('.', import.meta.url).pathname,
    },
  },
})
