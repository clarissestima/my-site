import './PostCard.css'

function PostCard({ title, excerpt, author, date, image}) {
  const imgSrc = image || '/path/to/fallback.png'

  return (
    <div className="post-background">
      <div className="post-card">
              {imgSrc && (
        <div className="post-image">
          <img src={imgSrc}/>
        </div>
      )}
        <h2 className="post-title">{title || 'Sem título'}</h2>
        <p className="post-meta">{author || 'clari'} — {date || 'Data desconhecida'}</p>
        <p className="post-excerpt">{excerpt || 'Sem resumo disponível.'}</p>
      </div>
    </div>
  )
}

export default PostCard