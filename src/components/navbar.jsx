
import { useState } from 'react'
import React from 'react'
import '../styles/navbar.css'
import Logo from '../assets/Logo/logo.png';
import AppIconWhite from '../assets/Icons/white.png';

const Navbar = (props) => {
  const [navbarClass, setnavbarClass] = useState('navbar');

  const navbarToggle = () => {
    setnavbarClass((prevClass) => (prevClass === 'navbar') ? 'navbar-active' : 'navbar')
  }

  return (
    <>
    <header className='header'>
      <img className='logo' src={Logo} alt="" />
      <nav id='nav' className={navbarClass}>
        <ul>
          <li className='nav-li'>About Me</li>
          <li className='nav-li'>Projects</li>
          <li className='nav-li'>Articals</li>
          <li className='nav-li'>Contact Me</li>
        </ul>
      </nav>

      <button className='btnWrpr' onClick={navbarToggle}>
        <img className='navbarBtn' src={AppIconWhite} alt="" />
      </button>

    </header>
    </>
  )
}

export default Navbar;


