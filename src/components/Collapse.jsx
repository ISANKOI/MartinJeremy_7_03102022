//Importations
import { useState } from "react";
import Arrow from "../assets/Arrow.png";

//Composant Collapse
function Collapse({ title, description }) {
    const [display, setDisplay] = useState(false);

    return display ? (
        <div className="collapse">
            <ul>
                <li>
                    <div
                        onClick={() => setDisplay(false)}
                        className="collapse__list"
                    >
                        <h3>{title}</h3>
                        <div className="arrow">
                            <img
                                src={Arrow}
                                alt="Flèche"
                                className="arrow__open"
                            />
                        </div>
                    </div>
                    <div className="collapse__text">
                        {Array.isArray(description) ? (
                            <ul>
                                {description.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{description}</p>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    ) : (
        <div className="collapse">
            <ul>
                <li>
                    <div
                        onClick={() => setDisplay(true)}
                        className="collapse__list"
                    >
                        <h3>{title}</h3>
                        <div className="arrow">
                            <img
                                src={Arrow}
                                alt="Flèche"
                                className="arrow__close"
                            />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default Collapse;
