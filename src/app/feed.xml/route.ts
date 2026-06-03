import { blogPosts, seoConfig } from "@/lib/site";

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function GET() {
  const siteUrl = (seoConfig.siteUrl || "https://havenadvisors.us").replace(/\/$/, "");
  const items = [...blogPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      return `
        <item>
          <title>${xmlEscape(post.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${xmlEscape(post.seoDescription || post.excerpt)}</description>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${xmlEscape(seoConfig.title)}</title>
        <link>${siteUrl}</link>
        <description>${xmlEscape(seoConfig.description)}</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
