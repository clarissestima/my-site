import './App.css'
import Header from './components/header/Header'
import Navigation from './components/nav/Navigation'
import IntroSection from './components/introSection/IntroSection'
import PostList from './components/postList/PostList'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'

function App() {
  const posts = [
    { id: 1, title: 'Primeiro post', excerpt: 'Resumo curto do primeiro post.', author: 'Clari', date: 'Jan 31, 2026' },
    { id: 2, title: 'Segundo post', excerpt: 'Resumo curto do segundo post.', author: 'Clari', date: 'Jan 30, 2026' },
    { id: 3, title: 'Terceiro post', excerpt: 'Resumo curto do terceiro post.', author: 'Clari', date: 'Jan 29, 2026' }
  ]

  return (
    <div className="main-container">
      <Header />
      <Navigation />
      <IntroSection />
      <div className="content-wrapper">
        <PostList posts={posts} />
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App
