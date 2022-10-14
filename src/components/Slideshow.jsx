import lodging from "../data/lodging.json";

function slideshow() {
    return (
        <div className="" >
            {lodging.map((lodging) => ( 

            <img src={`${lodging.pictures}`} alt="appartement"  />
      ))}
            
        </div>
    );

}

export default slideshow;
