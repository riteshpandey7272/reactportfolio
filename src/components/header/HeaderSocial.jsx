import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import{AiFillInstagram}from 'react-icons/ai'
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { SiGmail } from "react-icons/si";


const headerSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank"><SiGmail /></a>
        <a href="https://www.linkedin.com/in/ritesh-pandey-4b2a67269/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/riteshpandey7272" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/MrRitesh80" target="_blank"><FaTwitter /></a>
        <a href="https://www.instagram.com/_iampandey_/" target="_blank"><AiFillInstagram /></a>
        <a href="https://www.facebook.com/rishu.pandey.14473?mibextid=ZbWKwL" target="_blank"><SiFacebook /></a>
    </div>
  )
}

export default headerSocial