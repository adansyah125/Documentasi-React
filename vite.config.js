import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        index: 'index.html',
        HelloWorld: 'HelloWorld.html'
      }
    }
  }
})
