import React from 'react'
import './Header.css'
import CTA from './CAT'
import ME from '../../assets/mee.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Ritesh pandey</h1>
        <h5 className='text-light'> Fullstack Devloper</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header