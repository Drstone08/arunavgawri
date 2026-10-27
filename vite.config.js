import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base keeps the build portable across GitHub Pages, Vercel, and local previews.
export default defineConfig({
  plugins: [react()],
  base: './',
});
