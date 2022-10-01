import React from 'react';
import Promo1 from '../../../assets/Promo1.png'
import Promo2 from '../../../assets/Promo2.png'
import Promo3 from '../../../assets/Promo3.png'
import Promo4 from '../../../assets/Promo4.png'
import Promo5 from '../../../assets/Promo5.png'
import Promo6 from '../../../assets/Promo6.png'
import DetailsPromo1 from './DetailsPromo1/DetailsPromo1'
import DetailsPromo2 from './DetailsPromo2/DetailsPromo2'
import DetailsPromo3 from './DetailsPromo3/DetailsPromo3'
import DetailsPromo4 from './DetailsPromo4/DetailsPromo4'
import DetailsPromo5 from './DetailsPromo5/DetailsPromo5'
import DetailsPromo6 from './DetailsPromo6/DetailsPromo6'


import './promo.css'

const Promo = () => {
    return (
        <div className='div__promo'>
            <nav className='nav__promo'>
                    <a className='container__promo' href="!#">
                        <img className='img__promo' src={Promo1} alt="" />
                        <div className="details__promo">
                            {/* <h6>Función de descuento</h6> */}
                            <DetailsPromo1/>
                            {/* <button className="btn">VER DETALLES</button> */}
                        </div>
                    </a>
                <a className='container__promo' href="!#">
                    <img className='img__promo' src={Promo2} alt="" />
                    <div className="details__promo">
                        {/* <h6>Función de descuento</h6> */}
                        <DetailsPromo2/>
                    </div>
                </a>
                <a className='container__promo' href="!#">
                    <img className='img__promo' src={Promo3} alt="" />
                    <div className="details__promo">
                        {/* <h6>Función de descuento</h6> */}
                        {/* <button className="btn">VER DETALLES</button> */}
                        <DetailsPromo3/>
                    </div>
                </a>
                <a className='container__promo' href="!#">
                    <img className='img__promo' src={Promo4} alt="" />
                    <div className="details__promo">
                        {/* <h6>Función de descuento</h6> */}
                        {/* <button className="btn">VER DETALLES</button> */}
                        <DetailsPromo4/>
                    </div>
                </a>
                <a className='container__promo' href="!#">
                    <img className='img__promo' src={Promo5} alt="" />
                    <div className="details__promo">
                        {/* <h6>Función de descuento</h6> */}
                        {/* <button className="btn">VER DETALLES</button> */}
                        <DetailsPromo5/>
                    </div>
                </a>
                <a className='container__promo' href="!#">
                    <img className='img__promo' src={Promo6} alt="" />
                    <div className="details__promo">
                        {/* <h6>Función de descuento</h6> */}
                        {/* <button className="btn">VER DETALLES</button> */}
                        <DetailsPromo6/>
                    </div>
                </a>
            </nav>
            
        </div>

        
    );
};

export default Promo;