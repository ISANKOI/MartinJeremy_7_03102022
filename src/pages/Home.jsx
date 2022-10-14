import Banner from "../components/Banner";
import Card from '../components/Card';
import BannerHome from "../assets/BannerHome.jpg"

function Home() {
    return (
        <main>
            <div className="wrapper">
                <Banner
                    src={BannerHome} alt={"paysage cotier"} slogan={"Chez vous, partout et ailleurs"}/>
                <Card />
            </div>
        </main>
    );
}

export default Home;
