import React from 'react'
import './Experience.css'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experince'>
      <h5>What skills I have</h5>
      <h2>My Experince</h2>

      <div className='container experince__container'>
        <div className='experince__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>

            <article className='experince__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experince__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* backend start */}
        <div className='experince__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experince__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experince__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>No experince</small>
              </div>
            </article>

            <article className='experince__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4>MYsql</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experince__details'>
              <BsBookmarkCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience