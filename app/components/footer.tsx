export default function Footer() {
  const fullYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright" id="copyright">
            <p>
              Copyright &copy; {fullYear} James Sterling
            </p>
          </div>
          <div className="col-sm-2 top">
            <span id="to-top">
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </span>
          </div>
          <div className="col-sm-5 social">
            <ul>
              <li>
                <a
                  href="https://github.com/jamespsterling"
                  target="_blank"
                  rel="noopener"
                ><i className="fab fa-github" aria-hidden="true"></i></a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jamespsterling/"
                  target="_blank"
                  rel="noopener"
                ><i className="fab fa-linkedin" aria-hidden="true"></i></a>
              </li>
              <li>
                <a
                  href="https://500px.com/jpspyro"
                  target="_blank"
                  rel="noopener"
                ><i className="fab fa-500px" aria-hidden="true"></i ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}