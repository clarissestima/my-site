import './Footer.css'

const socialLinks = [
  { name: 'instagram', url: 'https://www.instagram.com/clarissestima/' },
  { name: 'letterboxd', url: 'https://letterboxd.com/clarossa/' },
  { name: 'musicboard', url: 'https://musicboard.app/clarossa' },
  { name: 'github', url: 'https://github.com/clarissestima' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const currently = {
  listening: "Wilco — Heavy Metal Drummer",
  reading: "A Paixão de GH - Clarice Lispector",
  watching: "Before Sunrise (1995)"
}

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3 className="footer-title">find me there ✦</h3>

          <ul className="footer-list">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">currently ✦</h3>

          <div className="currently">
            <p>
              listening → <span>{currently.listening}</span>
            </p>
            <p>
              reading → <span>{currently.reading}</span>
            </p>
            <p>
              watching → <span>{currently.watching}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Clari ✿ made with care</p>
      </div>
    </footer>
  )
}