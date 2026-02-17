import './PostCard.css'

export default function PostCard({ post }) {
  return (
    <div className="post-background">
      <div className="post-card">
        {post.image && (
          <div className="post-image">
            <img src={post.image}/>
          </div>
        )}
        <h2 className="post-title">{post.title}</h2>
        <div className="post-meta">{post.date}</div>
        <p className="post-excerpt">{post.excerpt}</p>
      </div>
    </div>
  )
}