import { useState } from "react";
import Arrow from "../assets/Vector.png"


function Collapse({values, description}) {
    
    const [display, setDisplay] = useState(false)

    return display ? (
        <section className="a-propos">
        <ul className="a-porpos__list">
            <li>
                <div onClick={() => setDisplay(false)} className="a-propos__list__valeur">
                    <h3 className="valeur__title">{values}</h3>
                    <div className="a-propos__list__valeur__arrow">
                        <img src={Arrow} alt="Flèche" className="arrow_open"/>
                    </div>
                </div>
                <div className="a-propos__list__valeur__text">
                    <p>{description}</p>
                </div>
            </li>
        </ul>
    </section>

    ) : (

        <section className="a-propos">
        <ul className="a-porpos__list">
            <li>
                <div onClick={() => setDisplay(true)} className="a-propos__list__valeur">
                    <h3 className="valeur__title">{values}</h3>
                    <div className="a-propos__list__valeur__arrow">
                        <img src={Arrow} alt="Flèche" className="arrow_close"/>
                    </div>
                </div>
            </li>
        </ul>
        </section>
    )
  };
  export default Collapse;