import PostCard from "../postCard/PostCard"

function PostList({ posts }) {
  return (
    <section className="left-section">
      {posts.map(p => (
        <PostCard
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
