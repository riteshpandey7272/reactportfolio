import React, { useState } from 'react'
import './Experience.css'
import { BsBookmarkCheckFill } from 'react-icons/bs'
import { FaExclamation } from "react-icons/fa";


import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiBootstrap } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRuby } from "react-icons/si";



import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiExpress } from "react-icons/si";

import { IoTerminalSharp } from "react-icons/io5";
import { SiPython } from "react-icons/si";
import { DiRasberryPi } from "react-icons/di";
import { SiEsphome } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiElasticsearch } from "react-icons/si";



const Experience = () => {
  const [showFullParagraph, setShowFullParagraph] = useState(false);

  const toggleReadMore = () => {
    setShowFullParagraph(!showFullParagraph);
  };

  return (
    <section id='experince'>
      <h5>What skills I have</h5>
      <h2>My Experince</h2>

      <div className='container experince__container'>
        <div className='experince__frontend'>
          <h3>Frontend </h3>
          <div className='experience__content'>

            <article className='experince__details'>
              <ImHtmlFive className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <SiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <IoLogoJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <SiBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <SiReact className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <SiRuby className='experience__details-icon' />
              <div>
                <h4>Ruby On Rails</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* backend start */}
        <div className='experince__backend'>
          <h3>Backend </h3>
          <div className='experience__content'>
            <article className='experince__details'>
              <IoLogoNodejs className='experience__details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <SiExpress className='experience__details-icon' />
              <div>
                <h4>Express Js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <SiRuby className='experience__details-icon' />
              <div>
                <h4>Ruby On Rails</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Addition start */}
        <div className='experince__backend'>
          <h3>Additional</h3>
          <div className='experience__content'>
            <article className='experince__details'>
              <IoTerminalSharp className='experience__details-icon' />
              <div>
                <h4>IOT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <DiRasberryPi className='experience__details-icon' />
              <div>
                <h4>Raspberry Pi</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <SiEsphome className='experience__details-icon' />
              <div>
                <h4>ESP-32</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <SiPython className='experience__details-icon' />
              <div>
                <h4>Python (Micro Python)</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <FaJava className='experience__details-icon' />
              <div>
                <h4>Core Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experince__details'>
              <SiElasticsearch className='experience__details-icon' />
              <div>
                <h4>Elastic Search</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* About Experience start */}
        <div className='experience__backend'>
          <h3>My Experience</h3>
          <div className='about_experience'>
            <p>
              {showFullParagraph ? (
                <>
                  I am <b>Ritesh Pandey</b>, a seasoned <b>Software Developer</b> currently leading projects at <b>Pin Services Pvt Ltd since May 2023</b>. Specializing in a comprehensive range of technologies, including <b>React.js, Ruby on Rails (ROR), HTML, CSS, JavaScript, Bootstrap, MongoDB, IoT, and Elastic Search</b>, I have successfully navigated complex challenges inherent in software development.

                  My role involves not only proficiency in diverse tech stacks but also the ability to translate intricate ideas into innovative solutions. I have consistently demonstrated my capacity to meet project objectives and deadlines, contributing to the overall success of the team at Pin Services Pvt Ltd.

                  My professional journey is underpinned by a commitment to excellence and a proactive approach to staying abreast of industry advancements. Leveraging my skills and experience, I am poised to continue making significant contributions to the field of software development. I look forward to embracing new challenges and delivering impactful solutions in future projects.
                </>
              ) : (
                <>
                  I am <b>Ritesh Pandey</b>, a seasoned <b>Software Developer</b> currently leading projects at <b>Pin Services Pvt Ltd since May 2023</b>. Specializing in a comprehensive range of technologies, including <b>React.js, Ruby on Rails (ROR), HTML, CSS, JavaScript, Bootstrap, MongoDB, IoT, and Elastic Search</b>, I have successfully navigated complex challenges inherent in software development.
                </>
              )}
              <br />
              <span className='read-more-btn' onClick={toggleReadMore}>
                {showFullParagraph ? 'Read Less' : 'Read More'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;