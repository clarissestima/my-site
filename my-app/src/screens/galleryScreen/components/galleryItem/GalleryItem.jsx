import './GalleryItem.css'

export default function GalleryItem({ src }) {
  return (
    <div className="gallery-item">
      <img src={src} />
    </div>
  )
}