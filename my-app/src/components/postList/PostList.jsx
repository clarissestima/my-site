import './PostList.css'
import Post from '../post/Post'

function PostList({ posts }) {
  return (
    <section className="left-section">
      <h2>Recent Posts</h2>
      {posts.map(p => (
        <Post
          key={p.id}
          title={p.title}
          excerpt={p.excerpt}
          author={p.author}
          date={p.date}
          onReadMore={() => alert(`Abrir post: ${p.title}`)}
        />
      ))}
    </section>
  )
}

export default PostList
