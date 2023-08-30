import { faArrowLeft, faRoadCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from '@remix-run/react';
import { clsx } from 'clsx';

export default function Error() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="">
      <div className="container flex items-center px-6 py-24 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-5 font-medium text-sky-500 rounded-full bg-blue-50 dark:bg-stone-900">
            <FontAwesomeIcon
              icon={faRoadCircleExclamation}
              color="#6b7280"
              style={{ height: '2.75rem', width: '3rem' }}
            />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-stone-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-stone-500 dark:text-stone-400">
            The page you are looking for doesn't exist.
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              onClick={goBack}
              className={clsx([
                'flex',
                'items-center',
                'justify-center',
                'w-1/2',
                'px-5',
                'py-2',
                'text-sm',
                'text-stone-700',
                'transition-colors',
                'duration-200',
                'bg-white',
                'border',
                'rounded',
                'gap-x-2',
                'sm:w-auto',
                'dark:hover:bg-stone-800',
                'dark:bg-stone-900',
                'hover:bg-stone-100',
                'dark:text-stone-200',
                'dark:border-stone-700',
              ])}
            >
              <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#6b7280" />
              <span>Go back</span>
            </button>
            <Link to="/">
              <button
                className={clsx([
                  'w-1/2',
                  'px-5',
                  'py-2',
                  'text-sm',
                  'tracking-wide',
                  'text-white',
                  'transition-colors',
                  'duration-200',
                  'bg-sky-500',
                  'rounded',
                  'shrink-0',
                  'sm:w-auto',
                  'hover:bg-sky-600',
                  'dark:hover:bg-violet-500',
                  'dark:bg-violet-600',
                ])}
              >
                Take me home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
