//Importations
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import StarFull from "../assets/StarFull.png";
import StarEmpty from "../assets/StarEmpty.png";
import lodgings from "../data/lodgings.json";
import { Navigate, useParams } from "react-router-dom";

//Page Hébergement
function Lodging() {
    const { id } = useParams();
    const data = lodgings.find((location) => location.id === id);
    const rate = [1, 2, 3, 4, 5];

    return data ? (
        <main>
            <div className="wrapper">
                <Slideshow      //Importation du composant Slideshow
                    pictures={data.pictures}
                    alt="Photo d'interieur des habitations"
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
                                <p>{data.host.name}</p>
                                <img
                                    src={data.host.picture}
                                    alt="proprietaire de l'appartement"
                                />
                            </div>
                            <div className="details__more__info">
                                {rate.map((rateLodging, i) =>
                                    data.rating >= rateLodging ? (
                                        <div
                                            key={"start-" + i}
                                            className="details__more__info__rating"
                                        >
                                            <img
                                                src={StarFull}
                                                alt="Etoile de notation pleine"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            key={"start-" + i}
                                            className="details__more__info__rating"
                                        >
                                            <img
                                                src={StarEmpty}
                                                alt="Etoile de notation vide"
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="details__collapse">
                        <div className="details__collapse__description">
                            <Collapse       //Importation du composant Collapse
                                title="Description"
                                description={data.description}
                            />
                        </div>
                        <div className="details__collapse__equipment">
                            <Collapse       //Importation du composant Collapse
                                title="Equipements"
                                description={data.equipments}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    ) : (
        <Navigate replace to="/404" />      //Si les datas sont introuvables, redirection vers la page 404 (page d'erreur)
    );
}

export default Lodging;
