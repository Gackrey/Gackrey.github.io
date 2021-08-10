import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
function Result() {
  return (
    <p className="result">Your message is sent. Please wait for my response</p>
  );
}
export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r9wfoe8",
        "template_41vhwpt",
        e.target,
        "user_4a4ogGzspOsZZSaRJ8z2A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setSubmitted(true);
  }

  return (
    <div id="contact">
      <h1 className="heading">Contact Me</h1>
      {submitted ? <Result /> : ""}
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea name="message" rows="6" required />
        <button type="submit" className="projectbutton bold">
          Send
        </button>
      </form>
    </div>
  );
};
