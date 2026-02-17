import './SidebarBio.css'
import { Link } from 'react-router-dom';

function SidebarBio() {

  return (
    <div className="bio-section">
        <h3 className='bio-title'>about me</h3>
        <p>hiiii!!! im Clarisse (or clari) and im soo exited about my new website. theres a lot of pieces of me in here. go explore. ✿</p>
        <Link to="/about" className="bio-button">know more?</Link>
      </div>
  )
}

export default SidebarBio