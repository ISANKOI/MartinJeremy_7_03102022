import StarEmpty from "../assets/StarEmpty.png"
import StarFull from "../assets/StarFull.png"

function Stars(rate){
	const stars = new Array(5)

  return <div className="stars">
    {stars.map(function(_, index){
      return <img src={`../assets/${index+1 >= rate ? StarEmpty : StarFull}.png`} alt="Etoile de notation" />
    })}
  </div>	
}


export default Stars;