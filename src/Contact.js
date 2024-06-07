
import React, {useRef} from "react";
import './App.css';
import emailjs from '@emailjs/browser';
import Footer from "./Footer";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_28fpss5', 
        'template_a47m4gr', 
        form.current, {
        publicKey: 'yJdeMngK8mfIN-MVd',
      })
      .then(
        () => {
          console.log('Your email was sent!');
          alert('Your email was successfully sent!')
          e.target.reset();
        },
        (error) => {
          console.log('Error ...', error.text);
        },
      );
  };

  return (
    <>
    <div className='contact-page'>
    <div className='contact'>
        <div className="contact-me">
           <h1>Contact me</h1>
           </div>
      <div className="form">
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor='First-name'>Name</label> <br />
      <input type="text" name="user_name" required/> <br />
      <label htmlFor='Email'>Email</label> <br />
      <input type="email" name="user_email" required/><br />
      <label htmlFor='Message'>Message</label> <br />
      <textarea className='message-style' name="message" required/><br />
      <button className='submit-button' type="submit">SEND</button> 
    </form>
    </div>
    </div>
<Footer />
</div>
</>
  );
};

export default Contact;