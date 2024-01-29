import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project image/Ecommerce.png'
import IMG2 from '../../assets/project image/netflix.png'
import IMG3 from '../../assets/project image/portfolio.png'
import IMG4 from '../../assets/project image/FB_IMG_1706552985392.jpg'
import IMG5 from '../../assets/project image/cyo.png'

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
        <h3>E - Commerce </h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/riteshpandey7272/E-com-frontend" className='btn' target='_blank'>GitHub</a>
          <a href="https://github.com/riteshpandey7272/E-com-frontend" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        
      </article>
      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
          <img src={IMG2} alt="" />
        </div>
        <h3>Netflix Clone</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/riteshpandey7272/netflix-clone" className='btn' target='_blank'>GitHub</a>
          <a href="https://riteshpandey7272.github.io/netflix-clone/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        
      </article>
      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
          <img src={IMG3} alt="" />
        </div>
        <h3>First Portfolio</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/riteshpandey7272/My-Portfolio" className='btn' target='_blank'>GitHub</a>
          <a href="https://riteshpandey7272.github.io/My-Portfolio/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        
      </article>
    </div>

    <div className="container portfolio__container">
      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
          <img src={IMG4} alt="" />
        </div>
        <h3>EMMPS School</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/riteshpandey7272/emmpsbarodih" className='btn' target='_blank'>GitHub</a>
          <a href="https://riteshpandey7272.github.io/emmpsbarodih/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        
      </article>
      <article className='portfolio__items'>
        <div className='portfolio__item-image'>
          <img src={IMG5} alt="" />
        </div>
        <h3>CYO Shell</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com/riteshpandey7272/CYOshell" className='btn' target='_blank'>GitHub</a>
          <a href="https://riteshpandey7272.github.io/CYOshell/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        
      </article>
    </div>

   </section>
  )
}

export default portfolio