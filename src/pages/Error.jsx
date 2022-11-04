//Importation
import { Link } from "react-router-dom";

//Page Erreur 404
function Error() {
    return (
        <main className="error__container">
            <div className="wrapper">
                <section className="error">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/" className="link-home">
                        Retourner sur la page d'accueil
                    </Link>
                </section>
            </div>
        </main>
    );
}

export default Error;
