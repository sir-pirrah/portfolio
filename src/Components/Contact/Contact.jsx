import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from "react";


function Contact() {

    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_l37bz9b', 'template_agqe4la', form.current, {
          publicKey: 'IH2B18qqgmijvKCM8',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setDone(true);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };







  return (
 <div className="contact-form">
    <div className="w-left">
        <div className="awesome">
            <span>Get in touch</span>
            <span>Contact me</span>
            <div className="blur s-blur"
            style={{ background: "#ABF1FF94"}}
            ></div>
        </div>
    </div>

    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user" placeholder="Name"/>
            <input type="email" name="user_email" className="user" placeholder="Email"/>
            <textarea name="message" id="message" placeholder="Message"></textarea>
            <input type="submit" value="Send" className="button"/>
            <span>{done && "Thanks for contacting me!"}</span>
            <div className="blur c-blur1"
            style={{ background: "var(--purple)"}
            }></div>
        </form>
    </div>
 </div>
  )
}

export default Contact