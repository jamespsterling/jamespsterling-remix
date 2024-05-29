import { json } from '@remix-run/cloudflare';
import type { RouteMatch} from '@remix-run/react';
import { Link, useLoaderData, useNavigate } from '@remix-run/react';
import { Article, Breadcrumbs, Lead, Project } from '~/components';
import { data } from '~/data/portfolio';

export const handle = {
  breadcrumb: (_match: RouteMatch, currentPage: string) => (
    <>
      <Link to="/">About</Link>
      <span className="separator">/</span>
      <Link to="/projects">Projects</Link>
      <span className="separator">/</span>
      <span>{currentPage}</span>
    </>
  ),
};

export const loader = async ({ params }) => {
  const { projectId } = params;
  const project = data.projects.find((p) => p.id === projectId);
  const technologies =
    project?.technologies
      ?.map((techKey) => data.technologies.find((s) => s.id === techKey) ?? null)
      .filter((f) => f !== null) ?? [];

  return json({ project, technologies });
};

export default function Index() {
  const { project, technologies } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  if (!project || !technologies) {
    navigate('/projects');
    return null;
  }

  return (
    <>
      <Lead about={data.about} bgOnly={true} narrow={true} />
      <Breadcrumbs currentPage={project.name} />
      <Project project={project} technologies={technologies} />
      {project?.hasArticle && <Article component={project.id} />}
    </>
  );
}
