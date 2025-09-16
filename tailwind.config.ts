import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/js/**/*.js"],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [require("tw-elements/plugin.cjs")],
} satisfies Config;
