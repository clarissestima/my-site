import './PostGrid.css'
import PostCard from '../postCard/PostCard'

function PostGrid({ posts, limit = 6 }) {
  const lastPosts = posts.slice(-limit).reverse()

  return (
    <section className="post-grid">
      {lastPosts.map(p => (
        <PostCard
          key={p.id}
          title={p.title}
          excerpt={p.excerpt}
          author={p.author}
          date={p.date}
          image={p.image} // pode ser undefined
          onReadMore={() => alert(`Abrir post: ${p.title}`)}
        />
      ))}
    </section>
  )
}

export default PostGrid