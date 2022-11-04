//Importations
import { useState } from "react";
import Arrow from "../assets/Arrow.png";

//Composant Collapse
function Collapse({ title, description }) {         //Utilisation de Props afin de dynamiser les Collapses      
    const [display, setDisplay] = useState(false);  //Utilisation de Hook pour définir l'état des collapses

    return display ? (
        <div className="collapse">
            <div onClick={() => setDisplay(false)} className="collapse__title">
                <h3>{title}</h3>
                <div className="arrow">
                    <img src={Arrow} alt="Flèche" className="arrow__open" />
                </div>
            </div>
            <div className="collapse__text">
                {Array.isArray(description) ? (     //Si la description est un tableau utilisation de liste
                    <ul>
                        {description.map((equipment, index) => (    //Utilisation de map pour mettre sous forme de liste le tableau des equipements
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </div>
    ) : (
        <div className="collapse">                  
            <div onClick={() => setDisplay(true)} className="collapse__title">
                <h3>{title}</h3>
                <div className="arrow">
                    <img src={Arrow} alt="Flèche" className="arrow__close" />
                </div>
            </div>
        </div>
    );
}
export default Collapse;
