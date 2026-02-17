import Layout from '../../components/layout/Layout'
import PostList from './components/postList/PostList'
import Sidebar from './components/sidebar/Sidebar'

function HomeScreen() {
  const posts = [
    { id: 1, title: 'Primeiro post', excerpt: 'Resumo curto do primeiro post.', author: 'Clari', date: 'Jan 31, 2026' },
    { id: 2, title: 'Segundo post', excerpt: 'Resumo curto do segundo post.', author: 'Clari', date: 'Jan 30, 2026' },
    { id: 3, title: 'Terceiro post', excerpt: 'Resumo curto do terceiro post.', author: 'Clari', date: 'Jan 29, 2026' }
  ]

  return (
    <Layout>
      <PostList posts={posts} />
      <Sidebar />
    </Layout>
  )
}

export default HomeScreen