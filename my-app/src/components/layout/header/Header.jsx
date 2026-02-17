import './Header.css'
import lace from '../../../assets/lace.png'
import logo from '../../../assets/text.gif'

function Header() {
  return (
  <header className="site-header">
    <div 
      className="lace-container"
      style={{ backgroundImage: `url(${lace})` }}
    />

    <div className="logo-container">
      <img src={logo} alt="clari est's blog logo" className="logo-image" />
    </div>
  </header>
  )
}

export default Header
