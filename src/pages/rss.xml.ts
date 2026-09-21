import type { APIRoute } from "astro";
import { getSiteSettings } from "emdash";

import { localeFromUrl, localePath, translate } from "../utils/i18n";
import { localizedPosts } from "../utils/localized-posts";
import { resolveBlogSiteIdentity } from "../utils/site-identity";

export const GET: APIRoute = async ({ site, url }) => {
	const locale = localeFromUrl(url);
	const siteUrl = site?.toString() || url.origin;
	const { siteTitle, siteTagline } = resolveBlogSiteIdentity(await getSiteSettings());

	const { entries: posts } = await localizedPosts(locale, {
		orderBy: { published_at: "desc" },
		limit: 20,
	});

	const items = posts
		.map((post) => {
			if (!post.data.publishedAt) return null;
			const pubDate = post.data.publishedAt.toUTCString();

			const postUrl = `${siteUrl}${localePath(`/${post.id}`, locale)}`;
			const title = escapeXml(post.data.title || "Untitled");
			const description = escapeXml(post.data.excerpt || "");

			return `    <item>
      <title>${title}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
    </item>`;
		})
		.filter(Boolean)
		.join("\n");

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(translate(locale, siteTitle))}</title>
    <description>${escapeXml(translate(locale, siteTagline))}</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}${localePath("/rss.xml", locale)}" rel="self" type="application/rss+xml"/>
    <language>${locale}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

	return new Response(rss, {
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};

const XML_ESCAPE_PATTERNS = [
	[/&/g, "&amp;"],
	[/</g, "&lt;"],
	[/>/g, "&gt;"],
	[/"/g, "&quot;"],
	[/'/g, "&apos;"],
] as const;

function escapeXml(str: string): string {
	let result = str;
	for (const [pattern, replacement] of XML_ESCAPE_PATTERNS) {
		result = result.replace(pattern, replacement);
	}
	return result;
}
