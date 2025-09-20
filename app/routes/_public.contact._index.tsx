import { json } from "@remix-run/cloudflare";
import type { UIMatch } from "@remix-run/react";
import { Link, useLoaderData } from "@remix-run/react";
import { Breadcrumbs, Contact, Lead } from "~/components";
import { data } from "~/data/content-loader";

export const handle = {
	breadcrumb: (_match: UIMatch, currentPage: string) => (
		<>
			<Link to="/">About</Link>
			<span className="separator">/</span>
			<span>{currentPage}</span>
		</>
	),
};

export const loader = async () => {
	const { about } = data;

	return json({
		about,
	});
};

export default function Index() {
	const { about } = useLoaderData<typeof loader>();

	return (
		<>
			<Lead about={about} bgOnly={true} />
			<Breadcrumbs currentPage="Contact" />
			<Contact />
		</>
	);
}
