import type { UIMatch } from "react-router";
import { Link, redirect, useLoaderData } from "react-router";
import { Article, Breadcrumbs, Lead, Project } from "~/components";
import { data } from "~/data/portfolio";

export const handle = {
	breadcrumb: (_match: UIMatch, currentPage: string) => (
		<>
			<Link to="/">About</Link>
			<span className="separator">/</span>
			<Link to="/projects">Projects</Link>
			<span className="separator">/</span>
			<span>{currentPage}</span>
		</>
	),
};

export const loader = async ({ params }: { params: { projectId: string } }) => {
	const { projectId } = params;
	const project = data.projects.find((p) => p.id === projectId);
	if (!project) {
		return redirect("/projects");
	}
	const technologies =
		project?.technologies
			?.map((techKey) => data.technologies.find((s) => s.id === techKey) ?? null)
			.filter((f) => f !== null) ?? [];

	return Response.json({ project, technologies });
};

export default function Index() {
	const { project, technologies } = useLoaderData<typeof loader>();
	if (!project || !technologies) return null;

	return (
		<>
			<Lead about={data.about} bgOnly={true} narrow={true} />
			<Breadcrumbs currentPage={project.name} />
			<Project project={project} technologies={technologies} />
			{project?.hasArticle && <Article component={project.id} />}
		</>
	);
}
