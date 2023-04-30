import React from 'react'
import './About.css'
import ME from '../../assets/abpic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillProject} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know more</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experince</h5>
              <small>3+ year</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>7+ projects done</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus suscipit quasi libero obcaecati! 
            Nostrum, odio ex. Omnis saepe, vel, voluptates nemo officiis soluta sunt laudantium quo magnam similique
            reiciendis tempore.
          </p>

          <a href="#contact" className='btn btn-primary'>Let'sTalk</a>
        </div>
      </div>
    </section>
  )
}

export default About