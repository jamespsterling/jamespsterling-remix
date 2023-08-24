/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    cssnano: {},

    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {},
        }
      : {}),
  },
};
