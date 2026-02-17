import './AboutScreen.css'
import Navigation from '../../components/nav/Navigation'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function AboutScreen() {

  return (
    <div>
      <Header />
      <div className="main-container">
          <Navigation />
          <div className="content-wrapper">
            <h1>Sobre Nós</h1>
          </div>
          <Footer />
      </div>
      </div>
  )
}

export default AboutScreen