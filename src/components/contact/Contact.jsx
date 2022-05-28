import React from "react";
import { useRef, useState } from "react";

import "./contact.css";

import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

import emailjs from "emailjs-com";

function Contact(props) {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_giohdsk",
        "template_i8z20l8",
        formRef.current,
        "gIsMsw2ziBsOuWZrb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id={props.id} className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img className="c-icon" src={Phone} alt="" className="c-icon" />
              +66 845344xxx
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" className="c-icon" />
              b.wanats@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" className="c-icon" />
              Bangkok, Thailand
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-desc">
            <b>What's your story?</b>
            <br />
            Let us help you build the application that's suitable for your
            business!
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            {done && <b>"Thank you..."</b>}
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
