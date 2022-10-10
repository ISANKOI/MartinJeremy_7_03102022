import BannerHome from "../../assets/BannerHome.jpg";


function Banner() {
    return (
        <div className="banner">
            <img src={BannerHome} alt="Paysage cotier" className="banner__img" />
            <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;
