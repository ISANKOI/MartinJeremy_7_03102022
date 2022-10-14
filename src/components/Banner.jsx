function Banner({src, alt, slogan}) {
    return (
        <div className="banner">
            <img src={src} alt={alt} className="banner__img" />
            <h1 className="banner__text">{slogan}</h1>
        </div>
    );
}

export default Banner;
