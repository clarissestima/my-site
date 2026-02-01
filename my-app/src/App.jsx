import './App.css'
import Post from './components/Post'
import Footer from './components/Footer'
import logo from './assets/clariest3.gif'

function App() {
  const posts = [
    { id: 1, title: 'Primeiro post', excerpt: 'Resumo curto do primeiro post.', author: 'Clari', date: 'Jan 31, 2026' },
    { id: 2, title: 'Segundo post', excerpt: 'Resumo curto do segundo post.', author: 'Clari', date: 'Jan 30, 2026' },
    { id: 3, title: 'Terceiro post', excerpt: 'Resumo curto do terceiro post.', author: 'Clari', date: 'Jan 29, 2026' }
  ]

  return (
    <div className="container">
        <header className="site-header">
          <img src={logo} alt="clari est's blog" className="site-logo" />
          <h1 className="sr-only">clari est's blog</h1>
        </header>
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
      <Footer />
    </div>
  )
  
}

export default App
