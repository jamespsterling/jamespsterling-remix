import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')],
} satisfies Config;
