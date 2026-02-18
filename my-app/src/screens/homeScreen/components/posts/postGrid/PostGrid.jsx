import './PostGrid.css'
import PostCard from '../postCard/PostCard'

function PostGrid({ posts, limit = 6 }) {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  const lastPosts = sortedPosts.slice(0, limit);

  return (
    <section className="post-grid">
      {lastPosts.map(p => (
        <PostCard
          key={p.id}
          title={p.title}
          excerpt={p.excerpt}
          author={p.author}
          date={p.date}
          image={p.image}
          onReadMore={() => alert(`Abrir post: ${p.title}`)}
        />
      ))}
    </section>
  )
}

export default PostGrid