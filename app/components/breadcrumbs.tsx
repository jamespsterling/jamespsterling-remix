import { useMatches } from "@remix-run/react";

export default function Breadcrumbs({ currentPage }: { currentPage: string }) {
	const matches = useMatches();

	return (
		<div id="breadcrumbs">
			{matches
				// skip routes that don't have a breadcrumb
				.filter(
					(match) =>
						match.handle &&
						typeof match.handle === "object" &&
						match.handle !== null &&
						"breadcrumb" in match.handle
				)
				// render breadcrumbs!
				.map((match, index) => (
					<span key={index}>
						{match.handle &&
							typeof match.handle === "object" &&
							match.handle !== null &&
							"breadcrumb" in match.handle &&
							typeof match.handle.breadcrumb === "function" &&
							match.handle.breadcrumb(match, currentPage)}
					</span>
				))}
		</div>
	);
}
