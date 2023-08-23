import {
  fa500px,
  faCodepen,
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from '@remix-run/react';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const links = [
    {
      link: 'https://github.com/jamespsterling',
      icon: faGithub,
    },
    {
      link: 'https://stackoverflow.com/users/4092449/jamespsterling',
      icon: faStackOverflow,
    },
    {
      link: 'https://codepen.io/jamespsterling',
      icon: faCodepen,
    },
    {
      link: 'https://www.linkedin.com/in/jamespsterling/',
      icon: faLinkedin,
    },
    {
      link: 'https://500px.com/jpspyro',
      icon: fa500px,
    },
  ];

  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600">
      <button
        type="button"
        onClick={() => {
          navigate(pathname);
        }}
        className={clsx(showButton ? `inline-block` : `hidden`, [
          'fixed',
          'bottom-[40px]',
          'left-[40px]',
          'p-3',
          'bg-sky-600',
          'dark:bg-violet-600',
          'text-white',
          'font-medium',
          'text-xs',
          'leading-tight',
          'uppercase',
          'rounded-full',
          'shadow-md',
          'hover:bg-sky-700',
          'dark:hover:bg-violet-700',
          'hover:shadow-lg',
          'focus:bg-sky-700',
          'dark:focus:bg-violet-700',
          'focus:shadow-lg',
          'focus:outline-none',
          'focus:ring-0',
          'active:bg-sky-800',
          'dark:active:bg-violet-800',
          'active:shadow-lg',
          'transition',
          'duration-150',
          'ease-in-out',
        ])}
      >
        <FontAwesomeIcon icon={faChevronUp} size="lg" />
      </button>
      <div className="container pt-6 mx-auto">
        <div className="mb-6 flex justify-center">
          {links.map((entry, i) => (
            <a
              className="text-neutral-800 dark:text-neutral-200 icon-link mx-2"
              href={entry.link}
              target="_blank"
              rel="noopener"
              key={i}
            >
              <FontAwesomeIcon icon={entry.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-neutral-300 p-4 text-sm text-center text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200">
        Copyright &copy; {new Date().getFullYear()} James Sterling
      </div>
    </footer>
  );
}
