import { faBars, faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@remix-run/react';

type Props = {
  toggleDarkMode(): void;
  darkModeEnabled: boolean;
};

export default function Menu({ toggleDarkMode, darkModeEnabled }: Props) {
  return (
    <>
      <div
        id="mobile-menu-open"
        className="shadow-large"
        onClick={() => {
          document.querySelector('body')?.classList.add('active');
          document.querySelector('header')?.classList.add('active');
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <header>
        <div
          id="mobile-menu-close"
          onClick={() => {
            document.querySelector('body')?.classList.remove('active');
            document.querySelector('header')?.classList.remove('active');
          }}
        >
          <span>Close</span> <FontAwesomeIcon icon={faTimes} />
        </div>
        <ul id="menu" className="shadow">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/#experience" preventScrollReset={true}>Experience</Link>
          </li>
          <li>
            <Link to="/#education" preventScrollReset={true}>Education</Link>
          </li>
          <li>
            <Link to="/#skills" preventScrollReset={true}>Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="dark-mode-toggle">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onChange={toggleDarkMode}
              checked={darkModeEnabled}
            />
            <label htmlFor="checkbox" className="checkbox-label">
              <FontAwesomeIcon icon={faMoon} />
              <FontAwesomeIcon icon={faSun} />
              <span className="ball"></span>
            </label>
          </li>
        </ul>
      </header>
    </>
  );
}
