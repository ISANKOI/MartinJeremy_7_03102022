import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/LogoFooter.svg'

const HomeLogo = styled.img`
  height: 30px;
  padding: 30px;
`

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000000;
`
const Text = styled.footer`
    color: white;
    padding-bottom: 20px;
`

function Header() {

  return (
    <FooterContainer>
      <Link to="/"><HomeLogo src={Logo} /></Link>
        <Text>© 2020 Kasa. All rights reserved</Text>
    </FooterContainer>
  )
}

export default Header
