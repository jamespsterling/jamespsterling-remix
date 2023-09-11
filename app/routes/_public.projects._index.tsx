import { LinksFunction, json } from '@remix-run/cloudflare';
import { Link, RouteMatch, useLoaderData } from '@remix-run/react';
import { Breadcrumbs, Lead, Projects } from '~/components';
import { data } from '~/data/portfolio';

export const links: LinksFunction = () =>
  data.projects.map((project) => ({
    rel: 'preload',
    href: project.image.src,
    as: 'image',
    type: project.image.type,
  }));

export const handle = {
  breadcrumb: (_match: RouteMatch, currentPage: string) => (
    <>
      <Link to="/">About</Link>
      <span className="separator">/</span>
      <span>{currentPage}</span>
    </>
  ),
};

export const loader = async () => {
  const { about, projects } = data;

  return json({
    about,
    projects,
  });
};

export default function Index() {
  const { about, projects } = useLoaderData<typeof loader>();

  return (
    <>
      <Lead about={about} bgOnly={true} />
      <Breadcrumbs currentPage="Projects" />
      <Projects projects={projects} />
    </>
  );
}
