import { useState } from "react";
import ArrowLeft from "../assets/ArrowLeft.png";
import ArrowRight from "../assets/ArrowRight.png";

function Slideshow(slide,) {
    const [selected, setSelected] = useState(0)
    const pictures = slide.pictures;
    

    const previous = function() {
        if(selected == 0 ) {
            setSelected(pictures.length - 1)
        }

        selected > 0 && setSelected(selected - 1)
    }
    const next = function() {
        if(selected == pictures.length - 1){
            setSelected(0)
        }
       selected < pictures.length - 1 && setSelected(selected + 1)
    }

    return (
        <div className="slideshow">
            {pictures.length > 1 && <div onClick={previous} className="slideshow__arrowLeft">
                <img src={ArrowLeft} alt="Flèche de sélection gauche"/>
            </div>}
            {pictures.length > 1 &&<div onClick={next} className="slideshow__arrowRight">
                <img src={ArrowRight} alt="Flèche de sélection droite"/>
            </div>}
            {pictures.length > 1 &&<p className="slideshow__counter">{selected + 1}/{pictures.length}</p>}
            {slide.pictures.map((picture, index) => {
                return (
                    <div key={index}>
                        {index === selected && (<img src={picture} alt="Interieur des habitations" className="slideshow__img" />)}
                    </div>
                )
            })}
            
        </div>
    );
}

export default Slideshow;
