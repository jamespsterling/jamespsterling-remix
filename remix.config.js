/** @type {import('@remix-run/dev').AppConfig} */
export default {
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['**/.*'],
  server: './server.ts',
  serverBuildPath: 'functions/[[path]].js',
  serverConditions: ['worker'],
  serverDependenciesToBundle: 'all',
  serverMainFields: ['browser', 'module', 'main'],
  serverMinify: true,
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  tailwind: true,
  postcss: true,
  optimize: {
    bundle: {
      external: {
        include: ['./node_modules/@fontsource/open-sans/files/**/*'],
      },
    },
  },
  future: {},
};
