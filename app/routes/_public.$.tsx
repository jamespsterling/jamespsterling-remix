import { json } from '@remix-run/cloudflare';
import { Link, RouteMatch, useLoaderData } from '@remix-run/react';
import { Breadcrumbs, Error, Lead } from '~/components';
import { data } from '~/data/portfolio';

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
  return json(data);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Lead about={data.about} bgOnly={true} narrow={true} />
      <Error />
    </>
  );
}
