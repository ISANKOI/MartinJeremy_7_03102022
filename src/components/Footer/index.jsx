import Logo from '../../assets/LogoFooter.svg'

/*const HomeLogo = styled.img`
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
*/
function Header() {

  return (
    <footer>
        <div className="wrapper">
            <div> 
              <img src={Logo} alt="Logo de Kasa" /> 
              </div>
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Header
