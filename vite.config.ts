import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const __dirname = path.dirname(__filename)

export default defineConfig({
  base: '/ecell-website/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    historyApiFallback: true
  }
})
