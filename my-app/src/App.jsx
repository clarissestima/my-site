import './App.css'
import Header from './components/header/Header'
import Navigation from './components/nav/Navigation'
import IntroSection from './components/introSection/IntroSection'
import PostList from './components/postList/PostList'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'
import MiddleContainer from './components/middleContainer/MiddleContainer'

function App() {

  return (
    <div className="clariest">
      <Header />
      <MiddleContainer />
    </div>
  )
}

export default App
