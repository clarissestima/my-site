import './GalleryGrid.css'
import { albums } from '../../../../data/gallery.js'
import GalleryItem from '../galleryItem/GalleryItem.jsx'

function GalleryGrid() {
  return (

      <div className="gallery">
        {albums.map(album => (
          <div key={album.id} className="album">
            <h2 className="album-title">{album.title}</h2>
            <div className="album-background">{album.date}
              <div className="album-grid">
                {album.images.map((img, i) => (
                  <GalleryItem key={i} src={img} />
                ))}
              </div>
              </div>
          </div>
        ))}
      </div>
  )
}

export default GalleryGrid