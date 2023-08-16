import { fa500px, faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const fullYear = new Date().getFullYear();
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    setScrollable(document.body.scrollHeight > window.innerHeight);
  }, [pathname]);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright" id="copyright">
            <p>Copyright &copy; {fullYear} James Sterling</p>
          </div>
          <div className="col-sm-2 top">
            {scrollable && (
              <span
                id="to-top"
                onClick={() => {
                  navigate(pathname);
                }}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            )}
          </div>
          <div className="col-sm-5 social">
            <ul>
              <li>
                <a
                  href="https://github.com/jamespsterling"
                  target="_blank"
                  rel="noopener"
                  className="icon-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/4092449/jamespsterling"
                  target="_blank"
                  rel="noopener"
                  className="icon-link"
                >
                  <FontAwesomeIcon icon={faStackOverflow} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jamespsterling/"
                  target="_blank"
                  rel="noopener"
                  className="icon-link"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://500px.com/jpspyro"
                  target="_blank"
                  rel="noopener"
                  className="icon-link"
                >
                  <FontAwesomeIcon icon={fa500px} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
