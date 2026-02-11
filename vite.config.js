import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['jelsoft-administrators-custody-snapshot.trycloudflare.com', '.render.com']
  },
  build: {
    outDir: 'dist',
  }
})
