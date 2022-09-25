import React from 'react'
import './header.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsCartPlusFill} from 'react-icons/bs'
import {BrowserRouter, NavLink} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'

const Header = () => {
  return (
    <BrowserRouter>
    <div className='header_container' id='Header'>
      <nav className='nav_container'>
        
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"className='nav_menu' ><BsFacebook style={{ fontSize: '30px' }} /></a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='nav_menu'><BsInstagram style={{ fontSize: '30px' }} /></a>
      <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer"  className='nav_menu'><AiFillTwitterCircle style={{ fontSize: '30px' }} /></a>
      </nav>
      <nav className='nav_container'>

      <Link to="/#contact"  className='nav_menu'>Contáctanos</Link>

      <NavLink to="/work" className='nav_menu' >Trabaja con nosotros</NavLink>
      </nav>
      <nav className='nav_container'>
      <button className="btn">Registrarse</button>
      <button className="btn">Iniciar sesión</button>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='nav_menu' ><BsCartPlusFill style={{ fontSize: '30px' }} /></a>
      </nav>
      
    </div>
    </BrowserRouter>
    
  )
}

export default Header