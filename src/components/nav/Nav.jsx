import React from 'react'
import { BiMoviePlay } from 'react-icons/bi'
import { MdFastfood } from 'react-icons/md'
import { MdOutlinePlace } from 'react-icons/md'
import { GiSpellBook } from 'react-icons/gi'
import { useState } from 'react'
import logo from '../../assets/Cinemeros.jpg'
import './nav.css'



const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <div className='menu__nav-container'>
            <nav className='menu__container'>
                <a href="#Header" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <img className='img_logo' src={logo} alt="Cinemeros" /></a>
                <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiMoviePlay style={{ fontSize: '30px' }} />  Películas </a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdOutlinePlace style={{ fontSize: '30px' }} /> Ubícanos</a>
                <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSpellBook style={{ fontSize: '30px' }} /> Promociones</a>
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#food' ? 'active' : ''}><MdFastfood style={{ fontSize: '30px' }} /> Alimentos y bebidas</a>
            </nav>
        </div>
        
    )
}

export default Nav