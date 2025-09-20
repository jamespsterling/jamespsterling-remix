import type { Skills, Technology } from "~/data/types";
import { Technology as Tech } from ".";

export default function Skills({
	technologies,
	skills,
}: {
	technologies: Technology[];
	skills: Skills;
}) {
	// Helper function to get technology by id
	const getTechnologyById = (id: string) => technologies.find((tech) => tech.id === id);

	// Filter technologies for core and additional skills
	const coreTechnologies = skills.core
		.map((id) => getTechnologyById(id))
		.filter(Boolean) as Technology[];

	const additionalTechnologies = skills.additional
		.map((id) => getTechnologyById(id))
		.filter(Boolean) as Technology[];

	return (
		<div id="skills">
			<h2 className="heading mb-8 md:mb-10">Skills</h2>

			{/* Core Skills Section */}
			<div className="core-skills mb-8">
				<h3 className="text-lg font-semibold mb-4 text-center">Core Technologies</h3>
				<ul className="core-skills-list">
					{coreTechnologies.map((technology, i) => (
						<li key={i} className="core-skill">
							<Tech technology={technology} />
						</li>
					))}
				</ul>
			</div>

			{/* Additional Skills Section */}
			<div className="additional-skills">
				<h3 className="text-lg font-semibold mb-4 text-center">Additional Technologies</h3>
				<ul className="additional-skills-list">
					{additionalTechnologies.map((technology, i) => (
						<li key={i} className="additional-skill">
							<Tech technology={technology} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
