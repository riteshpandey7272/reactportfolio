import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {RiReactjsLine} from 'react-icons/ri'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'><RiReactjsLine /></a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experince">Experience</a></li>
      <li><a href="#portfolio">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a href="https://facebook.com"><FaFacebook /></a>
      <a href="https://instagram.com"><FiInstagram /></a>
      <a href="https://twitter.com"><BsTwitter /></a>
      <a href="https://linkedin.com"><FaLinkedin /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Ritesh. All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer