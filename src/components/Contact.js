import { render } from '@testing-library/react';
import React, { useEffect, useRef } from 'react';
import styles from "./Contact.css";
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2dt5qs8', 'template_puzqpvs', form.current, 'user_C7gzVm4ecUCU38p1wXg1v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <div className="contact">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Contact;