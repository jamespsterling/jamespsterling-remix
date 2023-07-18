import { createCookie } from '@remix-run/cloudflare';

export const userPrefs = createCookie('user-prefs', {
  maxAge: 10 * 365 * 24 * 60 * 60, // one year
  sameSite: 'strict',
});
