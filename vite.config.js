import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['e07b-2409-40c1-2035-ab7c-21e9-5c6c-ef7-94.ngrok-free.app']
  }
})