import {
  ActionArgs,
  redirect,
  type LinksFunction,
  type V2_MetaFunction,
} from '@remix-run/cloudflare';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { useEffect } from 'react';
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Lead,
  Menu,
  Projects,
  Skills,
} from '~/components';
import { userPrefs } from '~/cookies';
import { loader as darkMode } from '~/data/loader/dark-mode';
import dark from '~/styles/dark.css';
import fireflies from '~/styles/fireflies.css';
import header from '~/styles/header.css';
import styles from '~/styles/styles.css';

export const links: LinksFunction = () => [
  {
    rel: "preload",
    href: "/img/lead-bg-7.jpg",
    as: "image",
    type: "image/jpg",
  },
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
    integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
    crossOrigin: 'anonymous',
  },
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: header },
  { rel: 'stylesheet', href: fireflies },
  { rel: 'stylesheet', href: dark },

  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' },
  {
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
    integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay',
    crossOrigin: 'anonymous',
  },
];

export const meta: V2_MetaFunction = () => {
  return [{ title: 'James Sterling' }, { name: 'description', content: 'Portfolio' }];
};

export const handle = {
  scripts: () => [{ src: '/scripts/scripts.js' }],
  // TODO: google analytics
};

export const loader = darkMode;

export const action = async ({ request }: ActionArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await userPrefs.parse(cookieHeader)) || {};
  const bodyParams = await request.formData();
  cookie.darkMode = bodyParams.get('darkMode') ?? 'disabled';

  return redirect('/', {
    headers: {
      'Set-Cookie': await userPrefs.serialize(cookie),
    },
  });
}

export default function Index() {
  const { darkMode } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (darkMode === 'enabled') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const fetcher = useFetcher();

  return (
    <>
      <Menu
        darkModeEnabled={darkMode === 'enabled'}
        toggleDarkMode={async () => {
          fetcher.submit(
            { darkMode: darkMode === 'enabled' ? 'disabled' : 'enabled' },
            { method: 'post' }
          );
        }}
      />
      <Lead />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
