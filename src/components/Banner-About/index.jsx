import BannerImg from "../../assets/BannerAbout.jpg";

function BannerAbout() {
    return (
        <div className="banner">
            <img src={BannerImg} alt="Paysage cotier" className="banner__img" />
        </div>
    );
}

export default BannerAbout;
