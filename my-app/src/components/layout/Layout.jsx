import Header from '../header/Header'
import Navigation from '../nav/Navigation'
import Footer from '../footer/Footer'
import './Layout.css'

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="main-container">
        <Navigation />
        <div className="content-wrapper">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout