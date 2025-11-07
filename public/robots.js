export async function GET() {
  const robotsTxt = `# AI Tool Vault - Robots.txt
# Optimiert für beste Crawl-Effizienz

User-agent: *
Allow: /

# Priorität für wichtige Seiten
Allow: /tools/
Allow: /blog/
Allow: /vergleich/

# Sitemap Location
Sitemap: https://aitoolvault.de/sitemap.xml

# Google Bot - Volle Geschwindigkeit
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bing Bot
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# AI Bots - Kontrollierter Zugang
User-agent: GPTBot
Crawl-delay: 10
Allow: /blog/
Allow: /tools/

User-agent: CCBot
Crawl-delay: 10
Allow: /blog/

User-agent: ChatGPT-User
Allow: /

User-agent: anthropic-ai
Allow: /

# Bad Bots blockieren für Performance
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // PERFORMANCE: Cache für 7 Tage
      'Cache-Control': 'public, max-age=604800, immutable',
    },
  });
}
