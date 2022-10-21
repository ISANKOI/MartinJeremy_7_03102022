import { useState } from "react";
import Arrow from "../assets/Arrow.png"


function Collapse({title, description}) {
    
    const [display, setDisplay] = useState(false)

    return display ? (
        <div className="a-propos">
        <ul className="a-propos__list">
            <li>
                <div onClick={() => setDisplay(false)} className="a-propos__list__valeur">
                    <h3 className="valeur__title">{title}</h3>
                    <div className="a-propos__list__valeur__arrow">
                        <img src={Arrow} alt="Flèche" className="arrow_open"/>
                    </div>
                </div>
                <div className="a-propos__list__valeur__text">
                    <p>{description}</p>
                </div>
            </li>
        </ul>
    </div>

    ) : (

        <div className="a-propos">
        <ul className="a-propos__list">
            <li>
                <div onClick={() => setDisplay(true)} className="a-propos__list__valeur">
                    <h3 className="valeur__title">{title}</h3>
                    <div className="a-propos__list__valeur__arrow">
                        <img src={Arrow} alt="Flèche" className="arrow_close"/>
                    </div>
                </div>
            </li>
        </ul>
        </div>
    )
  };
  export default Collapse;