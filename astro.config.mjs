import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://aitoolvault.de',
  integrations: [
    tailwind(),
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
