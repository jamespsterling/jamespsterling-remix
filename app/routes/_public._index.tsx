import { json } from "@remix-run/cloudflare";
import { useLoaderData, useMatches } from "@remix-run/react";
import { About, Certifications, Education, Experience, Lead, Skills } from "~/components";
import { data } from "~/data/content-loader";
import type { Technology } from "~/data/types";

export const loader = async () => {
	const { about, experience, education, skills, certifications } = data;

	return json({
		about,
		experience,
		education,
		certifications,
		technologies: skills
			?.map((skillId) => data.technologies.find((technology) => skillId === technology.id))
			.filter((i): i is Technology => i !== undefined),
	});
};

export default function Index() {
	const { about, experience, education, certifications, technologies } =
		useLoaderData<typeof loader>();
	const [{ data: rootData }] = useMatches();
	const darkMode = (rootData as any)?.darkMode;

	return (
		<>
			<Lead about={about} />
			<About about={about} />
			<Experience experience={experience} darkMode={darkMode === "enabled"} />
			<Education education={education} />
			<Certifications certifications={certifications} />
			<Skills technologies={technologies} />
		</>
	);
}
