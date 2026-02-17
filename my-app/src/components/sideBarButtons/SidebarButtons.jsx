import './SidebarButtons.css'

const buttons = [
  { href: 'https://nekoweb.org/', label: 'Nekoweb' },
  { href: 'https://eye.nekoweb.org/main.html', label: 'Eye Project' },
  { href: 'https://trademarkhell.net/', label: 'Trademark Hell' },
  { href: 'https://thinliquid.dev', label: 'Thin Liquid' },
  { href: 'https://rice.nekoweb.org/', label: 'Rice Page' },
  { href: 'https://glassplanet.neocities.org/', label: 'Glass Planet' },
]

function SidebarButtons() {
  return (
    <div className="sidebar-buttons">
      <h3 className="buttons-title">Cool Links</h3>

      <div className="buttons-scroll">
        {buttons.map((b, index) => (
          <a
            key={index}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-button"
          >
            {b.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SidebarButtons