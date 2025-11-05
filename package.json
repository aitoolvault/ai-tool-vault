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
      // Eigene Prioritäten für verschiedene Seiten
      customPages: [
        'https://aitoolvault.de/',
        'https://aitoolvault.de/tools',
      ],
      // Seiten ausschließen
      filter: (page) => 
        !page.includes('/admin') && 
        !page.includes('/api'),
      // Sprache hinzufügen
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
        },
      },
    }),
  ],
  // Build-Optimierungen
  build: {
    inlineStylesheets: 'auto',
  },
  // Kompression aktivieren
  compressHTML: true,
  // Vite-Optimierungen
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});
