import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        // Все ассеты в папку assets
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});
