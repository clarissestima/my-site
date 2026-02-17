import './SidebarGifs.css'
import nana from '../../../../../assets/nana.gif'

function SidebarGifs() {
  return (
    <div className="gifs-section">
        <div className="gif-grid">
          <img src={nana} alt="hachi with strawberry glasses" className="gif-item"/>
        </div>
      </div>
  )
}

export default SidebarGifs