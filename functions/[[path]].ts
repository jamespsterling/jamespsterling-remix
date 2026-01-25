import { createPagesFunctionHandler } from "@react-router/cloudflare";

import * as build from "../build/server/index.js";

export const onRequest = createPagesFunctionHandler({
	build,
	getLoadContext: (context) => ({ env: context.env }),
	mode: process.env.NODE_ENV,
});
