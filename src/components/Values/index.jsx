import Arrow from "../../assets/Vector.png"


function Values() {
    return (
        <section className="a-propos">
        <ul className="a-porpos__list">
            <li>
                <div className="a-propos__list__valeur">
                    <div>
                        <h3 className="valeur__title">Fiabilité</h3>
                    </div>
                    <div className="a-propos__list__valeur__arrow">
                    <img src={Arrow} alt="Flèche" />
                    </div>
                </div>
                <div className="a-propos__list__valeur__text">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont
                        conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos
                        équipes.
                    </p>
                </div>
            </li>
            <li>
                <div className="a-propos__list__valeur">
                    <div>
                        <h3 className="valeur__title">Respect</h3>
                    </div>
                    <div className="a-propos__list__valeur__arrow">
                    <img src={Arrow} alt="Flèche" />
                    </div>
                </div>
                <div className="a-propos__list__valeur__text">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
                        discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre
                        plateforme.
                    </p>
                </div>
            </li>
            <li>
                <div className="a-propos__list__valeur">
                    <div>
                        <h3 className="valeur__title">Service</h3>
                    </div>
                    <div className="a-propos__list__valeur__arrow">
                    <img src={Arrow} alt="Flèche" />
                    </div>
                </div>
                <div className="a-propos__list__valeur__text">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                        N'hésitez pas à nous contacter si vous avez la moindre question.
                    </p>
                </div>
            </li>
            <li>
                <div className="a-propos__list__valeur">
                    <div>
                        <h3 className="valeur__title">Sécurité</h3>
                    </div>
                    <div className="a-propos__list__valeur__arrow">
                    <img src={Arrow} alt="Flèche" />
                    </div>
                </div>
                <div className="a-propos__list__valeur__text">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                        chaque logement correspond aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de
                        vérifier que les standards sont bien respectés. Nous organisons également des ateliers
                        sur la sécurité domestique pour nos hôtes.
                    </p>
                </div>
            </li>
        </ul>
    </section>
    );
  };
  export default Values;