import {
  fa500px,
  faCodepen,
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from "@joojocoding/react-boxicons";
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
      label: 'GitHub',
    },
    {
      link: 'https://stackoverflow.com/users/4092449/jamespsterling',
      icon: faStackOverflow,
      label: 'StackOverflow',
    },
    {
      link: 'https://codepen.io/jamespsterling',
      icon: faCodepen,
      label: 'Codepen',
    },
    {
      link: 'https://www.linkedin.com/in/jamespsterling/',
      icon: faLinkedin,
      label: 'Linkedin',
    },
    {
      link: 'https://500px.com/jpspyro',
      icon: fa500px,
      label: '500px',
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
          'p-2',
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
        <Icon name="chevron-up" size="sm" />
      </button>
      <div className="container pt-6 mx-auto">
        <div className="mb-6 flex justify-center">
          {links.map((entry, i) => (
            <a
              className={clsx([
                'text-neutral-800',
                'dark:text-neutral-200',
                'hover:text-sky-700',
                'dark:hover:text-violet-700',
                'focus:text-sky-700',
                'dark:focus:text-violet-700',
                'mx-2',
                'transition',
                'duration-150',
                'ease-in-out',
              ])}
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={entry.label}
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
