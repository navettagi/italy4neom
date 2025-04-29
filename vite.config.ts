import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
  },
  // Ensure the router works correctly in production
  preview: {
    port: 4173,
    host: true
  },
  // Support for React Router by rewriting all URLs to index.html
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
