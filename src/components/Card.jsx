import React from "react";
import { Link } from "react-router-dom";
import lodging from "../data/lodging.json";

function Card() {
    return (
        <section className="lodging">
            {lodging.map((lodging) => (
                    <Link
                    
                        to={`lodging/${lodging.id}`}
                        key={lodging.id}
                        
                    ><article className="card__item">
                        <img src={`${lodging.cover}`} alt={lodging.title} />
                        <h3 className="card__item__title">{lodging.title}</h3>
                        </article>
                    </Link>
                
            ))}
        </section>
    );
}
export default Card;
