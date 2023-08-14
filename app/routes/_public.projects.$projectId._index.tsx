import { Link, RouteMatch, useNavigate, useParams } from '@remix-run/react';
import { Lead, Project, Breadcrumbs } from '~/components';
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

export default function Index() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const project = data.projects.find((p) => p.id === projectId);

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <>
      <Lead bgOnly={true} narrow={true} />
      <Breadcrumbs currentPage={project.name} />
      <Project project={project} />
    </>
  );
}
