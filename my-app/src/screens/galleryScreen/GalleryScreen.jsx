import './GalleryScreen.css'
import Layout from '../../components/layout/Layout'
import GalleryGrid from './galleryGrid/GalleryGrid'

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