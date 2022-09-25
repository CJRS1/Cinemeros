import React from 'react';
import Promo1 from '../../../assets/Promo1.png'
import Promo2 from '../../../assets/Promo2.png'
import Promo3 from '../../../assets/Promo3.png'
import Promo4 from '../../../assets/Promo4.png'
import Promo5 from '../../../assets/Promo5.png'
import Promo6 from '../../../assets/Promo6.png'
import './promo.css'

const Promo = () => {
    return (
        <div>
            <nav className='nav__promo'>
                <a className='container__promo' href="">

                    <img className='img__promo' src={Promo1} alt="" />

                    <div className="details__promo">
                        <h6>Función de descuento</h6>
                        <button className="btn">VER DETALLES</button>
                    </div>
                </a>
                <a className='container__promo' href="">
                    <img src={Promo2} alt="" />
                    <div className="details__promo">
                        <h6>Función de descuento</h6>
                        <button className="btn">VER DETALLES</button>
                    </div>
                </a>
                <a className='container__promo' href="">
                    <img src={Promo3} alt="" />
                    <div className="details__promo">
                        <h6>Función de descuento</h6>
                        <button className="btn">VER DETALLES</button>
                    </div>
                </a>
                <a className='container__promo' href="">
                    <img src={Promo4} alt="" />
                    <div className="details__promo">
                        <h6>Función de descuento</h6>
                        <button className="btn">VER DETALLES</button>
                    </div>
                </a>
                <a className='container__promo' href="">
                    <img src={Promo5} alt="" />
                    <div className="details__promo">
                        <h6>Función de descuento</h6>
                        <button className="btn">VER DETALLES</button>
                    </div>
                </a>
                <a className='container__promo' href="">
                    <img src={Promo6} alt="" />
                    <div className="details__promo">
                        <h6>Función de descuento</h6>
                        <button className="btn">VER DETALLES</button>
                    </div>
                </a>
            </nav>
        </div>
    );
};

export default Promo;