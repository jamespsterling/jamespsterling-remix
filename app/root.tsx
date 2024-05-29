import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/cloudflare';
import { json, redirect } from '@remix-run/cloudflare';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from '@remix-run/react';
import { useEffect } from 'react';
import { userPrefs } from '~/cookies';
import * as gtag from '~/utils/gtags.client';

type ContextHack = { context: { [key: string]: any } };

export const loader = async ({ request, context }: LoaderFunctionArgs & ContextHack) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userPrefs.parse(cookieHeader)) || {};
  return json({
    env: context.cloudflare.ENV,
    gaTrackingId: context.cloudflare.GA_TRACKING_ID,
    darkMode: cookie.darkMode,
  });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userPrefs.parse(cookieHeader)) || {};
  const bodyParams = await request.formData();
  cookie.darkMode = bodyParams.get('darkMode') ?? 'disabled';
  const path = bodyParams.get('pathname')?.toString() ?? '/';

  return redirect(path, {
    headers: {
      'Set-Cookie': await userPrefs.serialize(cookie),
    },
  });
};

export default function App() {
  const location = useLocation();
  const { env, gaTrackingId, darkMode } = useLoaderData<typeof loader>();

  useEffect(() => {
    // https://github.com/remix-run/examples/blob/main/google-analytics/app/root.tsx
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
              
                gtag('config', 'G-JKJJVMPEQ6');
              `,
              }}
            />
          </>
        )}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
