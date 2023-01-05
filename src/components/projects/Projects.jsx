import React from 'react';
import image from '../../images/project-image.png';
import image2 from '../../images/project-image-2.png';
import './Projects.css';

function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <div className='container-projects'>
        <div className='content-project'>
          <h2>Movies</h2>
          <img src={image} alt="project" />
          <div className='projects-links'>
            <a 
              href="https://patrickr00t-the-movies.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >View</a>
            <a 
              href="https://github.com/PatrickR00t/Project-The-Movies"
              target="_blank"
              rel="noopener noreferrer"              
            >Source</a>
          </div>
        </div>
        <div className='content-project'>
          <h2>Shopping</h2>
          <img src={image2} alt="project" />
          <div className='projects-links'>
            <a
              href="https://patrickr00t-shopping-cart.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >View</a>
            <a
              href="https://github.com/PatrickR00t/Project-Shopping-Cart"
              target="_blank"
              rel="noopener noreferrer"
            >Source</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
