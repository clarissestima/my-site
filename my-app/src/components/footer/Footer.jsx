import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre</h3>
        </div>
        
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#about">Sobre mim</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="#instagram">instagram</a></li>
            <li><a href="#letterboxd">letterboxd</a></li>
            <li><a href="#musicboard">musicboard</a></li>
            <li><a href="#github">github</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Clari</p>
      </div>
    </footer>
  )
}