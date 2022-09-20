import React from 'react'
import './header.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'


const Header = () => {
  return (
    <div className='header_container' id='Header'>
      <nav className='nav_container'>
      <a href="https://www.facebook.com" className='nav_menu' ><BsFacebook style={{ fontSize: '30px' }} />  </a>
      <a href="https://twitter.com/?lang=en" className='nav_menu'><BsInstagram style={{ fontSize: '30px' }} /> </a>
      <a href="https://www.instagram.com" className='nav_menu'><AiFillTwitterCircle style={{ fontSize: '30px' }} />   </a>
      </nav>
      
      <nav className='nav_container'>
      <a href="#contact" className='nav_menu' >Conócenos</a>
      <a href="#work" className='nav_menu' >Trabaja con nosotros</a>
      <button className="btn">Registrarse</button>
      <button className="btn">Iniciar sesión</button>
      </nav>
    </div>
  )
}

export default Header