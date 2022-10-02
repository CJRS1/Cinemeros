import React from 'react';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import agua from '../../../assets/Food/agua.png'
import comboduo from '../../../assets/Food/comboduo.png'
import combopersonal1 from '../../../assets/Food/combopersonal1.png'
import combopersonal2 from '../../../assets/Food/combopersonal2.png'
import combotrio from '../../../assets/Food/combotrio.png'
import gaseosagrande from '../../../assets/Food/gaseosagrande.png'
import gaseosamediana from '../../../assets/Food/gaseosamediana.png'
import papas from '../../../assets/Food/papas.png'

import './food.css'

const Food = () => {

    function useScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
    }

    useScrollToTop();

    return (
        <div className='container__fooddetails'>
            <div className="card__fooddetails">
                <img src={combotrio} className="img__food" alt="" />
                <div className="food__container">
                <div className="food__details">
                    <div className="food__name">
                        <h5>COMBO TRIO</h5>
                        <h5>S/ 71.00</h5>
                    </div>
                    <p>3 CANCHITAS MEDIANAS SALADAS + 3 GASEOSAS MEDIANAS</p>
                </div>

                <div className="food__botoncanasta">

                <div className="food__bcounter">
                <button className='btn__food'>-</button>
                <span>0</span>
                <button className='btn__food'>+</button>

                </div>
                
            </div>
                </div>
                
            </div>
            <div className="card__fooddetails">
                <img src={comboduo} className="img__food" alt="" />
                <div className="food__container">
                <div className="food__details">
                    <div className="food__name">
                        <h5>COMBO DUO</h5>
                        <h5>S/ 56.00</h5>
                    </div>
                    <p>2 CANCHITAS MEDIANAS SALADAS + 2 GASEOSAS GRANDES</p>
                </div>

                <div className="food__botoncanasta">

                <div className="food__bcounter">
                <button className='btn__food'>-</button>
                <span>0</span>
                <button className='btn__food'>+</button>

                </div>
                
            </div>
                </div>
                
            </div>
            <div className="card__fooddetails">
                <img src={combopersonal1} className="img__food" alt="" />
                <div className="food__container">
                <div className="food__details">
                    <div className="food__name">
                        <h5>COMBO PERSONAL 1</h5>
                        <h5>S/ 71.00</h5>
                    </div>
                    <p>1 CANCHITA MEDIANA C/SAL + 1 GASEOSA MEDIANA</p>
                </div>

                <div className="food__botoncanasta">

                <div className="food__bcounter">
                <button className='btn__food'>-</button>
                <span>0</span>
                <button className='btn__food'>+</button>

                </div>
                
            </div>
                </div>
                
            </div>
            <div className="card__fooddetails">
                <img src={gaseosagrande} className="img__food" alt="" />
                <div className="food__container">
                <div className="food__details">
                    <div className="food__name">
                        <h5>GASEOSA GRANDE</h5>
                        <h5>S/ 71.00</h5>
                    </div>
                    <p>1 CANCHITA MEDIANA C/SAL + 1 GASEOSA GRANDE</p>
                </div>

                <div className="food__botoncanasta">

                <div className="food__bcounter">
                <button className='btn__food'>-</button>
                <span>0</span>
                <button className='btn__food'>+</button>

                </div>
                
            </div>
                </div>
                
            </div>
            <div className="card__fooddetails">
                <img src={gaseosamediana} className="img__food" alt="" />
                <div className="food__container">
                <div className="food__details">
                    <div className="food__name">
                        <h5>GASEOSA MEDIANA</h5>
                        <h5>S/ 71.00</h5>
                    </div>
                    <p>3 CANCHITAS MEDIANAS SALADAS + 3 GASEOSAS MEDIANAS</p>
                </div>

                <div className="food__botoncanasta">

                <div className="food__bcounter">
                <button className='btn__food'>-</button>
                <span>0</span>
                <button className='btn__food'>+</button>

                </div>
                
            </div>
                </div>
                
            </div>
            <div className="card__fooddetails">
                <img src={agua} className="img__food" alt="" />
                <div className="food__container">
                <div className="food__details">
                    <div className="food__name">
                        <h5>AGUA</h5>
                        <h5>S/ 71.00</h5>
                    </div>
                    <p>3 CANCHITAS MEDIANAS SALADAS + 3 GASEOSAS MEDIANAS</p>
                </div>

                <div className="food__botoncanasta">

                <div className="food__bcounter">
                <button className='btn__food'>-</button>
                <span>0</span>
                <button className='btn__food'>+</button>

                </div>
                
            </div>
                </div>
                
            </div>
            <div className="card__fooddetails">
                <img src={papas} className="img__food" alt="" />
                <div className="food__container">
                <div className="food__details">
                    <div className="food__name">
                        <h5>PAPAS</h5>
                        <h5>S/ 71.00</h5>
                    </div>
                    <p>3 CANCHITAS MEDIANAS SALADAS + 3 GASEOSAS MEDIANAS</p>
                </div>

                <div className="food__botoncanasta">

                <div className="food__bcounter">
                <button className='btn__food'>-</button>
                <span>0</span>
                <button className='btn__food'>+</button>

                </div>
                
            </div>
                </div>
                
            </div>
            <div className="card__fooddetails">
                <img src={combopersonal2} className="img__food" alt="" />
                <div className="food__container">
                <div className="food__details">
                    <div className="food__name">
                        <h5>COMBO PERSONAL 2</h5>
                        <h5>S/ 71.00</h5>
                    </div>
                    <p>3 CANCHITAS MEDIANAS SALADAS + 3 GASEOSAS MEDIANAS</p>
                </div>

                <div className="food__botoncanasta">

                <div className="food__bcounter">
                <button className='btn__food'>-</button>
                <span>0</span>
                <button className='btn__food'>+</button>

                </div>
                
            </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Food;