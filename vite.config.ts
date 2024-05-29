import { vitePlugin as remix, cloudflareDevProxyVitePlugin } from '@remix-run/dev';
import { defineConfig } from 'vite';
import { installGlobals } from '@remix-run/node';
import tsconfigPaths from 'vite-tsconfig-paths';

installGlobals();

export default defineConfig({
  plugins: [cloudflareDevProxyVitePlugin(), remix(), tsconfigPaths()],
});
