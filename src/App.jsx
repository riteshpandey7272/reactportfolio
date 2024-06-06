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
import Workexperience from './components/work-experience/Workexperience'
import Blog from './components/blogs/Blog'
import Blogview from './components/blogs/Blogview';
import Login from './components/admin/Login';
import Admin from './components/admin/Admin';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Portfolio />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogview/:id" element={<Blogview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute element={Admin} />} />
      </Routes>
    </Router>
  )
}

export default App
