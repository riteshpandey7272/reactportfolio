import React from 'react'
import CV from '../../assets/Ritesh_Pandey.pdf'

const CAT = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Hire me</a>
        <a href="#contact" className='btn btn-primary'>Get In Touch</a>
    </div>
  )
}

export default CAT