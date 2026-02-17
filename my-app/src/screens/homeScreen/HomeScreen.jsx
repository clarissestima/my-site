import Layout from '../../components/layout/Layout'
import PostList from '../../components/posts/postList/PostList'
import PostGrid from '../../components/posts/postGrid/PostGrid'
import Sidebar from './components/sidebar/Sidebar'

function HomeScreen() {

  return (
    <Layout>
      <div className="content-wrapper">
        <PostGrid/>
        <Sidebar />
      </div>
    </Layout>
  )
}

export default HomeScreen