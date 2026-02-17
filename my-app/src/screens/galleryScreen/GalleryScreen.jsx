import './GalleryScreen.css'
import Layout from '../../components/layout/Layout'
import GalleryGrid from './components/galleryGrid/GalleryGrid.jsx'

function GalleryScreen() {

return (
    <Layout >      
      <div className="content-wrapper">
        <GalleryGrid />
      </div>
    </Layout>
  )
}

export default GalleryScreen