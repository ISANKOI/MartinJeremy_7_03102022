//Importations
import { Link } from "react-router-dom";
import lodgings from "../data/lodgings.json";

//Composant Card
function Card() {
    return (
        <div className="card">
            {lodgings.map((lodgings) => (   //Utilisation de map pour la creation des articles lodgings
                <article key={lodgings.id} className="card__item">
                    <Link to={`lodging/${lodgings.id}`} key={lodgings.id}>
                        <div className="card__item__background"></div>
                        <img
                            src={`${lodgings.cover}`}
                            alt={lodgings.title}
                        />
                        <h3>{lodgings.title}</h3>
                    </Link>
                </article>
            ))}
        </div>
    );
}
export default Card;
