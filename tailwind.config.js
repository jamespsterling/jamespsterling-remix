/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    container: {
      minWidth: {
        sm: '460px',
      },
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
