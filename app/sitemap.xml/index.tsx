
import { Platform } from 'react-native';

// This function tells Expo to export raw XML instead of an HTML page structure
export async function GET() {
  const baseUrl = "https://innovo5477.com";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${baseUrl}</loc><lastmod>2026-06-19</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>${baseUrl}/History</loc><lastmod>2026-06-19</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>${baseUrl}/Sponsors</loc><lastmod>2026-06-19</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>${baseUrl}/meetTeam</loc><lastmod>2026-06-19</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>
</urlset>`.trim();

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}

// Fallback empty component so Expo compiler doesn't throw a build warning
export default function SitemapStaticBuildBypass() {
  return null;
}
