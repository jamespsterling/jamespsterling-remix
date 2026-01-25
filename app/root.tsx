import { useEffect } from "react";
import type {
	ActionFunctionArgs,
	HeadersFunction,
	LinksFunction,
	LoaderFunctionArgs,
} from "react-router";
import {
	Links,
	Meta,
	Outlet,
	redirect,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useLocation,
} from "react-router";
import { userPrefs } from "~/cookies";
import * as gtag from "~/utils/gtags.client";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: "/styles/styles.css" }];

type EnvVars = {
	ENV?: string;
	GA_TRACKING_ID?: string;
};

type ContextHack = { context: { env?: EnvVars } };

export const loader = async ({ request, context }: LoaderFunctionArgs & ContextHack) => {
	const cookieHeader = request.headers.get("Cookie");
	const cookie = (await userPrefs.parse(cookieHeader)) || {};
	const envVars = context?.env ?? {};

	return Response.json({
		env: envVars.ENV ?? null,
		gaTrackingId: envVars.GA_TRACKING_ID ?? null,
		darkMode: cookie.darkMode,
	});
};

export const action = async ({ request }: ActionFunctionArgs) => {
	const cookieHeader = request.headers.get("Cookie");
	const cookie = (await userPrefs.parse(cookieHeader)) || {};
	const bodyParams = await request.formData();
	cookie.darkMode = bodyParams.get("darkMode") ?? "disabled";
	const path = bodyParams.get("pathname")?.toString() ?? "/";

	return redirect(path, {
		headers: {
			"Set-Cookie": await userPrefs.serialize(cookie),
		},
	});
};

export const headers: HeadersFunction = () => {
	const headers = new Headers();
	headers.set("X-Content-Type-Options", "nosniff");
	headers.set("X-Frame-Options", "DENY");
	headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
	headers.set("X-DNS-Prefetch-Control", "off");
	headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
	if (process.env.NODE_ENV === "production") {
		headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
	}
	return headers;
};

export default function App() {
	const location = useLocation();
	const { env, gaTrackingId, darkMode } = useLoaderData<typeof loader>();

	useEffect(() => {
		// https://github.com/remix-run/examples/blob/main/google-analytics/app/root.tsx
		if (gaTrackingId?.length) {
			gtag.pageview(location.pathname, gaTrackingId);
		}
	}, [location, gaTrackingId]);

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className={darkMode === "enabled" ? "dark" : ""}>
				{env === "development" || !gaTrackingId ? null : (
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
