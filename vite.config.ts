import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		cloudflareDevProxy({
			getLoadContext({ context }) {
				return { env: context.cloudflare.env };
			},
		}),
		tsconfigPaths(),
		reactRouter(),
	],
	server: {
		port: 8787,
	},
});
