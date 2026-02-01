import './Header.css'
import logo from '../../assets/clariestgreen2.gif'

function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="clari est's blog" className="site-logo" />
      <h1 className="sr-only">clari est's blog</h1>
    </header>
  )
}

export default Header
