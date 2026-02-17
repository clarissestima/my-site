import './MiddleContainer.css'
import Navigation from '../nav/Navigation'
import PostList from '../../screens/homeScreen/components/postList/PostList'
import Sidebar from '../../screens/homeScreen/components/sidebar/Sidebar'
import Footer from '../footer/Footer'

function MiddleContainer() {
    const posts = [
    { id: 1, title: 'Primeiro post', excerpt: 'Resumo curto do primeiro post.', author: 'Clari', date: 'Jan 31, 2026' },
    { id: 2, title: 'Segundo post', excerpt: 'Resumo curto do segundo post.', author: 'Clari', date: 'Jan 30, 2026' },
    { id: 3, title: 'Terceiro post', excerpt: 'Resumo curto do terceiro post.', author: 'Clari', date: 'Jan 29, 2026' }
  ]

  return (
      <div className="main-container">
          <Navigation />
          <div className="content-wrapper">
            <PostList posts={posts} />
            <Sidebar />
          </div>
          <Footer />
      </div>
  )
}

export default MiddleContainer
