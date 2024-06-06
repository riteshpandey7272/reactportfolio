import React, { useState } from 'react';
import './Contact.css';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';
import { RiWhatsappFill } from 'react-icons/ri';
import emailjs from 'emailjs-com';
import { IoIosCloudDone } from "react-icons/io";


const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const formRef = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_6gak02a', 'template_yylp1q4', formRef.current, '7BHCZELwsRG5EKXCn')
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
  
          // Reset form fields
          formRef.current.reset();
  
          setTimeout(() => {
            setMessageSent(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className='contact__option'>
            <MdOutlineMarkEmailRead />
            <p>Email ID</p>
            <p> rishupandey80@gmail.com </p>
            <a href="mailto: rishupandey80@gmail.com" target='_blannk'> Send a message</a>
          </article>

          <article className='contact__option'>
            <RiInstagramFill />
            <p>Instagram</p>
            <p> Ritesh Pandey </p>
            <a href="https://www.instagram.com/_iampandey_/" target='_blannk'> Send a message</a>
          </article>

          <article className='contact__option'>
            <RiWhatsappFill />
            <p>Whatsapp</p>
            <p> +917054219942</p>
            <a href="https://api.whatsapp.com/send?phone=+917054219942" target='_blannk'> Send a message</a>
          </article>
        </div>

        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>

        {messageSent && (
          <div className="popup">
            <p><IoIosCloudDone />
              Thank you for your message!...
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
