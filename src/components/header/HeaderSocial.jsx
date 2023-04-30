import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import{AiFillInstagram}from 'react-icons/ai'

const headerSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank"><AiFillInstagram /></a>
    </div>
  )
}

export default headerSocial