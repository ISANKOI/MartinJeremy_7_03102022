import Logo from '../../assets/LogoFooter.svg'

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
