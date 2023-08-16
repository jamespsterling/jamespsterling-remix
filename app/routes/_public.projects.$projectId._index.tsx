import { json } from '@remix-run/cloudflare';
import { Link, RouteMatch, useLoaderData, useNavigate, useParams } from '@remix-run/react';
import { Breadcrumbs, Lead, Project } from '~/components';
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

export const loader = async () => {
  return json(data);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const { projectId } = useParams();

  const project = data.projects.find((p) => p.id === projectId);

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <>
      <Lead about={data.about} bgOnly={true} narrow={true} />
      <Breadcrumbs currentPage={project.name} />
      <Project project={project} />
    </>
  );
}
