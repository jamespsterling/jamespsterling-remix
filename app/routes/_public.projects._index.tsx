import { LinksFunction } from '@remix-run/cloudflare';
import { Link, RouteMatch } from '@remix-run/react';
import { Lead, Projects, Breadcrumbs } from '~/components';
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

export default function Index() {
  return (
    <>
      <Lead bgOnly={true} />
      <Breadcrumbs currentPage="Projects" />
      <Projects />
    </>
  );
}
