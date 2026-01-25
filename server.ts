import { logDevReady } from "react-router";
import { createPagesFunctionHandler } from "@react-router/cloudflare";
import * as build from "@react-router/dev/server-build";

if (process.env.NODE_ENV === "development") {
	logDevReady(build);
}

// Context: https://github.com/remix-run/remix/issues/6868
export const onRequest = createPagesFunctionHandler({
	build,
	getLoadContext: (context) => ({ env: context.env }),
	mode: process.env.NODE_ENV,
});
