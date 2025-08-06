import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 👇 This tells Vite to serve index.html for any unknown path (required for React Router)
    historyApiFallback: true,
  },
})
