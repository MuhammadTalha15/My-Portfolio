
import { useState } from 'react'
import React from 'react'
import '../styles/navbar.css'
import Logo from '../assets/Logo/logo.png';
import AppIconWhite from '../assets/Icons/white.png';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [navbarClass, setnavbarClass] = useState('navbar');

  const navbarToggle = () => {
    setnavbarClass((prevClass) => (prevClass === 'navbar') ? 'navbar-active' : 'navbar')
  }

  return (
    <>
    <header className='header'>
      <Link to="/My-Portfolio"><img className='logo' src={Logo} alt="" /></Link>
      <nav id='nav' className={navbarClass}>
        <ul>
          <Link to="/My-Portfolio"><li className='nav-li'>Home Page</li></Link>
          <Link to="/about"><li className='nav-li'>About Me</li></Link>
          <Link to="/projects"><li className='nav-li'>Projects</li></Link>
          <Link to="/contact"><li className='nav-li'>Contact Me</li></Link>
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


