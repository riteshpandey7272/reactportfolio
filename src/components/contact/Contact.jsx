import React from 'react'
import './Contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {RiInstagramFill} from 'react-icons/ri'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const from = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_71d9m2s', 'template_zvw3bev', from.current, 'D10CfPoIRRTcpDcd3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact</h2>

    <div className="container contact__container">
      <div className="contact_options">
        <article className='contact__option'>
          <MdOutlineMarkEmailRead />
          <h4>Email ID</h4>
          <h5> rishupandey80@gmail.com </h5>
          <a href="mailto: rishupandey80@gmail.com" target='_blannk'> Send a message</a>
        </article>

        <article className='contact__option'>
          <RiInstagramFill />
          <h4>Instagram</h4>
          <h5> Ritesh Pandey </h5>
          <a href="https://www.instagram.com/_iampandey_/" target='_blannk'> Send a message</a>
        </article>

        <article className='contact__option'>
          <RiWhatsappFill />
          <h4>Whatsapp</h4>
          <h5> +917054219942</h5>
          <a href="https://api.whatsapp.com/send?phone=+917054219942" target='_blannk'> Send a message</a>
        </article>
      </div>
      <form ref={from} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required> </textarea>
        <button type='sybmit' className='btn btn-primary'> Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact