import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'index.html'),
        injector: resolve(__dirname, 'src/injector.tsx'),
      },
      output: {
        manualChunks: undefined,
        entryFileNames: '[name].js', 
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    minify: false
  }
});
