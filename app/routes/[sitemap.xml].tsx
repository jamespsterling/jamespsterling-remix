import { data } from "~/data/portfolio";

export const staticRoutes = [
	{ to: "/", text: "About" },
	{ to: "/projects", text: "Projects" },
	{ to: "/contact", text: "Contact" },
];

export const toXmlSitemap = (urls: string[]) => {
	const urlsAsXml = urls
		.map(
			(url: string) => `
<url>
  <loc>${url}</loc>
  <lastmod>${data.updated}</lastmod>
</url>
  `
		)
		.join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      ${urlsAsXml}
    </urlset>
  `;
};

// https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
export const loader = async ({ request }: { request: Request }) => {
	try {
		const { projects } = data;
		const origin = new URL(request.url).origin;

		const sitemap = toXmlSitemap([
			...staticRoutes.map(({ to }) => new URL(to, origin).href),
			...projects.map(({ id }) => new URL(`/projects/${id}`, origin).href),
		]);

		return new Response(sitemap, {
			status: 200,
			headers: {
				"Content-Type": "application/xml",
				"X-Content-Type-Options": "nosniff",
				"Cache-Control": "public, max-age=3600",
			},
		});
	} catch (e) {
		console.error(e);
		throw new Response("Internal Server Error", { status: 500 });
	}
};
