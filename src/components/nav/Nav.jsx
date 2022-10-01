import React from 'react'
import { BiMoviePlay } from 'react-icons/bi'
import { MdFastfood } from 'react-icons/md'
import { MdOutlinePlace } from 'react-icons/md'
import { GiSpellBook } from 'react-icons/gi'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import logo from '../../assets/Cinemeros.jpg'
import './nav.css'



const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        
        <div className='menu__nav-container'>
            <nav className='menu__container'>
                <Link to="/#Header"> <img className='img_logo' src={logo} alt="Cinemeros" /></Link>
                <Link to="/#Listings" onClick={() => setActiveNav('#Listings')} className={activeNav === '#Listings' ? 'active' : ''}><BiMoviePlay style={{ fontSize: '30px' }} />  Películas </Link>
                <NavLink to="/locate"><MdOutlinePlace style={{ fontSize: '30px' }} /> Ubícanos</NavLink>
                <NavLink to="/promo"><GiSpellBook style={{ fontSize: '30px' }} /> Promociones</NavLink>
                <NavLink to="/food" ><MdFastfood style={{ fontSize: '30px' }} /> Alimentos y bebidas</NavLink>
            </nav>
        </div>
        
    )
}

export default Nav