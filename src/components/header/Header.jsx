import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <ul className='links-header'>
      <Link to='/'>
        <li className='link-header'>Casa</li>
      </Link>
      <Link to='/about'>
        <li className='link-header'>Sobre</li>
      </Link>
      <Link to='/projects'>
        <li className='link-header'>Projetos</li>
      </Link>
      <Link to='/contact'>
        <li className='link-header'>Contato</li>
      </Link>
    </ul>
  );
}

export default Header;
