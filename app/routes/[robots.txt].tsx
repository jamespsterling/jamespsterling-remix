// https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt
export const loader = ({ request }: { request: Request }) => {
	const sitemapUrl = new URL("/sitemap.xml", request.url).href;
	const robotText = `User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: ${sitemapUrl}`;

	return new Response(robotText, {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
		},
	});
};
