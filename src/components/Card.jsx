import React from "react";
import { Link } from "react-router-dom";
import lodgings from "../data/lodgings.json";

function Card() {
    return (
        <div className="card">
            {lodgings.map((lodgings) => (
                <article key={lodgings.id} className="card__item">
                    <Link to={`lodging/${lodgings.id}`} key={lodgings.id}>
                        <div className="card__item__background"></div>
                        <img src={`${lodgings.cover}`} alt={lodgings.title} className="card__item__img"/>
                        <h3 className="card__item__title">{lodgings.title}</h3>

                    </Link>
                </article>
            ))}
        </div>
    );
}
export default Card;
