import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'



const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Gallery />
      <Contact />
      <Footer />

      <Router>
        <Routes>
          {/* <Route path="/fullgallery" element={<Fullgallery />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App