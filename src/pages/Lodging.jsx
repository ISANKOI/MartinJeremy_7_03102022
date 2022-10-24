
//import Slideshow from "../components/Slideshow";
import Slideshow from "../components/Slideshow";
//import BannerAbout from "../assets/BannerAbout.jpg";
import Collapse from "../components/Collapse";
//import star from "../assets/StarFull.png"
import Stars from "../components/Stars"
import  lodgings  from "../data/lodgings.json"
import { useParams } from "react-router-dom";

function Lodging() {
    
    const {id} = useParams();
    const data = lodgings.find((location) => location.id === id)
    

    return (
        <main>
            <div className="wrapper">
            <Slideshow
            pictures={data.pictures} alt={"Paysage montagneux"}
            />
                <section>
                    <div className="details">
                        <div className="details__info">
                            <h1 className="details__info__title">{data.title}</h1>
                            <h2 className="details__info__location">{data.location}</h2>
                            <ul className="details__info__tag">
                                {data.tags.map((tags, index) => (
                                <li className="details__info__tag__content" key={`${index}-${tags}`}>{tags}</li>
                                ) )}
                                
                            </ul>
                        </div>
                        <div className="details__more">
                            <div className="details__more__owner">
                                <p className="details__more__owner__name">{data.host.name}</p>
                                <img
                                    src={data.host.picture}
                                    alt="proprietaire de l'appartement"
                                    className="details__more__owner__picture"
                                />
                            </div>
                            <div className="details__more__info__rating">
                                <Stars rate={data.rating}  key ={lodgings.id}/>
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
    );
}

export default Lodging;
