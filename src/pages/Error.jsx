import { Link } from "react-router-dom";

function Error() {
    return (
          <main>
              <section className="error">
                  <h1 className="error__title">404</h1>
                  <p className="error__text">
                      Oups! La page que vous demandez n'existe pas.
                  </p>
                  <Link to="/" className="error__link-home">
                      Retourner sur la page d'accueil
                  </Link>
              </section>
          </main>
    );
}

export default Error;
