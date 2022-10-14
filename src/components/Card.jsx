import React from "react";
import { Link } from "react-router-dom";
import lodging from "../data/lodging.json";

function Card() {
    return (
        <section className="lodging">
            {lodging.map((lodging) => (
                <article className="card__item">
                    <Link
                        to={`lodging/${lodging.id}`}
                        key={lodging.id}
                        
                    >
                        <img src={`${lodging.cover}`} alt={lodging.title} />
                        <h3 className="card__item__title">{lodging.title}</h3>
                    </Link>
                </article>
            ))}
            <div className="card__item--empty"></div>
        </section>
    );
}
export default Card;
