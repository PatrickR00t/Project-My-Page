import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (event) => {
    event.preventDefault();

    if (name === '' || email === '' || message === '') {
      return alert('All fields must be filled');
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send('service_pnc7j0x', 'template_fdi0wqh', templateParams, '7hPQDLSA4veBmboT4')
    .then((response) => {
      alert("Email successfully sent")
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      alert("Send failed")
      console.log('erro: ', err)
    })
  }

  return (
    <>
      <h2>Contact</h2>
      <div className="container-contact">
        <form className="form" onSubmit={sendEmail}>
          <input 
            className="input"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input 
            className="input"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea 
            className="textarea"
            placeholder="Enter your message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </>
  );
}

export default Contact;
