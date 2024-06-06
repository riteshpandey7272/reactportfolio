import React from 'react'
import './Header.css'
import CTA from './CAT'
import ME from '../../assets/DSC2.png'
import HeaderSocial from './HeaderSocial'
import { Typewriter } from 'react-simple-typewriter'
import { HiArrowNarrowRight } from "react-icons/hi";
// import ChatBot from 'react-simple-chatbot';
import ChatBot from './Chatbot'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='container2'>
          <h3>Hii... <span>i'm</span></h3>
          <h1>Ritesh Pandey</h1>
          <span>Software Developer at Pin Services Pvt Ltd.</span>
          <h2 className='typer' style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal' }}>
            It's simple <br /> {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Code', 'Develop', 'Repeat!.']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <CTA />
          <HeaderSocial />
        </div>
        <div className='me'>
          <img src={ME} alt="me" className='my_pic' />
        </div>
        {/* <ChatBot /> */}



        {/* <a href="#contact" className='scroll__down'>Scroll Down  <HiArrowNarrowRight /></a> */}
      </div>
    </header>
  )
}

export default Header