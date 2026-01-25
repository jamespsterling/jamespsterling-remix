import { createCookie } from "react-router";

export const userPrefs = createCookie("user-prefs", {
	maxAge: 10 * 365 * 24 * 60 * 60, // one year
	httpOnly: true,
	sameSite: "strict",
	secure: process.env.NODE_ENV === "production",
});
