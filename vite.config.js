import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2022"
  },
  esbuild: {
    supported: {
      'top-level-await': true
    },
  },
  base: "/sample-portfolio-2/",

  plugins: [react()],
})
