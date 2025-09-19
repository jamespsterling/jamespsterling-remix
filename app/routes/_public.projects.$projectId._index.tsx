import { json } from "@remix-run/cloudflare";
import type { UIMatch } from "@remix-run/react";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { Article, Breadcrumbs, Lead, Project } from "~/components";
import MarkdownArticle from "~/components/markdown-article";
import { iotEventsMarkdown, portfolioMarkdown } from "~/data/articles/markdown-content";
import { data } from "~/data/portfolio";
import { parseMarkdown } from "~/utils/markdown";

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

// Map project IDs to their markdown content
const MARKDOWN_CONTENT_MAP: Record<string, string> = {
	portfolio: portfolioMarkdown,
	"iot-events-app": iotEventsMarkdown,
} as const;

export const loader = async ({ params }: { params: { projectId: string } }) => {
	const { projectId } = params;
	const project = data.projects.find((p) => p.id === projectId);
	const technologies =
		project?.technologies
			?.map((techKey) => data.technologies.find((s) => s.id === techKey) ?? null)
			.filter((f) => f !== null) ?? [];

	// Load markdown article if project has one
	let markdownArticle = null;
	if (project?.hasArticle) {
		const markdownContent = MARKDOWN_CONTENT_MAP[projectId];
		if (markdownContent) {
			try {
				markdownArticle = parseMarkdown(markdownContent);
			} catch (error) {
				console.error(`Failed to parse markdown for project ${projectId}:`, error);
			}
		}
	}

	return json({ project, technologies, markdownArticle });
};

export default function Index() {
	const { project, technologies, markdownArticle } = useLoaderData<typeof loader>();
	const navigate = useNavigate();

	if (!project || !technologies) {
		navigate("/projects");
		return null;
	}

	return (
		<>
			<Lead about={data.about} bgOnly={true} narrow={true} />
			<Breadcrumbs currentPage={project.name} />
			<Project project={project} technologies={technologies} />
			{project?.hasArticle && markdownArticle && (
				<MarkdownArticle content={markdownArticle.content} />
			)}
			{project?.hasArticle && !markdownArticle && <Article component={project.id} />}
		</>
	);
}
