//Importations
import Banner from "../components/Banner";
import Card from '../components/Card';
import BannerHome from "../assets/BannerHome.jpg"

//Page d'Accueil
function Home() {
    return (
        <main>
            <div className="wrapper">
                <Banner
                    src={BannerHome} alt={"paysage cotier"} slogan={"Chez vous, partout et ailleurs"}/>
                <section className="lodging">
                    <Card />
                </section>
            </div>
        </main>
    );
}

export default Home;
