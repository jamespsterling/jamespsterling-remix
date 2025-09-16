import { json } from "@remix-run/cloudflare";
import { userPrefs } from "~/cookies";

export const loader = async ({ request }: { request: Request }) => {
	const cookieHeader = request.headers.get("Cookie");
	const cookie = (await userPrefs.parse(cookieHeader)) || {};

	return json({ darkMode: cookie.darkMode });
};
