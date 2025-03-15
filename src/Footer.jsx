import { Link } from "react-router";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="w-100"></div>

        <hr className="text-dark" />

        <div className="row">
          <div className="col-6 col-md-3">
            <ul className="list-unstyled mb-0">
              <li>
                <Link to={"/faq"}>FAQ</Link>
              </li>
              <li>
                <Link to={"/privacy_policy"}>Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled mb-0">
              <li>
                <Link to={"/terms_of_service"}>Terms of use</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled mb-0">
              <li>
                <a href={"https://evemonk.com/graphiql"} target={"_blank"}>
                  GraphQL
                </a>
              </li>
              <li>
                <a
                  href={"https://blog.evemonk.com/"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href={"https://github.com/biow0lf/evemonk-react"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={"https://sde.evemonk.com/"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  SDE Archive
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-100"></div>

        <hr className="text-dark" />

        <div className="row text-center">
          <div className="col text-muted">
            &copy; 2016 &mdash; 2025 <strong>EveMonk</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
