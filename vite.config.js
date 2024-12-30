import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import { ghPages } from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),ghPages()],
  base:'arunavgawri/',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})