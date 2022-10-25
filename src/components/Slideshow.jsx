import { useState } from "react";
import ArrowLeft from "../assets/ArrowLeft.png";
import ArrowRight from "../assets/ArrowRight.png";

function Slideshow(img) {
    const [selected, setSelected] = useState(0)

    const previous = function() {
        selected > 0 && setSelected(selected - 1)
    }
    const next = function() {
        setSelected(selected + 1)
    }

    return (
        <div className="slideshow">
            <div onClick={previous} className="slideshow__arrowLeft">
                <img src={ArrowLeft} alt="" />
            </div>
            <div onClick={next} className="slideshow__arrowRight">
                <img src={ArrowRight} alt="" />
            </div>
            <p className="slideshow__counter">1/5</p>
            {img.pictures.map((picture, index) => {
                return (
                    <div key={index}>
                        {index === selected && (<img src={picture} alt="" className="slideshow__img" />)}
                    </div>
                )
            })}
            
        </div>
    );
}

export default Slideshow;
