import type { LinksFunction, MetaFunction } from "react-router";
import { Outlet, useFetcher, useLoaderData, useLocation } from "react-router";
import { Footer, Menu } from "~/components";
import { loader as darkMode } from "~/data/loader/dark-mode";
import tailwindCssUrl from "~/styles/tailwind.css?url";

export const links: LinksFunction = () => [
	{
		rel: "preload",
		href: "/img/lead-bg-10.webp",
		as: "image",
		type: "image/webp",
	},
	{
		rel: "preload",
		href: "/img/lead-bg-9.webp",
		as: "image",
		type: "image/webp",
	},
	{
		rel: "preload",
		href: "/img/headshot.webp",
		as: "image",
		type: "image/webp",
	},
	{
		rel: "stylesheet",
		href: tailwindCssUrl,
	},
];

export const meta: MetaFunction = () => {
	return [{ title: "James Sterling" }, { name: "description", content: "Portfolio" }];
};

export const loader = darkMode;

export default function Index() {
	const { darkMode } = useLoaderData<typeof loader>();
	const { pathname } = useLocation();

	const fetcher = useFetcher();

	return (
		<>
			<div className="content">
				<Menu
					darkModeEnabled={darkMode === "enabled"}
					toggleDarkMode={async () => {
						fetcher.submit(
							{ darkMode: darkMode === "enabled" ? "disabled" : "enabled", pathname },
							{ method: "post" }
						);
					}}
				/>
				<Outlet />
			</div>
			<div className="footer">
				<Footer />
			</div>
		</>
	);
}
