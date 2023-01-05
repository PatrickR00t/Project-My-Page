import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <ul className='links-header'>
      <Link to='/'>
        <li className='link-header'>Home</li>
      </Link>
      <Link to='/about'>
        <li className='link-header'>About</li>
      </Link>
      <Link to='/projects'>
        <li className='link-header'>Projects</li>
      </Link>
      <Link to='/contact'>
        <li className='link-header'>Contact</li>
      </Link>
    </ul>
  );
}

export default Header;
