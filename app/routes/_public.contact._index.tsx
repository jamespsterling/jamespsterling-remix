import type { UIMatch } from "react-router";
import { Link, useLoaderData } from "react-router";
import { Breadcrumbs, Contact, Lead } from "~/components";
import { data } from "~/data/portfolio";

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

	return Response.json({
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
