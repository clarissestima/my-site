import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre</h3>
          <p>Um blog sobre tecnologia e lifestyle por Clari</p>
        </div>
        
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#privacy">Privacidade</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#github">GitHub</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Clari. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}