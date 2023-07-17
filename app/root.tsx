import { type LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { ExternalScripts } from 'remix-utils';
import { loader as darkMode } from '~/data/loader/dark-mode';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export const loader = darkMode;

export default function App() {
  const { darkMode } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={darkMode === 'enabled' ? 'dark' : ''}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <ExternalScripts />
        <LiveReload />
      </body>
    </html>
  );
}
