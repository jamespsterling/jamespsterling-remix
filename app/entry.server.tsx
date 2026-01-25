/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import { renderToReadableStream } from "react-dom/server";
import type { AppLoadContext, EntryContext } from "react-router";
import { ServerRouter } from "react-router";
import { isBot } from "~/utils/bot-detection";

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	reactRouterContext: EntryContext,
	_loadContext: AppLoadContext
) {
	const body = await renderToReadableStream(
		<ServerRouter context={reactRouterContext} url={request.url} />,
		{
			signal: request.signal,
			onError(error: unknown) {
				// Log streaming rendering errors from inside the shell
				console.error(error);
				responseStatusCode = 500;
			},
		}
	);

	// Enhanced bot detection for 2025 - waits for complete HTML for bots
	if (isBot(request.headers.get("user-agent"))) {
		await body.allReady;
	}

	responseHeaders.set("Content-Type", "text/html");
	return new Response(body, {
		headers: responseHeaders,
		status: responseStatusCode,
	});
}
