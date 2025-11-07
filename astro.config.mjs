import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://aitoolvault.de',
  integrations: [
    tailwind({
      // Optimierung: Nur verwendete CSS-Klassen
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://aitoolvault.de/',
        'https://aitoolvault.de/tools',
      ],
      filter: (page) => 
        !page.includes('/admin') && 
        !page.includes('/api'),
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
        },
      },
    }),
  ],
  
  // PERFORMANCE: Build-Optimierungen
  build: {
    // Inline kleine Stylesheets für besseres First Paint
    inlineStylesheets: 'auto',
    // Asset-Splitting für besseres Caching
    assets: '_astro',
    // Minify HTML
    format: 'directory',
  },
  
  // PERFORMANCE: HTML Kompression
  compressHTML: true,
  
  // PERFORMANCE: Vite-Optimierungen
  vite: {
    build: {
      // CSS Minification
      cssMinify: true,
      // JavaScript Minification mit esbuild (schneller als terser)
      minify: 'esbuild',
      // Code-Splitting für besseres Caching
      rollupOptions: {
        output: {
          // Chunk-Strategie für optimales Caching
          manualChunks: (id) => {
            // Vendor chunks separat für besseres Caching
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          // Asset Namen mit Hash für Cache-Busting
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'chunks/[name].[hash].js',
          entryFileNames: 'entry/[name].[hash].js',
        },
      },
      // PERFORMANCE: Target moderne Browser für kleinere Bundles
      target: 'es2020',
      // Source Maps nur in Dev
      sourcemap: false,
    },
    // PERFORMANCE: Optimiere Dependencies
    optimizeDeps: {
      include: ['astro'],
      exclude: [],
    },
    // PERFORMANCE: Server-Side Rendering Optimierung
    ssr: {
      noExternal: ['@astrojs/sitemap'],
    },
  },
  
  // PERFORMANCE: Output-Optimierung
  output: 'static', // Statische Seiten für maximale Performance
  
  // PERFORMANCE: Prefetch-Strategie
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport', // Prefetch nur sichtbare Links
  },
  
  // PERFORMANCE: Image-Optimierung
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
});
