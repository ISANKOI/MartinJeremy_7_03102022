import { Link, NavLink } from "react-router-dom";
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
                      <li>
                          <NavLink to="/" className={(header__nav) => (header__nav.isActive ? "active" : '')}> Accueil </NavLink>
                      </li>
                      <li>
                          <NavLink to="/about" className={(header__nav) => (header__nav.isActive ? "active" : '')}> A propos </NavLink>
                      </li>
                  </ul>
              </nav>
          </header>
        </div>
    );
}

export default Header;
