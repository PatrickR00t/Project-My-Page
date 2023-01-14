import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ProfileImage from '../../images/profile-image.jpeg';
import TypeIt from 'typeit-react';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <img src={ ProfileImage } alt="me" />
      <h1>I'm Patrick</h1>
      <TypeIt className='dinamic-text'
        options={{
          loop: true,
        }}
        getBeforeInit={(instance) => {
          instance.type(" Pentester").pause(700).delete(9).type("Developer").pause(700);
          return instance;
        }}
      />
      <br />
      <a href="https://github.com/PatrickR00t" target="_blank" rel="noopener noreferrer">
        <AiFillGithub className='icons' />
      </a>
      <a href="https://www.linkedin.com/in/patrick-santiago-840b41219/?original_referer=https%3A%2F%2Fgithub.com%2FPatrickR00t" target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin className='icons' />
      </a>
    </div>
  );
}

export default Home;
