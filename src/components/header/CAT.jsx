import React from 'react'
import CV from '../../assets/Resume.pdf'

const CAT = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CAT