import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),  // Enables React Fast Refresh for a better development experience
    tailwindcss()  // Enables Tailwind CSS for utility-first styling
  ],
})
