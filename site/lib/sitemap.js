import DEFAULT_CONFIG from '../config/default_config';

const generateSitemapItem = (item, base = 'blog') => `
  <url>
    <loc>${DEFAULT_CONFIG.baseUrl}/${base}/${item.id}</loc>
    <lastmod>${new Date(item.date).toISOString().slice(0,10)}</lastmod>
    <changefreq>never</changefreq>
  </url>
`;

const generateSitemap = (posts = []) => `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${DEFAULT_CONFIG.baseUrl}/</loc>
      <changefreq>weekly</changefreq>
    </url>
    <url>
      <loc>${DEFAULT_CONFIG.baseUrl}/blog</loc>
      <lastmod>${new Date(posts[0].date).toISOString().slice(0,10)}</lastmod>
      <changefreq>weekly</changefreq>
    </url>
    ${posts.map((item) => generateSitemapItem(item)).join('')}
  </urlset>
`;

export default generateSitemap;
