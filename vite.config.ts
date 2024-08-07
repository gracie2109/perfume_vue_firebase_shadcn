import { fileURLToPath, URL } from 'node:url'

import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps:{
    exclude:['ag-charts-vue3']
  }
})