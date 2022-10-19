import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import BannerAbout from "../assets/BannerAbout.jpg"

function About() {
    return (      
      <main>
        <div className="wrapper">
          <Banner
            src={BannerAbout} alt={"Paysage montagneux"}
          />
          <section className="collapse__container">
            <Collapse
              values="Fiabilité"
              description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />
            <Collapse
              values="Respect"
              description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse
              values="Service"
              description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />
            <Collapse
              values="Sécurité"
              description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
          </section>
        </div>
      </main>
      
    );
  }
  
  export default About;
  