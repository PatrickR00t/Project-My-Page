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
      return alert('Todos os campos devem ser preenchidos');
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    emailjs.send('service_x5s4f6b', 'template_2g9x9xo', templateParams, '--21VRtetZsjy8bry')
    .then((response) => {
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log('erro: ', err)
    })
  }

  return (
    <>
      <h2>Contato</h2>
      <div className="container-contact">
        <form className="form" onSubmit={sendEmail}>
          <input 
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input 
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea 
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
}

export default Contact;
