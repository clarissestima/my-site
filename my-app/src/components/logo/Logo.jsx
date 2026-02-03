import './Logo.css';
import logo from '../../assets/text.gif';


function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="clari est's blog logo" className="logo-image" />
    </div>
  );
}

export default Logo;