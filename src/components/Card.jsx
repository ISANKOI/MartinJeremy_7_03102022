import React from "react";
import { Link } from "react-router-dom";
import lodgings from "../data/lodgings.json";

function Card() {
    return (
        <section className="lodging">
            {lodgings.map((lodgings) => (
                    <article  key ={lodgings.id} className="card__item">
                    <Link
                    
                        to={`lodging/${lodgings.id}`}
                        key={lodgings.id}
                        
                    >
                        <img src={`${lodgings.cover}`} alt={lodgings.title} />
                        <h3 className="card__item__title">{lodgings.title}</h3>
                        
                    </Link>
                    </article>
                
            ))}
        </section>
    );
}
export default Card;
