import { getCollection } from 'astro:content';

export async function GET() {
  const tools = await getCollection('tools');
  const baseUrl = 'https://aitoolvault.de';
  const now = new Date().toISOString().split('T')[0];
  
  // Alle URLs mit Prioritäten sammeln
  const urls = [
    { url: '/', priority: '1.0', changefreq: 'daily', lastmod: now },
    { url: '/tools', priority: '0.9', changefreq: 'daily', lastmod: now },
    { url: '/blog', priority: '0.8', changefreq: 'weekly', lastmod: now },
    
    // Blog Posts - Hohe Priorität für SEO
    { url: '/blog/beste-ki-tools-2025', priority: '0.9', changefreq: 'weekly', lastmod: now },
    { url: '/blog/chatgpt-vs-claude', priority: '0.9', changefreq: 'weekly', lastmod: now },
    { url: '/blog/ki-bildgenerierung-tools', priority: '0.9', changefreq: 'weekly', lastmod: now },
    
    // Vergleichsseiten - Wichtig für Traffic
    { url: '/vergleich/chatgpt-vs-claude', priority: '0.8', changefreq: 'weekly', lastmod: now },
    { url: '/vergleich/chatgpt-vs-gemini', priority: '0.8', changefreq: 'weekly', lastmod: now },
    { url: '/vergleich/claude-vs-gemini', priority: '0.8', changefreq: 'weekly', lastmod: now },
    { url: '/vergleich/midjourney-vs-dalle', priority: '0.8', changefreq: 'weekly', lastmod: now },
    { url: '/vergleich/jasper-vs-copy-ai', priority: '0.7', changefreq: 'weekly', lastmod: now },
    
    // Rechtliches
    { url: '/impressum', priority: '0.3', changefreq: 'yearly', lastmod: now },
    { url: '/datenschutz', priority: '0.3', changefreq: 'yearly', lastmod: now },
    { url: '/kontakt', priority: '0.5', changefreq: 'monthly', lastmod: now },
  ];
  
  // Tool-Seiten hinzufügen mit dynamischen Prioritäten
  tools.forEach(tool => {
    // Featured Tools bekommen höhere Priorität
    const priority = tool.data.featured ? '0.9' : 
                    tool.data.rating >= 4.5 ? '0.8' : '0.7';
    
    urls.push({
      url: `/tools/${tool.slug}`,
      priority,
      changefreq: 'weekly',
      lastmod: now
    });
  });
  
  // XML generieren
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(({ url, priority, changefreq, lastmod }) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // PERFORMANCE: Cache für 1 Stunde
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      // Compression hint
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
