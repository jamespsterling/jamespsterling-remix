import { useLoaderData, useMatches } from "react-router";
import { About, Certifications, Education, Experience, Lead, Skills } from "~/components";
import { data } from "~/data/portfolio";

export const loader = async () => {
	const { about, experience, education, skills, certifications, technologies } = data;

	return Response.json({
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
	const [rootMatch] = useMatches();
	const darkMode = (rootMatch?.data as { darkMode?: string } | undefined)?.darkMode;

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
