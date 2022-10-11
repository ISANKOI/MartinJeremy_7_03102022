import React from "react";
import { Link } from "react-router-dom";
import accommodation from "../../data/accommodation.json";

function Card() {
  return (
    <div className="wrapper">
    <section className="accommodations">
      {accommodation.map((accommodation) => (
        <Link
          to={`accommodation/${accommodation.id}`}
          key={accommodation.id}
          className="card"
        >
          <figure className="card__item">
            <img src={`${accommodation.cover}`} alt={accommodation.title} />
            <figcaption>{accommodation.title}</figcaption>
          </figure>
        </Link>
      ))}
      <div className="card__item--empty"></div>
    </section>
    </div>
  );
};
export default Card;