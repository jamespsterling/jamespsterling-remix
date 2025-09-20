import { json } from "@remix-run/cloudflare";
import { useLoaderData, useMatches } from "@remix-run/react";
import { About, Certifications, Education, Experience, Lead, Skills } from "~/components";
import { data } from "~/data/portfolio";

export const loader = async () => {
	const { about, experience, education, skills, certifications, technologies } = data;

	return json({
		about,
		experience,
		education,
		certifications,
		technologies,
		skills,
	});
};

export default function Index() {
	const { about, experience, education, certifications, technologies, skills } =
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
			<Skills technologies={technologies} skills={skills} />
		</>
	);
}
