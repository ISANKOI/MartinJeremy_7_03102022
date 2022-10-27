import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/LogoHeader.svg";

function Header() {
    return (
        <div className="wrapper">
          <header>
              <div className="header__logo">
                <Link to="/">
                    <img src={Logo} alt="Logo kasa"/>
                  </Link>
              </div>
              <nav >
                  <ul>
                      <li>
                          <NavLink to="/" end activeclassname="active" className="nav__link">Accueil</NavLink>
                      </li>
                      <li>
                          <NavLink to="/about" activeclassname="active" className="nav__link">A propos</NavLink>
                      </li>
                  </ul>
              </nav>
          </header>
        </div>
    );
}

export default Header;
