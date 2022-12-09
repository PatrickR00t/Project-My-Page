import React from 'react';
import ProfileImage from '../../images/profile-image.jpeg';
import './About.css';

function About() {
  return (
    <>
      <h2>Sobre mim</h2>
      <hr />
      <div className='container-about'>
        <div className='content-about'>
          <img src={ ProfileImage } alt="me" />
          <div className='about-certificates'>
            <h3>Certificações:</h3>
            <a
              href="https://www.credential.net/815d9b6a-e576-4527-984d-34f5c9ab17b9#gs.kbkrit"
              target="_blank"
              rel="noopener noreferrer"
            >Fundamentos</a>
            <a
              href="https://www.credential.net/a958a058-2b79-4c2c-9610-544d06e130e8#gs.kbkv9y"
              target="_blank"
              rel="noopener noreferrer"
            >Frontend</a>
            <a
              href="https://www.credential.net/0dc50952-be08-4dc0-bea7-d4839ef29e73"
              target="_blank"
              rel="noopener noreferrer"
            >Backend</a>
            <a
              href="https://www.credential.net/50352802-f742-4174-8e86-573e12de2b38#gs.kbh5ci"
              target="_blank"
              rel="noopener noreferrer"
            >Ciência da Computação</a>
          </div>
          <div className='about-tech'>
            <h3>Principais Tecnologias:</h3>
            <button>Node</button>
            <button>Git</button>
            <button>C#</button>
            <button>Html</button>
            <button>Css</button>
            <button>Java Script</button>
            <button>React</button>
            <button>Type Script</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
