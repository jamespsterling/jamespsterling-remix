import { json } from '@remix-run/cloudflare';
import { Link, RouteMatch, useLoaderData } from '@remix-run/react';
import { Error, Lead } from '~/components';
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
  const { about } = data;

  return json({
    about,
  });
};

export default function Index() {
  const { about } = useLoaderData<typeof loader>();

  return (
    <>
      <Lead about={about} bgOnly={true} narrow={true} />
      <Error />
    </>
  );
}
