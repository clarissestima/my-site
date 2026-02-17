import './PostGrid.css'
import PostCard from '../postCard/PostCard'
import { posts } from '../../../data/posts'

function PostGrid() {
  return (
    <div className="post-grid">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostGrid