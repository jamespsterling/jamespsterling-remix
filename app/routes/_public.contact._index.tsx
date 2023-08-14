import { Link, RouteMatch } from '@remix-run/react';
import { Lead, Contact, Breadcrumbs } from '~/components';

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
      <Breadcrumbs currentPage="Contact" />
      <Contact />
    </>
  );
}
