import './Header.css'
import logo from '../../assets/text.gif'
import lace from '../../assets/lace.png'

function Header() {
  return (
<header className="site-header">
  <div className="lace-container">
    <img src={lace} alt="decorative lace" className="lace-image" />
  </div>

  <div className="logo-container">
    <img src={logo} alt="clari est's blog logo" className="logo-image" />
  </div>
</header>
  )
}

export default Header
