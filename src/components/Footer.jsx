//Importation
import Logo from '../assets/LogoFooter.svg'

function Footer() {

  return (
    <footer>
        <div className="wrapper">
            <div> 
              <img src={Logo} alt="Logo Kasa" /> 
              </div>
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
