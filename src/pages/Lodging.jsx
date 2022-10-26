import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import StarFull from "../assets/StarFull.png";
import StarEmpty from "../assets/StarEmpty.png";
import lodgings from "../data/lodgings.json";
import { Navigate, useParams } from "react-router-dom";

function Lodging() {
    const { id } = useParams();
    const data = lodgings.find((location) => location.id === id);
    const rate = [1, 2, 3, 4, 5];

    return data ? (
        <main>
            <div className="wrapper">
                <Slideshow
                    pictures={data.pictures}
                    alt={"Photo d'interieur des habitations"}
                />
                <section>
                    <div className="details">
                        <div className="details__info">
                            <h1 className="details__info__title">
                                {data.title}
                            </h1>
                            <h2 className="details__info__location">
                                {data.location}
                            </h2>
                            <ul className="details__info__tag">
                                {data.tags.map((tags, index) => (
                                    <li
                                        className="details__info__tag__content"
                                        key={`${index}-${tags}`}
                                    >
                                        {tags}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="details__more">
                            <div className="details__more__owner">
                                <p className="details__more__owner__name">
                                    {data.host.name}
                                </p>
                                <img
                                    src={data.host.picture}
                                    alt="proprietaire de l'appartement"
                                    className="details__more__owner__picture"
                                />
                            </div>
                            <div className="details__more__info">
                                {rate.map((rateLodging, i) =>
                                    data.rating >= rateLodging ? (
                                        <div
                                            key={"start-"+i}
                                            className="details__more__info__rating"
                                        >
                                            <img
                                                src={StarFull}
                                                alt=""
                                                className="details__more__info__rating__star"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            key={"start-"+i}
                                            className="details__more__info__rating"
                                        >
                                            <img
                                                src={StarEmpty}
                                                alt=""
                                                className="details__more__info__rating__star"
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="details__collapse">
                        <div className="details__collapse__description">
                            <Collapse
                                title="Description"
                                description={data.description}
                            />
                        </div>
                        <div className="details__collapse__equipment">
                            <Collapse
                                title="Equipements"
                                description={data.equipments}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    ) : (
        <Navigate replace to="/404" />
    );
}

export default Lodging;
