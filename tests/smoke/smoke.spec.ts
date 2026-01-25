import fs from "node:fs";
import path from "node:path";
import { expect, test } from "@playwright/test";
import { data } from "../../app/data/portfolio";

const PRODUCTION_BASE_URL = "https://jamespsterling.com";
const ROUTES_DIR = path.join(process.cwd(), "app/routes");

const extractSitemapUrls = (xml: string) => {
	const urls: string[] = [];
	const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
	for (const match of matches) {
		if (match[1]) {
			urls.push(match[1]);
		}
	}
	return urls;
};

const kebabCase = (name: string) => name.toLocaleLowerCase().replaceAll(" ", "-");

const getRouteFiles = () => new Set(fs.readdirSync(ROUTES_DIR));

const buildRouteList = () => {
	const files = getRouteFiles();
	const routes: string[] = [];

	if (files.has("_public._index.tsx")) routes.push("/");
	if (files.has("_public.projects._index.tsx")) routes.push("/projects");
	if (files.has("_public.contact._index.tsx")) routes.push("/contact");
	if (files.has("_public.projects.$projectId._index.tsx")) {
		for (const project of data.projects) {
			routes.push(`/projects/${kebabCase(project.id)}`);
		}
	}
	if (files.has("_public.$.tsx")) routes.push("/not-found");
	if (files.has("[robots.txt].tsx")) routes.push("/robots.txt");
	if (files.has("[sitemap.xml].tsx")) routes.push("/sitemap.xml");

	return routes;
};

test("robots.txt responds", async ({ request }) => {
	const response = await request.get("/robots.txt");
	expect(response.ok()).toBeTruthy();
	const text = await response.text();
	expect(text).toContain("Sitemap:");
});

test("sitemap.xml responds and lists routes", async ({ request }) => {
	const response = await request.get("/sitemap.xml");
	expect(response.ok()).toBeTruthy();

	const xml = await response.text();
	const urls = extractSitemapUrls(xml);
	expect(urls.length).toBeGreaterThan(0);
});

test("all app routes respond", async ({ page }) => {
	const routes = buildRouteList().filter(
		(route) => route !== "/robots.txt" && route !== "/sitemap.xml"
	);
	expect(routes.length).toBeGreaterThan(0);

	const baseURL = test.info().project.use.baseURL as string | undefined;
	for (const route of routes) {
		const url = baseURL && route.startsWith("/") ? `${baseURL}${route}` : route;
		const localUrl = baseURL ? url.replace(PRODUCTION_BASE_URL, baseURL) : url;
		const pageResponse = await page.goto(localUrl, { waitUntil: "domcontentloaded" });
		expect(pageResponse?.ok()).toBeTruthy();
		await expect(page.locator("body")).toBeVisible();
	}
});
