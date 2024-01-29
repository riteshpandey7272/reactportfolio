import React, { useState } from 'react';
import './About.css';
import ME from '../../assets/abpic.jpg';
import { FaAward } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GiUnstableProjectile } from 'react-icons/gi';

const About = () => {
  const [showFullParagraph, setShowFullParagraph] = useState(false);

  const toggleReadMore = () => {
    setShowFullParagraph(!showFullParagraph);
  };

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
              <FaAward className='about__icon' />
              <h5>My Experince</h5>
              <small>1+ year</small>
            </article>

            <article className='about__card'>
              <GiUnstableProjectile className='about__icon' />
              <h5>Company Projects</h5>
              <small>6+ projects done</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon' />
              <h5>Projects</h5>
              <small>15+ projects done</small>
            </article>
          </div>

          <p>
            {showFullParagraph ? (
              <>
                I'm <b>Ritesh Pandey</b>, a dynamic <b>Software Developer </b> currently spearheading projects at <b>Pin Services Pvt Ltd.</b> from since <b>May, 2023</b> .  My academic journey led me to graduate from <b>United College Of Engineering And Research Naini Prayagraj UP</b>, affiliated with <b>AKTU Lucknow UP</b>, where my passion for technology ignited.<br />

                Proficient in a diverse array of technologies, I specialize in <b>React.js, Ruby on Rails (ROR), HTML, CSS, JavaScript, Core Java, Bootstrap, MongoDB, IoT, and Elastic Search </b>. I thrive on the challenges of software development, translating complex ideas into innovative solutions. <br />

                My professional narrative is marked by a commitment to excellence, evident in my contributions to projects demanding a blend of technical prowess and creative problem-solving. Beyond the lines of code, I advocate for collaborative teamwork, recognizing its pivotal role in achieving collective success. <br />

                I'm not just a Software Developer; I'm a passionate problem solver, an advocate for clean and efficient code, and a perpetual learner in the ever-evolving tech landscape. As I traverse this exciting journey, I look forward to contributing my skills to projects that align with my vision of creating meaningful and impactful solutions. Let's embark on this journey of innovation together!
              </>
            ) : (
              <>
                I'm <b>Ritesh Pandey</b>, a dynamic <b>Software Developer </b> currently spearheading projects at <b>Pin Services Pvt Ltd.</b>from since <b>May, 2023</b>.  My academic journey led me to graduate from <b>United College Of Engineering And Research Naini Prayagraj UP</b>, affiliated with <b>AKTU Lucknow UP</b>, where my passion for technology ignited.
              </>
            )}
            <br />
            <span className='read-more-btn' onClick={toggleReadMore}>
              {showFullParagraph ? 'Read Less' : 'Read More'}
            </span>
          </p>


          <a href='#contact' className='btn btn-primary'>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;


