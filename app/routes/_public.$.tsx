import type { UIMatch } from "react-router";
import { Link, useLoaderData } from "react-router";
import { Error, Lead } from "~/components";
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

	return Response.json(
		{
			about,
		},
		{ status: 404 }
	);
};

export default function Index() {
	const { about } = useLoaderData<typeof loader>();

	return (
		<>
			<Lead about={about} bgOnly={true} narrow={true} />
			<Error />
		</>
	);
}
