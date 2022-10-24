import { Link } from "react-router-dom";
import Logo from "../assets/LogoHeader.svg";

function Header() {
    return (
        <div className="wrapper">
          <header>
              <div className="header__logo">
                <Link to="/">
                    <img src={Logo} alt="Logo kasa" className="header__logo__img"/>
                  </Link>
              </div>
              <nav className="header__nav">
                  <ul className="header__nav__list">
                      <li className="header__nav__list__li">
                          <Link to="/" className="header__nav__list__li__link"> Accueil </Link>
                      </li>
                      <li>
                          <Link to="/about" className="header__nav__list__li__link"> A propos </Link>
                      </li>
                  </ul>
              </nav>
          </header>
        </div>
    );
}

export default Header;
