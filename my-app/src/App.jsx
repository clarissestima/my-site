import './App.css'
import Post from './components/Post'

function App() {
  const posts = [
    { id: 1, title: 'Primeiro post', excerpt: 'Resumo curto do primeiro post.', author: 'Clari', date: 'Jan 31, 2026' },
    { id: 2, title: 'Segundo post', excerpt: 'Resumo curto do segundo post.', author: 'Clari', date: 'Jan 30, 2026' },
    { id: 3, title: 'Terceiro post', excerpt: 'Resumo curto do terceiro post.', author: 'Clari', date: 'Jan 29, 2026' }
  ]

  return (
    <div className="container">
      <h1>clari est's blog</h1>
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
    </div>
  )
}

export default App
