import React from 'react';
import image from '../../images/project-image.png';
import image2 from '../../images/project-image-2.png';
import './Projects.css';

function Projects() {
  return (
    <>
      <h2>Projetos</h2>
      <div className='container-projects'>
        <div className='content-project'>
          <h2>Filmes</h2>
          <img src={image} alt="project" />
          <div className='projects-buttons'>
            <a href="https://patrickr00t-the-movies.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Visão</button>
            </a>
            <a href="https://github.com/PatrickR00t/Project-The-Movies" target="_blank" rel="noopener noreferrer">
              <button>Fonte</button>
            </a>
          </div>
        </div>
        <div className='content-project'>
          <h2>Carrinho</h2>
          <img src={image2} alt="project" />
          <div className='projects-buttons'>
            <a href="https://patrickr00t-shopping-cart.netlify.app" target="_blank" rel="noopener noreferrer">
              <button>Visão</button>
            </a>
            <a href="https://github.com/PatrickR00t/Project-Shopping-Cart" target="_blank" rel="noopener noreferrer">
              <button>Fonte</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
