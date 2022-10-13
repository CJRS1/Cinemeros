import React from 'react'
import { BiMoviePlay } from 'react-icons/bi'
import { MdFastfood } from 'react-icons/md'
import { MdOutlinePlace } from 'react-icons/md'
import { GiSpellBook } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../../assets/Cinemeros.jpg'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './nav.css'

const Nav = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (

        <div className='menu__nav-container'>
            <nav className='menu__container' ref={navRef}>
                <Link to="/Cinemeros/#Header" onClick={showNavbar}> <img className='img_logo' src={logo} alt="Cinemeros" /></Link>
                <Link to="/Cinemeros/#Listings" onClick={showNavbar}><BiMoviePlay style={{ fontSize: '30px' }} />  Películas </Link>
                <NavLink to="/Cinemeros/locate" onClick={showNavbar}><MdOutlinePlace style={{ fontSize: '30px' }} /> Ubícanos</NavLink>
                <NavLink to="/Cinemeros/promo" onClick={showNavbar}><GiSpellBook style={{ fontSize: '30px' }} /> Promociones</NavLink>
                <NavLink to="/Cinemeros/food" onClick={showNavbar}><MdFastfood style={{ fontSize: '30px' }} /> Alimentos y bebidas</NavLink>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </div>

    )
}
export default Nav