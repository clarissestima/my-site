import Layout from '../../components/layout/Layout'
import PostGrid from './components/posts/postGrid/PostGrid'
import Sidebar from './components/sidebar/Sidebar'
import { posts } from '../../data/posts'

function HomeScreen() {

  return (
    <Layout>
      <div className="content-wrapper">
        <PostGrid posts={posts} limit={6} />
        <Sidebar />
      </div>
    </Layout>
  )
}

export default HomeScreen