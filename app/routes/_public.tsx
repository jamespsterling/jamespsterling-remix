import FontStyles from '@fontsource/open-sans/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import IconStyles from '@fortawesome/fontawesome-svg-core/styles.css';
import { faAngular, faNodeJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faLaptopCode, fas } from '@fortawesome/free-solid-svg-icons';
import { type LinksFunction, type V2_MetaFunction } from '@remix-run/cloudflare';
import { Outlet, useFetcher, useLoaderData, useLocation } from '@remix-run/react';
import { useEffect } from 'react';
import { Footer, Menu } from '~/components';
import { loader as darkMode } from '~/data/loader/dark-mode';
import Styles from '~/styles/styles.css';

library.add(fas, faReact, faAngular, faPhp, faNodeJs, faCode, faLaptopCode);

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    href: '/img/lead-bg-7.jpg',
    as: 'image',
    type: 'image/jpeg',
  },
  {
    rel: 'preload',
    href: '/img/lead-bg-8.jpg',
    as: 'image',
    type: 'image/jpeg',
  },
  { rel: 'stylesheet', href: Styles },
  {
    rel: 'stylesheet',
    href: FontStyles,
  },
  {
    rel: 'stylesheet',
    href: IconStyles,
  },
];

export const meta: V2_MetaFunction = () => {
  return [{ title: 'James Sterling' }, { name: 'description', content: 'Portfolio' }];
};

export const loader = darkMode;

export default function Index() {
  const { darkMode } = useLoaderData<typeof loader>();
  const { pathname } = useLocation();

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
      <div className="content">
        <Menu
          darkModeEnabled={darkMode === 'enabled'}
          toggleDarkMode={async () => {
            fetcher.submit(
              { darkMode: darkMode === 'enabled' ? 'disabled' : 'enabled', pathname },
              { method: 'post' }
            );
          }}
        />
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
