import React from 'react'
import './Post.css'

export default function Post({ title, excerpt, content, author, date, image}) {
  return (
    <article className="post-card">
      {image && (
        <div className="post-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="post-body">
        <header className="post-header">
          <h2 className="post-title">{title}</h2>
          <div className="post-meta">{author} · {date}</div>
        </header>
        {excerpt ? <p className="post-excerpt">{excerpt}</p> : <div className="post-content">{content}</div>}
      
      </div>
    </article>
  )
}
