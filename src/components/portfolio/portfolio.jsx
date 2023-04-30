import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/fis.webp'
import IMG2 from '../../assets/fis2.webp'
import IMG3 from '../../assets/fis3.webp'

const portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className="container portfolio__container">
      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
          <img src={IMG1} alt="" />
        </div>
        <h3>This is a projects item title</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        
      </article>
      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
          <img src={IMG2} alt="" />
        </div>
        <h3>This is a projects item title</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        
      </article>
      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
          <img src={IMG3} alt="" />
        </div>
        <h3>This is a projects item title</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        
      </article>
    
    </div>
   </section>
  )
}

export default portfolio