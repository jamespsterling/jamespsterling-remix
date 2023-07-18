import { LoaderArgs, json, type LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from '@remix-run/react';
import { useEffect } from 'react';
import { ExternalScripts } from 'remix-utils';
import { userPrefs } from '~/cookies';
import * as gtag from '~/utils/gtags.client';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

type ContextHack = { context: { [key: string]: any; } };

export const loader = async ({ request, context }: LoaderArgs & ContextHack) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userPrefs.parse(cookieHeader)) || {};

  return json({
    env: context.env.ENV,
    gaTrackingId: context.env.GA_TRACKING_ID,
    darkMode: cookie.darkMode,
  });
};

export default function App() {
  const location = useLocation();
  const { env, gaTrackingId, darkMode } = useLoaderData<typeof loader>();

  useEffect(() => {
    console.log('gaTrackingId', gaTrackingId);
    console.log('env', env);

    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [env, location, gaTrackingId]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={darkMode === 'enabled' ? 'dark' : ''}>
        {env === 'development' || !gaTrackingId ? null : (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <ExternalScripts />
        <LiveReload />
      </body>
    </html>
  );
}
