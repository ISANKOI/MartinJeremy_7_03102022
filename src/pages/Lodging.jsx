
//import Slideshow from "../components/Slideshow";
import Banner from "../components/Banner";
import BannerAbout from "../assets/BannerAbout.jpg";
import Collapse from "../components/Collapse";
import banner from "../assets/BannerHome.jpg";
import star from "../assets/Star.png"

function lodging() {
    return (
        <main>
            <div className="wrapper">
            <Banner
            src={BannerAbout} alt={"Paysage montagneux"}
            />
                <section>
                    <div className="details">
                        <div className="details__info">
                            <h2 className="details__info__title">Cozy loft on the Canal Saint-Martin</h2>
                            <span className="details__info__location">Paris, Île-de-France</span>
                            <div className="details__info__tag">
                                <span className="details__info__tag__content">Paris 10</span>
                            </div>
                        </div>
                        <div className="details__more">
                            <div className="details__more__owner">
                                <p className="details__more__owner__name">Nom proprio</p>
                                <img
                                    src={banner}
                                    alt="proprietaire de l'appartement"
                                    className="details__more__owner__picture"
                                />
                            </div>
                            <div className="details__more__info__rating">
                                <img src={star} alt="étoile de notation" />
                                <img src={star} alt="étoile de notation" />
                                <img src={star} alt="étoile de notation" />
                                <img src={star} alt="étoile de notation" />
                                <img src={star} alt="étoile de notation" />
                            </div>
                        </div>
                    </div>
                    <div className="details__collapse">
                        <div className="details__collapse__description">
                            <Collapse
                                values="Description"
                                description="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
                            />
                        </div>
                        <div className="details__collapse__equipment">
                            <Collapse
                                values="Equipements"
                                description="Climatisation
                                Wi-Fi
                                Cuisine
                                Espace de travail
                                Fer à repasser
                                Sèche-cheveux
                                Cintres"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default lodging;
