import type { Education } from "~/data/types";

export default function Education({ education }: { education: Education }) {
	return (
		<div id="education">
			<h2 className="heading mb-8 md:mb-10">Education</h2>
			<div className="education-block shadow-large">
				<div className="education-header">
					<img src={education.university.logo.src} alt={education.university.logo.alt} />
					<div className="education-text-header">
						<h3>
							<a target="_blank" rel="noopener noreferrer" href={education.university.link}>
								{education.university.name}
							</a>
						</h3>
						<h4>{education.university.degree}</h4>
						<h5
							className="mb-1"
							dangerouslySetInnerHTML={{ __html: education.university.concentration }}
						></h5>
						<p>
							<b>Project: </b> {education.project}
						</p>
					</div>
				</div>
				<span className="education-date">{education.dates}</span>
			</div>
		</div>
	);
}
