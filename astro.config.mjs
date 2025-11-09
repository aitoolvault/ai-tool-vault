import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://aitoolvault.de',
  integrations: [
    tailwind(),
  ],
  
  // PERFORMANCE: Build-Optimierungen
  build: {
    inlineStylesheets: 'auto',
  },
  
  // PERFORMANCE: HTML Kompression
  compressHTML: true,
  
  // PERFORMANCE: Vite-Optimierungen
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
      target: 'es2020',
    },
  },
});
