import React from "react";
import { Link } from "react-router-dom";
import lodging from "../../data/lodging.json";

function Card() {
  return (
    <div className="wrapper">
    <section className="lodging">
      {lodging.map((lodging) => (
        <Link
          to={`lodging/${lodging.id}`}
          key={lodging.id}
          className="card"
        >
          <figure className="card__item">
            <img src={`${lodging.cover}`} alt={lodging.title} />
            <figcaption>{lodging.title}</figcaption>
          </figure>
        </Link>
      ))}
      <div className="card__item--empty"></div>
    </section>
    </div>
  );
};
export default Card;