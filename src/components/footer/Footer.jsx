import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {RiReactjsLine} from 'react-icons/ri'
import Logo from '../../assets/logo_ritesh.png'
import { SiGmail } from "react-icons/si";


const Footer = () => {
  return (
   <footer>
    {/* <a href="#" className='footer__logo'><RiReactjsLine /></a> */}
    <img src={Logo} alt="" className='footer__logo'/>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experince">Experience</a></li>
      <li><a href="#portfolio">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank"><SiGmail /></a>
      <a href="https://www.linkedin.com/in/ritesh-pandey-4b2a67269/"><FaLinkedin /></a>
      <a href="https://github.com/riteshpandey7272" target="_blank"><FaGithub /></a>
      <a href="https://twitter.com/MrRitesh80"><BsTwitter /></a>
      <a href="https://www.facebook.com/rishu.pandey.14473?mibextid=ZbWKwL"><FaFacebook /></a>
      <a href="https://www.instagram.com/_iampandey_/"><FiInstagram /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Ritesh. All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer