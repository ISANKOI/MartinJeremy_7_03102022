import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/LogoHeader.svg'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {

  return (
    <NavContainer>
      <Link to="/"><HomeLogo src={Logo} /></Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </div>
    </NavContainer>
  )
}

export default Header
